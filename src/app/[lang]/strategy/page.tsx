import {
  StrategyAboutSection,
  StrategyDonorsSection,
  StrategySection,
  StrategyValueSection,
} from '@/sections';

import { getAllDonors } from '@/actions/sanity';
import { getDictionary } from '@/utils/dictionaries';

export const revalidate = 3600;

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
