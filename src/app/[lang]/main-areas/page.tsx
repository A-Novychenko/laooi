import {
  ActivitiesSection,
  MainAreasHeroSection,
  MainAreasSection,
  PartnersSection,
} from '@/sections';

import { getAllActivities, getPartners } from '@/actions/sanity';

import { getDictionary } from '@/utils/dictionaries';

import makeMetaData from '@/data/meta';

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { lang: 'uk' | 'en' };
}) {
  const lang = params.lang || 'uk';

  const meta = await makeMetaData(lang, 'main-areas');

  return meta;
}

const MainAreasPage = async ({
  params: { lang },
}: {
  params: { lang: 'uk' | 'en' };
}) => {
  const dict = await getDictionary(lang);

  const { partners } = await getPartners(lang);
  const activities = await getAllActivities(lang);

  return (
    <>
      <MainAreasHeroSection dict={dict} />

      <MainAreasSection dict={dict} />

      {activities && activities.length > 0 && (
        <ActivitiesSection dict={dict} lang={lang} activities={activities} />
      )}

      {partners && <PartnersSection dict={dict} partners={partners} />}
    </>
  );
};

export default MainAreasPage;
