import {
  AboutSection,
  ActivitiesSection,
  FAQSection,
  HeroSection,
  MediaSection,
  BlogSection,
  PartnersSection,
  SocialsSection,
  TargetSection,
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

      <TargetSection dict={dict} lang={lang} />

      <PartnersSection dict={dict} lang={lang} />

      <MediaSection dict={dict} lang={lang} />

      <SocialsSection dict={dict} />

      <BlogSection dict={dict} lang={lang} />

      <FAQSection dict={dict} />
    </>
  );
}
