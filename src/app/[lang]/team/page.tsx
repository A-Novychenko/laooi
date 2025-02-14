import { AboutTeamSection, TeamSection } from '@/sections';

import { getTeam } from '@/actions/sanity';

import { getDictionary } from '@/utils/dictionaries';

import makeMetaData from '@/data/meta';

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { lang: 'uk' | 'en' };
}) {
  const lang = params.lang || 'uk';

  const meta = await makeMetaData(lang, 'team');

  return meta;
}

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
