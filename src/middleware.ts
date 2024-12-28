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
  const { pathname, search } = request.nextUrl;

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
    const redirectUrl = new URL(
      `/${locale}${pathname}${search ? search : ''}`,
      request.url,
    );

    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set(cookieName, locale);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|static|images|favicon.ico).*)'],
};
