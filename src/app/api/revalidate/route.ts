/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const pathsToRevalidate = getPathsFromSanityWebhook(body);

    for (const path of pathsToRevalidate) {
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
    case 'privacy-policy':
      paths.push(...locales.map(locale => `/${locale}/privacy-policy`));
      break;
    case 'tenders':
      if (slug)
        paths.push(...locales.map(locale => `/${locale}/tenders/${slug}`));
      paths.push(...locales.map(locale => `/${locale}/tenders`));
      break;
    case 'projects':
      if (slug) paths.push(...locales.map(locale => `/${locale}/projects`));
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

  paths.push(...locales.map(locale => `/${locale}`));
  paths.push(...locales.map(locale => `/${locale}/search`));

  return paths;
}
