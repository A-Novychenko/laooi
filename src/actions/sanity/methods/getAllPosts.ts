import { sanityClient } from '@/sanity/lib/client';

import { transformPostPreview } from '@/utils/transformPostPreview';

import { getAllPostsQuery } from '../queries';

const fetchPosts = async (
  page: number,
  pageSize: number,
): Promise<IPostPreview[]> => {
  const query = getAllPostsQuery(page, pageSize);
  const data = await sanityClient.fetch(query);

  return data ? data : [];
};

export const getAllPosts = async (
  lang: 'uk' | 'en' = 'uk',
  page: number = 1,
  pageSize: number = 12,
): Promise<ITransformedPostPreview[]> => {
  try {
    const posts = await fetchPosts(page, pageSize);

    const transformedPosts = posts
      ? posts.map(post => transformPostPreview(post, lang))
      : [];

    return transformedPosts;
  } catch (error) {
    console.error('Помилка при отриманні постів:', error);

    return [];
  }
};
