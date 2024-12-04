import { sanityClient } from '@/sanity/lib/client';

import { getPostBySlugQuery } from '../queries';

import { transformPost } from '@/utils/transformPost';

export const getPostBySlug = async (
  slug: string,
  lang: 'uk' | 'en' = 'uk',
): Promise<ITransformedPost | null> => {
  const decodedSlug = decodeURIComponent(slug);

  try {
    const post = await sanityClient.fetch(getPostBySlugQuery, {
      slug: decodedSlug,
    });

    if (post) {
      return transformPost(post, lang);
    }

    return null;
  } catch (error) {
    console.error('Error fetching post:', error);

    return null;
  }
};
