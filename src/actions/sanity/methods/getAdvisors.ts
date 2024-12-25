import { sanityClient } from '@/sanity/lib/client';
import { getAdvisorsQuery } from '../queries';

const fetchAdvisors = async (): Promise<IAdvisor[]> => {
  const query = getAdvisorsQuery();
  const data: IAdvisor[] = await sanityClient.fetch<IAdvisor[]>(query);

  return data || [];
};

export const getAdvisors = async (
  lang: 'uk' | 'en' = 'uk',
): Promise<{ advisors: ITransformedAdvisor[] }> => {
  try {
    const advisors = await fetchAdvisors();

    const transformedAdvisors: ITransformedAdvisor[] = advisors.map(advisor => {
      return {
        photo: advisor.photo.asset.url,
        alt: advisor.photo.caption[lang],
        name: advisor.name[lang],
        city: advisor.city[lang],
        phone: advisor.phone,
        index: advisor.index,
      };
    });

    return { advisors: transformedAdvisors };
  } catch (error) {
    console.error('Помилка при отриманні радників:', error);

    return { advisors: [] };
  }
};
