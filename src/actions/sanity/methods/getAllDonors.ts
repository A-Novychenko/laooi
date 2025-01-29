import { sanityClient } from '@/sanity/lib/client';
import { getAllDonorsQuery } from '../queries';

const fetchDonors = async (): Promise<IDonor[]> => {
  const query = getAllDonorsQuery();
  const data: IDonor[] = await sanityClient.fetch<IDonor[]>(query);

  return data || [];
};

export const getAllDonors = async (
  lang: 'uk' | 'en' = 'uk',
): Promise<ITransformedDonor[]> => {
  try {
    const donors = await fetchDonors();

    const transformedDonors: ITransformedDonor[] = donors.map(donor => {
      return {
        name: donor.name[lang],
        img: donor.img.asset.url,
        alt: donor.img.caption[lang],
        link: donor.link,
        index: donor.index,
      };
    });

    return transformedDonors;
  } catch (error) {
    console.error('Помилка при отриманні партнерів:', error);

    return [];
  }
};
