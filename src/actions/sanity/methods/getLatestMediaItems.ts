import { sanityClient } from '@/sanity/lib/client';

import { getLatestMediaItemsQuery } from '../queries';

const fetchLatestMediaItems = async (): Promise<IMediaItem[]> => {
  const query = getLatestMediaItemsQuery();
  const data = await sanityClient.fetch(query);

  return data ? data : [];
};

export const getLatestMediaItems = async (
  lang: 'uk' | 'en' = 'uk',
): Promise<ITransformedMediaItem[]> => {
  try {
    const items = await fetchLatestMediaItems();

    const transformedMediaItem = items
      ? items.map(item => ({
          imageUrl: item.img.asset.url,
          imageAlt: item.img.caption[lang],
          link: item.link,
        }))
      : [];

    return transformedMediaItem;
  } catch (error) {
    console.error('Помилка при отриманні latest MEDIA:', error);

    return [];
  }
};
