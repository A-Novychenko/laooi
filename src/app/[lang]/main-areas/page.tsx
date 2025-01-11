import { getDictionary } from '@/utils/dictionaries';

const MainAreasPage = async ({
  params: { lang },
}: {
  params: { lang: 'uk' | 'en' };
}) => {
  const dict = await getDictionary(lang);

  console.log('dict', dict);

  return <></>;
};

export default MainAreasPage;
