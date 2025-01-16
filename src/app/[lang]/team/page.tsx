import { AboutTeamSection, TeamSection } from '@/sections';

import { getTeam } from '@/actions/sanity';

import { getDictionary } from '@/utils/dictionaries';

const TeamPage = async ({
  params: { lang },
}: {
  params: { lang: 'uk' | 'en' };
}) => {
  const dict = await getDictionary(lang);

  const team = await getTeam(lang);

  return (
    <>
      <AboutTeamSection dict={dict} lang={lang} />

      {team && team.length > 0 && <TeamSection dict={dict} team={team} />}
    </>
  );
};

export default TeamPage;
