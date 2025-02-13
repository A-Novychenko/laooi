import { AdvisorsHeroSection, AdvisorsSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

export const revalidate = 3600;

const AdvisorsPage = async ({
  params: { lang },
}: {
  params: { lang: 'uk' | 'en' };
}) => {
  const dict = await getDictionary(lang);

  return (
    <>
      <AdvisorsHeroSection dict={dict} lang={lang} />

      <AdvisorsSection dict={dict} lang={lang} />
    </>
  );
};

export default AdvisorsPage;
