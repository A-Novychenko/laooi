/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-sanity-webhook-signature');

  console.log('🔹 Received X-Sanity-Webhook-Signature:', secret);
  console.log('🔹 Expected:', process.env.SANITY_REVALIDATE_SECRET);

  if (!secret || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  console.log(
    'process.env.SANITY_REVALIDATE_SECRET',
    process.env.SANITY_REVALIDATE_SECRET,
  );

  console.log(
    'process.env.SANITY_REVALIDATE_SECRET===secret',
    process.env.SANITY_REVALIDATE_SECRET === secret,
  );

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const pathsToRevalidate = getPathsFromSanityWebhook(body);

    // Ревалідуємо всі змінені сторінки
    for (const path of pathsToRevalidate) {
      await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/revalidatePath?path=${path}&secret=${process.env.SANITY_REVALIDATE_SECRET}`,
      );
    }

    return NextResponse.json({ revalidated: true });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error revalidating', error },
      { status: 500 },
    );
  }
}

// Функція, яка витягує шляхи для ревалідації на основі Sanity-пейлоаду
function getPathsFromSanityWebhook(body: any): string[] {
  if (!body || !body._type) return [];

  const locales = ['en', 'uk']; // Локалі вашого проєкту
  const slug = body.slug?.current;

  if (!slug) return [];

  return locales.map(locale => `/${locale}/blog/${slug}`);
}
