import { sanityClient } from '@/sanity/lib/client';

import { transformPostPreview } from '@/utils/transformPostPreview';

import { getAllPostsWithCountQuery } from '../queries';

const fetchPosts = async (
  search: string | null,
  lang: 'uk' | 'en',
  page: number,
  pageSize: number,
  postType?: 'news' | 'articles' | 'events',
  sortDate: 'newest' | 'oldest' = 'newest',
): Promise<{
  posts: IPostPreview[];
  totalCount: number;
}> => {
  const query = getAllPostsWithCountQuery(
    search,
    lang,
    page,
    pageSize,
    postType,
    sortDate,
  );

  const result = await sanityClient.fetch(query);

  return {
    posts: result.posts ?? [],
    totalCount: result.totalCount ?? 0,
  };
};

export const getAllPosts = async (
  search: string | null = null,
  lang: 'uk' | 'en' = 'uk',
  page: number = 1,
  pageSize: number = 12,
  postType?: 'news' | 'articles' | 'events',
  sortDate: 'newest' | 'oldest' = 'newest',
): Promise<{
  posts: ITransformedPostPreview[];
  totalPages: number;
}> => {
  try {
    const { posts, totalCount } = await fetchPosts(
      search,
      lang,
      page,
      pageSize,
      postType,
      sortDate,
    );

    const transformedPosts = posts
      ? posts.map(post => transformPostPreview(post, lang))
      : [];

    const totalPages = Math.ceil(totalCount / pageSize);

    return { posts: transformedPosts, totalPages };
  } catch (error) {
    console.error('Помилка при отриманні ALL постів:', error);
    return { posts: [], totalPages: 0 };
  }
};
