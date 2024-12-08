import { sanityClient } from '@/sanity/lib/client';

import { transformPostPreview } from '@/utils/transformPostPreview';

import { getLatestPostsQuery } from '../queries';

const fetchLatestPosts = async (): Promise<IPostPreview[]> => {
  const query = getLatestPostsQuery();
  const data = await sanityClient.fetch(query);

  return data ? data : [];
};

export const getLatestPosts = async (
  lang: 'uk' | 'en' = 'uk',
): Promise<ITransformedPostPreview[]> => {
  try {
    const posts = await fetchLatestPosts();

    const transformedPosts = posts
      ? posts.map(post => transformPostPreview(post, lang))
      : [];

    return transformedPosts;
  } catch (error) {
    console.error('Помилка при отриманні постів:', error);

    return [];
  }
};
