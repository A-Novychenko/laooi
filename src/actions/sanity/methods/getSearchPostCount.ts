import { sanityClient } from '@/sanity/lib/client';
import { getSearchPostCountQuery } from '../queries';

export const getSearchPostCount = async (
  search: string,
  lang: 'uk' | 'en',
): Promise<number> => {
  const query = getSearchPostCountQuery(search, lang);
  const count = await sanityClient.fetch(query);
  return count || 0;
};
