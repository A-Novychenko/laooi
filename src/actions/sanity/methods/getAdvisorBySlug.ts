import { sanityClient } from '@/sanity/lib/client';

import { getAdvisorBySlugQuery } from '../queries';

const fetchAdvisor = async (slug: string): Promise<IAdvisorBySlug> => {
  const query = getAdvisorBySlugQuery(slug);
  const data: IAdvisorBySlug = await sanityClient.fetch<IAdvisorBySlug>(query);

  return data || null;
};

export const getAdvisorBySlug = async (
  lang: 'uk' | 'en' = 'uk',
  slug: string,
): Promise<ITransformedAdvisorBySlug | null> => {
  try {
    const advisor = await fetchAdvisor(slug);

    const transformedAdvisor: ITransformedAdvisorBySlug = {
      photo: advisor?.photo.asset.url,
      alt: advisor?.photo.caption[lang],
      name: advisor?.name[lang],
      city: advisor?.city[lang],
      phone: advisor?.phone,
      index: advisor?.index,
      slug: advisor?.slug?.current,
      body: advisor?.body[lang],
      link: advisor?.link,
    };

    return transformedAdvisor;
  } catch (error) {
    console.error('Помилка при отриманні радників:', error);

    return null;
  }
};
