import { SingleAdvisorSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

const SingleAdvisorPage = async ({
  params: { lang },
}: {
  params: { lang: 'uk' | 'en' };
}) => {
  const dict = await getDictionary(lang);

  const { advisorsBackLink } = dict.common;

  return (
    <>
      <SingleAdvisorSection advisorsBackLink={advisorsBackLink} />
    </>
  );
};

export default SingleAdvisorPage;
