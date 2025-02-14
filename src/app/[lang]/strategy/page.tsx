import {
  StrategyAboutSection,
  StrategyDonorsSection,
  StrategySection,
  StrategyValueSection,
} from '@/sections';

import { getAllDonors } from '@/actions/sanity';
import { getDictionary } from '@/utils/dictionaries';

import makeMetaData from '@/data/meta';

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { lang: 'uk' | 'en' };
}) {
  const lang = params.lang || 'uk';

  const meta = await makeMetaData(lang, 'strategy');

  return meta;
}

const StrategyPage = async ({
  params: { lang },
}: {
  params: { lang: 'uk' | 'en' };
}) => {
  const dict = await getDictionary(lang);

  const donors = await getAllDonors(lang);

  return (
    <>
      <StrategyAboutSection dict={dict} />

      <StrategySection dict={dict} />

      <StrategyValueSection dict={dict} />

      {donors && <StrategyDonorsSection dict={dict} donors={donors} />}
    </>
  );
};

export default StrategyPage;
