import { sanityClient } from '@/sanity/lib/client';

import { transformTenderPreview } from '@/utils/transformTenderPreview';

import { getLatestTendersQuery } from '../queries';

const fetchLatestTenders = async (): Promise<ITenderPreview[]> => {
  const query = getLatestTendersQuery();
  const data = await sanityClient.fetch(query);

  return data ? data : [];
};

export const getLatestTenders = async (
  lang: 'uk' | 'en' = 'uk',
): Promise<ITransformedTenderPreview[]> => {
  try {
    const tenders = await fetchLatestTenders();

    const transformedTenders = tenders
      ? tenders.map(tender => transformTenderPreview(tender, lang))
      : [];

    return transformedTenders;
  } catch (error) {
    console.error('Помилка при отриманні latest тендерів:', error);

    return [];
  }
};
