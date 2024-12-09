import { sanityClient } from '@/sanity/lib/client';
import { transformPostPreview } from '@/utils/transformPostPreview';
import {
  getAllPostsQuery,
  getSearchPostQuery,
  getSearchPostCountQuery,
  getTotalCountPostsQuery,
} from '../queries';

const fetchPosts = async (
  search: string | null,
  lang: 'uk' | 'en',
  page: number,
  pageSize: number,
): Promise<{
  posts: IPostPreview[];
  totalCount: number;
}> => {
  let query, countQuery;

  if (search) {
    query = getSearchPostQuery(search, lang, page, pageSize);
    countQuery = getSearchPostCountQuery(search, lang);
  } else {
    query = getAllPostsQuery(page, pageSize);
    countQuery = getTotalCountPostsQuery();
  }

  const posts = await sanityClient.fetch(query);
  const totalCount = await sanityClient.fetch(countQuery);

  return { posts: posts ?? [], totalCount };
};

export const getAllPosts = async (
  search: string | null = null,
  lang: 'uk' | 'en' = 'uk',
  page: number = 1,
  pageSize: number = 12,
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
    );

    const transformedPosts = posts
      ? posts.map(post => transformPostPreview(post, lang))
      : [];

    const totalPages = Math.ceil(totalCount / pageSize);

    return { posts: transformedPosts, totalPages };
  } catch (error) {
    console.error('Помилка при отриманні постів:', error);
    return { posts: [], totalPages: 0 };
  }
};
