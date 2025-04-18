import { sanityClient } from '@/sanity/lib/client';

import { getAllActivitiesQuery } from '../queries';

const fetchLatestActivities = async (): Promise<IActivity[]> => {
  const query = getAllActivitiesQuery();
  const data = await sanityClient.fetch(query);

  return data ? data : [];
};

export const getAllActivities = async (
  lang: 'uk' | 'en' = 'uk',
): Promise<ITransformedActivity[]> => {
  try {
    const activities = await fetchLatestActivities();

    const transformedActivities =
      activities &&
      activities.map(activity => {
        return { quantity: activity?.quantity, text: activity?.text[lang] };
      });

    return transformedActivities;
  } catch (error) {
    console.error('Помилка при отриманні activities:', error);

    return [];
  }
};
