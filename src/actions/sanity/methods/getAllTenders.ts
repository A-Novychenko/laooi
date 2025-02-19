import { sanityClient } from '@/sanity/lib/client';

import { transformTenderPreview } from '@/utils/transformTenderPreview';

import { getAllTendersWithCountQuery } from '../queries';

const fetchTenders = async (
  search: string | null,
  lang: 'uk' | 'en',
  page: number,
  pageSize: number,
  deadline?: string,
  sortDate: 'newest' | 'oldest' = 'newest',
): Promise<{
  tenders: ITenderPreview[];
  totalCount: number;
}> => {
  const query = getAllTendersWithCountQuery(
    search,
    lang,
    page,
    pageSize,
    deadline,
    sortDate,
  );

  const result = await sanityClient.fetch(query);

  return {
    tenders: result.tenders ?? [],
    totalCount: result.totalCount ?? 0,
  };
};

export const getAllTenders = async (
  search: string | null = null,
  lang: 'uk' | 'en' = 'uk',
  page: number = 1,
  pageSize: number = 12,
  deadline?: string,
  sortDate: 'newest' | 'oldest' = 'newest',
): Promise<{
  tenders: ITransformedTenderPreview[];
  totalPages: number;
}> => {
  try {
    const { tenders, totalCount } = await fetchTenders(
      search,
      lang,
      page,
      pageSize,
      deadline,
      sortDate,
    );

    const transformedTenders = tenders
      ? tenders.map(tender => transformTenderPreview(tender, lang))
      : [];

    const totalPages = Math.ceil(totalCount / pageSize);

    return { tenders: transformedTenders, totalPages };
  } catch (error) {
    console.error('Помилка при отриманні ALL тендерів:', error);

    return { tenders: [], totalPages: 0 };
  }
};
