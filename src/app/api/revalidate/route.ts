// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest) {
//   const secret = req.nextUrl.searchParams.get('secret');

//   console.log('🟧 secret', secret);
//   console.log(
//     '🟩 process.env.SANITY_REVALIDATE_SECRET:',
//     process.env.SANITY_REVALIDATE_SECRET,
//   );

//   if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
//     return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
//   }

//   console.log(
//     '🔥 process.env.SANITY_REVALIDATE_SECRET===secret',
//     process.env.SANITY_REVALIDATE_SECRET === secret,
//   );

//   if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
//     return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
//   }

//   try {
//     const body = await req.json();
//     const pathsToRevalidate = getPathsFromSanityWebhook(body);

//     // Ревалідуємо всі змінені сторінки
//     for (const path of pathsToRevalidate) {
//       console.log('path👀', path);
//       await fetch(
//         `${process.env.NEXT_PUBLIC_HOST}/api/revalidatePath?path=${path}&secret=${process.env.SANITY_REVALIDATE_SECRET}`,
//       );
//     }

//     return NextResponse.json({ revalidated: true });
//   } catch (error) {
//     return NextResponse.json(
//       { message: 'Error revalidating', error },
//       { status: 500 },
//     );
//   }
// }

// // Функція, яка витягує шляхи для ревалідації на основі Sanity-пейлоаду
// function getPathsFromSanityWebhook(body: any): string[] {
//   if (!body || !body._type) return [];

//   const locales = ['en', 'uk']; // Локалі вашого проєкту
//   const slug = body.slug?.current;

//   if (!slug) return [];

//   return locales.map(locale => `/${locale}/blog/${slug}`);
// }

// function getPathsFromSanityWebhook(body: any): string[] {
//   if (!body || !body._type) return [];

//   const locales = ['en', 'uk']; // Локалі проєкту
//   const slug = body.slug?.current;
//   const type = body._type;

//   let paths: string[] = [];

//   switch (type) {
//     case 'blog': // 📝 Окрема стаття блогу + сторінка всіх статей
//       if (slug) {
//         paths.push(...locales.map(locale => `/${locale}/blog/${slug}`));
//       }
//       paths.push(...locales.map(locale => `/${locale}/blog`));
//       break;

//     case 'product': // 🛒 Окремий продукт + сторінка всіх продуктів
//       if (slug) {
//         paths.push(...locales.map(locale => `/${locale}/product/${slug}`));
//       }
//       paths.push(...locales.map(locale => `/${locale}/products`));
//       break;

//     case 'collection': // 📂 Оновлення категорії → ревалідація всіх продуктів у цій категорії
//       if (slug) {
//         paths.push(...locales.map(locale => `/${locale}/collection/${slug}`));
//       }
//       paths.push(...locales.map(locale => `/${locale}/collections`));
//       break;

//     case 'gallery': // 🖼️ Галерея зображень
//       paths.push(...locales.map(locale => `/${locale}/gallery`));
//       break;

//     case 'homepage': // 🏠 Головна сторінка (якщо змінюється контент)
//       paths.push(...locales.map(locale => `/${locale}`));
//       break;

//     default:
//       console.log(`⚠️ No revalidation rule for type: ${type}`);
//   }

//   return paths;
// }

// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest) {
//   const secret = req.nextUrl.searchParams.get('secret');

//   console.log('🟧 secret', secret);
//   console.log(
//     '🟩 process.env.SANITY_REVALIDATE_SECRET:',
//     process.env.SANITY_REVALIDATE_SECRET,
//   );

//   if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
//     return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
//   }

//   console.log(
//     '🔥 process.env.SANITY_REVALIDATE_SECRET===secret',
//     process.env.SANITY_REVALIDATE_SECRET === secret,
//   );

//   if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
//     return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
//   }

//   try {
//     console.log('🔄 Revalidating ALL pages...');

//     await fetch(
//       `${process.env.NEXT_PUBLIC_HOST}/api/revalidatePath?path=/&secret=${process.env.SANITY_REVALIDATE_SECRET}`,
//     );

//     return NextResponse.json({ revalidated: true });
//   } catch (error) {
//     console.error('❌ Error in revalidation:', error);
//     return NextResponse.json(
//       { message: 'Error revalidating', error },
//       { status: 500 },
//     );
//   }
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');

  console.log('🟧 secret', secret);
  console.log(
    '🟩 process.env.SANITY_REVALIDATE_SECRET:',
    process.env.SANITY_REVALIDATE_SECRET,
  );
  console.log(
    '🔥 process.env.SANITY_REVALIDATE_SECRET===secret:',
    process.env.SANITY_REVALIDATE_SECRET === secret,
  );

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const pathsToRevalidate = getPathsFromSanityWebhook(body);

    console.log('🧍‍♀️body', body);
    console.log('🚗pathsToRevalidate', pathsToRevalidate);

    for (const path of pathsToRevalidate) {
      console.log('🔄 Revalidating path:', path);
      await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/revalidatePath?path=${path}&secret=${process.env.SANITY_REVALIDATE_SECRET}`,
      );
    }

    return NextResponse.json({ revalidated: true });
  } catch (error) {
    console.error('❌ Error in revalidation:', error);
    return NextResponse.json(
      { message: 'Error revalidating', error },
      { status: 500 },
    );
  }
}

function getPathsFromSanityWebhook(body: any): string[] {
  if (!body || !body._type) return [];

  const locales = ['en', 'uk'];
  const slug = body.slug?.current;
  const type = body._type;
  const paths: string[] = [];

  switch (type) {
    case 'Post':
      if (slug) paths.push(...locales.map(locale => `/${locale}/blog/${slug}`));
      paths.push(...locales.map(locale => `/${locale}/blog`));
      break;
    case 'media':
      paths.push(...locales.map(locale => `/${locale}/media`));
      break;
    case 'documents':
      paths.push(...locales.map(locale => `/${locale}/documents`));
      break;
    case 'research':
      paths.push(...locales.map(locale => `/${locale}/research`));
      break;
    case 'advisors':
      if (slug)
        paths.push(...locales.map(locale => `/${locale}/advisors/${slug}`));
      paths.push(...locales.map(locale => `/${locale}/advisors`));
      break;
    case 'privacyPolicy':
      paths.push(...locales.map(locale => `/${locale}/privacy-policy`));
      break;
    case 'tenders':
      if (slug)
        paths.push(...locales.map(locale => `/${locale}/tenders/${slug}`));
      paths.push(...locales.map(locale => `/${locale}/tenders`));
      break;
    case 'projects':
      if (slug)
        paths.push(...locales.map(locale => `/${locale}/projects/${slug}`));
      paths.push(...locales.map(locale => `/${locale}/projects`));
      break;
    case 'partners':
    case 'activities':
      paths.push(...locales.map(locale => `/${locale}/main-areas`));
      break;
    case 'donors':
      if (slug)
        paths.push(...locales.map(locale => `/${locale}/projects/${slug}`));
      paths.push(...locales.map(locale => `/${locale}/strategy`));
      break;
    case 'team':
      paths.push(...locales.map(locale => `/${locale}/team`));
      break;
    default:
      console.log(`⚠️ No revalidation rule for type: ${type}`);
  }

  // Завжди ревалідовуємо головну сторінку і сторінку пошуку
  paths.push(...locales.map(locale => `/${locale}`));
  paths.push(...locales.map(locale => `/${locale}/search`));

  return paths;
}
