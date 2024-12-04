import { sanityClient } from '@/sanity/lib/client';

import { transformPostPreview } from '@/utils/transformPostPreview';

import { getAllPostsQuery } from '../queries';

const fetchPosts = async (): Promise<IPostPreview[]> => {
  const data = await sanityClient.fetch(getAllPostsQuery);

  return data ? data : [];
};

export const getAllPosts = async (
  lang: 'uk' | 'en' = 'uk',
): Promise<ITransformedPostPreview[]> => {
  try {
    const posts = await fetchPosts();

    const transformedPosts = posts
      ? posts.map(post => transformPostPreview(post, lang))
      : [];

    return transformedPosts;
  } catch (error) {
    console.error('Помилка при отриманні постів:', error);

    return [];
  }
};
