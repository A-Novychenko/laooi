import { sanityClient } from '@/sanity/lib/client';
import { getTeamQuery } from '../queries';

const fetchTeam = async (): Promise<ITeamMember[]> => {
  const query = getTeamQuery();
  const data: ITeamMember[] = await sanityClient.fetch<ITeamMember[]>(query);

  return data || [];
};

export const getTeam = async (
  lang: 'uk' | 'en' = 'uk',
): Promise<ITransformedTeamMember[]> => {
  try {
    const team = await fetchTeam();

    const transformedTeam: ITransformedTeamMember[] = team.map(teamMember => {
      return {
        name: teamMember.name[lang],
        position: teamMember.position[lang],
        description: teamMember.description[lang],
        photo: teamMember.photo.asset.url,
        alt: teamMember.photo.caption[lang],
        link: teamMember.link,
        index: teamMember.index,
      };
    });

    return transformedTeam;
  } catch (error) {
    console.error('Помилка при отриманні радників:', error);

    return [];
  }
};
