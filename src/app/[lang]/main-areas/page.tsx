import {
  MainAreasHeroSection,
  MainAreasSection,
  PartnersSection,
} from '@/sections';

import { getPartners } from '@/actions/sanity';

import { getDictionary } from '@/utils/dictionaries';

export const revalidate = 0;

const MainAreasPage = async ({
  params: { lang },
}: {
  params: { lang: 'uk' | 'en' };
}) => {
  const dict = await getDictionary(lang);

  const { partners } = await getPartners(lang);

  return (
    <>
      <MainAreasHeroSection dict={dict} />

      <MainAreasSection dict={dict} />

      {partners && <PartnersSection dict={dict} partners={partners} />}
    </>
  );
};

export default MainAreasPage;
