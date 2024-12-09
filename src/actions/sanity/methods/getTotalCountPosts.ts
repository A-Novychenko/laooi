import { sanityClient } from '@/sanity/lib/client';

import { getTotalCountPostsQuery } from '../queries';

export const getTotalPostsCount = async (): Promise<number> => {
  try {
    const query = getTotalCountPostsQuery();
    const count = await sanityClient.fetch(query);
    return count;
  } catch (error) {
    console.error('Помилка при отриманні кількості постів:', error);
    return 0;
  }
};
