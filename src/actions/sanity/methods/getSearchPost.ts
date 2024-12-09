import { sanityClient } from '@/sanity/lib/client';

import { transformPostPreview } from '@/utils/transformPostPreview';

import { getSearchPostQuery } from '../queries';

const fetchSearchPosts = async (
  search: string,
  lang: 'uk' | 'en',
): Promise<IPostPreview[]> => {
  const query = getSearchPostQuery(search, lang);
  const data = await sanityClient.fetch(query);

  return data ? data : [];
};

export const getSearchPost = async (
  search: string,
  lang: 'uk' | 'en' = 'uk',
): Promise<ITransformedPostPreview[]> => {
  try {
    const posts = await fetchSearchPosts(search, lang);

    const transformedPosts = posts
      ? posts.map(post => transformPostPreview(post, lang))
      : [];

    return transformedPosts;
  } catch (error) {
    console.error('Помилка при пошуку постів:', error);
    return [];
  }
};
