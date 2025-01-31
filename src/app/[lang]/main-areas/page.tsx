import {
  ActivitiesSection,
  MainAreasHeroSection,
  MainAreasSection,
  PartnersSection,
} from '@/sections';

import { getAllActivities, getPartners } from '@/actions/sanity';

import { getDictionary } from '@/utils/dictionaries';

export const revalidate = 0;

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
