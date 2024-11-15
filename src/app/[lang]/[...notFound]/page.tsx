import { PlaceholderSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

const CatchAll = async ({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang);

  const { errorPage } = dict.common;

  return (
    <main className="flex grow flex-col">
      <PlaceholderSection data={errorPage} />
    </main>
  );
};

export default CatchAll;
