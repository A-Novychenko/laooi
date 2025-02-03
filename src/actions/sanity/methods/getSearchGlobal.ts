import { sanityClient } from '@/sanity/lib/client';

import { getSearchGlobalQuery } from '../queries';

const fetchGlobalSearchResults = async (
  searchTerm: string,
  lang: 'uk' | 'en' = 'uk',
): Promise<ISearchArray[]> => {
  const params: Record<string, unknown> = { query: `${searchTerm}`, lang };

  const data = await sanityClient.fetch(getSearchGlobalQuery, params);

  return data ?? [];
};

export const getSearchGlobal = async (
  searchTerm: string,
  lang: 'uk' | 'en' = 'uk',
): Promise<ISearchArray[]> => {
  try {
    const results = await fetchGlobalSearchResults(searchTerm, lang);
    return results;
  } catch (error) {
    console.error('Помилка при виконанні глобального пошуку:', error);
    return [];
  }
};
