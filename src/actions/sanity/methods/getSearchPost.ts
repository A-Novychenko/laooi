import { sanityClient } from '@/sanity/lib/client';

import { transformPostPreview } from '@/utils/transformPostPreview';

import { getSearchPostQuery } from '../queries';

const fetchSearchPosts = async (
  search: string,
  lang: 'uk' | 'en',
  page: number,
  pageSize: number,
  postType?: 'news' | 'articles' | 'events',
): Promise<IPostPreview[]> => {
  const query = getSearchPostQuery(search, lang, page, pageSize, postType);
  const data = await sanityClient.fetch(query);

  return data ? data : [];
};

export const getSearchPost = async (
  search: string,
  lang: 'uk' | 'en' = 'uk',
  page: number = 1,
  pageSize: number = 12,
  postType?: 'news' | 'articles' | 'events',
): Promise<ITransformedPostPreview[]> => {
  try {
    const posts = await fetchSearchPosts(
      search,
      lang,
      page,
      pageSize,
      postType,
    );

    const transformedPosts = posts
      ? posts.map(post => transformPostPreview(post, lang))
      : [];

    return transformedPosts;
  } catch (error) {
    console.error('Помилка при пошуку постів:', error);
    return [];
  }
};
