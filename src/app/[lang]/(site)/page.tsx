// import { TestPage } from '@/components/base/TestPage/TestPage';
import { AboutSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
      <AboutSection dict={dict} lang={lang} />
      {/* <TestPage textTest={dict.common.logoAlt} /> */}
    </>
  );
}
