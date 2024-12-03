import { PlaceholderSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

const NotFoundPage = async ({
  params: { lang },
}: {
  params: { lang: string };
}) => {
  const dict = await getDictionary(lang);

  const { errorPage } = dict.common;

  return <PlaceholderSection data={errorPage} />;
};

export default NotFoundPage;
