import { MainAreasHeroSection, MainAreasSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

const MainAreasPage = async ({
  params: { lang },
}: {
  params: { lang: 'uk' | 'en' };
}) => {
  const dict = await getDictionary(lang);

  return (
    <>
      <MainAreasHeroSection dict={dict} />

      <MainAreasSection dict={dict} />
    </>
  );
};

export default MainAreasPage;
