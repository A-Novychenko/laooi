// import { TestPage } from '@/components/base/TestPage/TestPage';
import { AboutSection, ActivitiesSection, FAQSection } from '@/sections';

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

      <ActivitiesSection dict={dict} lang={lang} />

      <FAQSection />
      {/* <TestPage textTest={dict.common.logoAlt} /> */}
    </>
  );
}
