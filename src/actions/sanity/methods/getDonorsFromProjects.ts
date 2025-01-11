import { sanityClient } from '@/sanity/lib/client';
import { getDonorsFromProjectsQuery } from '../queries';

const fetchDonors = async (): Promise<IDonors[]> => {
  const query = getDonorsFromProjectsQuery();
  const data: IDonors[] = await sanityClient.fetch<IDonors[]>(query);

  return data || [];
};

export const getDonorsFromProjects = async (
  lang: 'uk' | 'en' = 'uk',
): Promise<{ donors: ITransformedDonor[] }> => {
  try {
    const donors = await fetchDonors();

    const transformedDonors: ITransformedDonor[] = donors.map(({ donor }) => {
      return {
        id: donor.id?.current,
        name: donor?.name[lang],
      };
    });

    return { donors: transformedDonors };
  } catch (error) {
    console.error('Помилка при отриманні donors:', error);

    return { donors: [] };
  }
};
