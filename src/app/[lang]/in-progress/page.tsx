import { PlaceholderSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

const InProgressPage = async ({
  params: { lang },
}: {
  params: { lang: string };
}) => {
  const dict = await getDictionary(lang);

  const { devPage } = dict.common;

  return <PlaceholderSection data={devPage} />;
};

export default InProgressPage;
