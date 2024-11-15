import { PlaceholderSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

const InProgress = async ({
  params: { lang },
}: {
  params: { lang: string };
}) => {
  const dict = await getDictionary(lang);

  const { devPage } = dict.common;

  return (
    <main className="flex grow flex-col">
      <PlaceholderSection data={devPage} />
    </main>
  );
};

export default InProgress;
