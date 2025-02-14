import { PlaceholderSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

import makeMetaData from '@/data/meta';

export async function generateMetadata({
  params,
}: {
  params: { lang: 'uk' | 'en' };
}) {
  const lang = params.lang || 'uk';

  const meta = await makeMetaData(lang, 'notFound');

  return meta;
}

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
