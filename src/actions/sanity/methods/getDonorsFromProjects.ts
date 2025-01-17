import { sanityClient } from '@/sanity/lib/client';
import { getDonorsFromProjectsQuery } from '../queries';

const fetchDonors = async (): Promise<IDonors[]> => {
  const query = getDonorsFromProjectsQuery();
  const data: IDonors[] = await sanityClient.fetch<IDonors[]>(query);

  return data || [];
};

export const getDonorsFromProjects = async (
  lang: 'uk' | 'en' = 'uk',
): Promise<ITransformedDonor[]> => {
  try {
    const donors = await fetchDonors();

    const filteredByVisibleDonors = donors.filter(
      ({ donor }) => donor.isVisible,
    );

    const transformedDonors: ITransformedDonor[] = Array.from(
      new Map(
        filteredByVisibleDonors.map(({ donor }) => [
          donor.id?.current, // Унікальний ключ
          {
            value: donor.id?.current,
            label: donor?.name[lang],
          }, // Формат об'єкта
        ]),
      ).values(),
    );

    return transformedDonors;
  } catch (error) {
    console.error('Помилка при отриманні donors from proj:', error);

    // return { donors: [] };
    return [];
  }
};
