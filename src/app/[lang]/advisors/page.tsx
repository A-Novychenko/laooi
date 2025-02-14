import { AdvisorsHeroSection, AdvisorsSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

import makeMetaData from '@/data/meta';

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { lang: 'uk' | 'en' };
}) {
  const lang = params.lang || 'uk';

  const meta = await makeMetaData(lang, 'advisors');

  return meta;
}

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
