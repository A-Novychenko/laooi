// import { TestPage } from '@/components/base/TestPage/TestPage';
import {
  AboutSection,
  ActivitiesSection,
  FAQSection,
  HeroSection,
  NewsSection,
  SocialsSection,
} from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection dict={dict} lang={lang} />

      <AboutSection dict={dict} lang={lang} />

      <ActivitiesSection dict={dict} lang={lang} />

      <SocialsSection dict={dict} />

      <NewsSection dict={dict} lang={lang} />

      <FAQSection dict={dict} />

      {/* <TestPage textTest={dict.common.logoAlt} /> */}
    </>
  );
}
