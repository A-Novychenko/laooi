import {
  StrategyAboutSection,
  StrategySection,
  StrategyValueSection,
} from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

const StrategyPage = async ({
  params: { lang },
}: {
  params: { lang: 'uk' | 'en' };
}) => {
  const dict = await getDictionary(lang);

  return (
    <>
      <StrategyAboutSection dict={dict} />

      <StrategySection dict={dict} />

      <StrategyValueSection dict={dict} />
    </>
  );
};

export default StrategyPage;
