import { sanityClient } from '@/sanity/lib/client';
import { getAllMediaItemsQuery } from '../queries';

const fetchPosts = async (
  page: number,
  pageSize: number,
  sortDate: 'newest' | 'oldest' = 'newest',
): Promise<IMediaItemsResponse> => {
  const query = getAllMediaItemsQuery(page, pageSize, sortDate);
  const data = await sanityClient.fetch<IMediaItemsResponse>(query);

  return data ? data : { items: [], total: 0 };
};

export const getAllMediaItems = async (
  lang: 'uk' | 'en' = 'uk',
  page: number = 1,
  pageSize: number = 15,
  sortDate: 'newest' | 'oldest' = 'newest',
): Promise<{ totalPages: number; mediaItems: ITransformedMediaItem[] }> => {
  try {
    const { items: mediaItems, total } = await fetchPosts(
      page,
      pageSize,
      sortDate,
    );

    const totalPages = Math.ceil(total / pageSize);

    const transformedMediaItems = mediaItems.map(mediaItem => {
      return {
        imageUrl: mediaItem.img.asset.url,
        imageAlt: mediaItem.img.caption[lang],
        link: mediaItem.link,
      };
    });

    return { totalPages, mediaItems: transformedMediaItems };
  } catch (error) {
    console.error('Помилка при отриманні медіа-елементів:', error);

    return { totalPages: 0, mediaItems: [] };
  }
};
