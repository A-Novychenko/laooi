import { sanityClient } from '@/sanity/lib/client';

import { transformTender } from '@/utils/transformTender';

import { getTenderBySlugQuery } from '../queries';

export const getTenderBySlug = async (
  slug: string,
  lang: 'uk' | 'en' = 'uk',
): Promise<ITransformedTender | null> => {
  const decodedSlug = decodeURIComponent(slug);

  try {
    const tender = await sanityClient.fetch(getTenderBySlugQuery, {
      slug: decodedSlug,
    });

    if (tender) {
      return transformTender(tender, lang);
    }

    return null;
  } catch (error) {
    console.error('Error fetching tender by slug:', error);

    return null;
  }
};
