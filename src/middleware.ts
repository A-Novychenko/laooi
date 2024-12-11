// import { NextRequest, NextResponse } from 'next/server';
// import Negotiator from 'negotiator';
// import { match } from '@formatjs/intl-localematcher';

// const locales = ['en', 'uk'];
// const defaultLocale = 'uk';

// const cookieName = 'locale';

// // // Получить предпочтительную локаль, аналогично приведенному выше или с помощью библиотеки
// // function getLocale(request: NextRequest) {
// //   return defaultLocale;
// // }

// // Получить Accept-Languageиз заголовков HTTP. Если он пустой, то вернуть язык по умолчанию.
// // Анализирует список языков Accept - Languageи сопоставляет его,
// //   чтобы получить соответствующий язык на основе настроенного списка языков.
// //   (Если совпадений нет, возвращает язык по умолчанию)

// function getLocale(request: NextRequest) {
//   // Get locale from cookie
//   if (request.cookies.has(cookieName))
//     return request.cookies.get(cookieName)!.value;

//   // Get accept language from HTTP headers
//   const acceptLang = request.headers.get('Accept-Language');
//   if (!acceptLang) return defaultLocale;

//   const headers = { 'accept-language': acceptLang };
//   const languages = new Negotiator({ headers }).languages();
//   const replaceRussianWithUkrainianLanguages =
//     languages &&
//     languages.map(el => {
//       if (el === 'ru-RU') {
//         return 'uk-UA';
//       }
//       if (el === 'ru') {
//         return 'uk';
//       }
//       return el;
//     });

//   return match(replaceRussianWithUkrainianLanguages, locales, defaultLocale);
// }

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith('/_next')) return NextResponse.next();
//   if (request.nextUrl.pathname.startsWith('/meta')) return NextResponse.next();

//   if (request.nextUrl.pathname.startsWith('/images')) {
//     return NextResponse.next();
//   }

//   if (request.nextUrl.pathname.startsWith('/studio')) {
//     return NextResponse.next();
//   }

//   // Проверить, есть ли поддерживаемая локаль в имени пути
//   const { pathname } = request.nextUrl;
//   const pathnameHasLocale = locales.some(
//     locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
//   );

//   if (pathnameHasLocale) return;
//   // Перенаправить, если локаль отсутствует
//   const locale = getLocale(request);
//   request.nextUrl.pathname = `/${locale}${pathname}`;
//   // например, входящий запрос - /products
//   // Новый URL теперь /en-US/products
//   const response = NextResponse.redirect(request.nextUrl);

//   // Set locale to cookie
//   response.cookies.set(cookieName, locale);
//   return response;
// }

// export const config = {
//   matcher: [
//     // Пропустить все внутренние пути (_next)
//     '/((?!_next).*)',
//     // Необязательно: запустить только для корневого (/) URL
//     // '/'
//   ],
// };
import { NextRequest, NextResponse } from 'next/server';
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';

const locales = ['en', 'uk'];
const defaultLocale = 'uk';
const cookieName = 'locale';

function getLocale(request: NextRequest) {
  if (request.cookies.has(cookieName))
    return request.cookies.get(cookieName)!.value;

  const acceptLang = request.headers.get('Accept-Language');
  if (!acceptLang) return defaultLocale;

  const headers = { 'accept-language': acceptLang };
  const languages = new Negotiator({ headers }).languages();
  const replaceRussianWithUkrainianLanguages = languages?.map(el =>
    el === 'ru-RU' || el === 'ru' ? 'uk' : el,
  );

  return match(replaceRussianWithUkrainianLanguages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ігнорувати службові маршрути і статичні ресурси
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/studio') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Перевірка, чи є локаль у шляху
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (!pathnameHasLocale) {
    // Додавання локалі, якщо її немає
    const locale = getLocale(request);
    const redirectUrl = new URL(`/${locale}${pathname}`, request.url);

    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set(cookieName, locale);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|static|images|favicon.ico).*)'],
};
