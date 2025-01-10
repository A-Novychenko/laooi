import { getLatestPosts } from '@/actions/sanity';
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
  params: { lang: 'uk' | 'en' };
}) {
  const dict = await getDictionary(lang);

  const latestPosts = await getLatestPosts(lang);

  const { pageName, title, link } = dict.blogSection;

  return (
    <>
      <HeroSection dict={dict} lang={lang} />

      <AboutSection dict={dict} lang={lang} />

      <ActivitiesSection dict={dict} lang={lang} />

      <TargetSection dict={dict} lang={lang} />

      <PartnersSection dict={dict} lang={lang} />

      <MediaSection dict={dict} lang={lang} />

      <SocialsSection dict={dict} />

      <BlogSection
        dict={dict}
        lang={lang}
        posts={latestPosts}
        pageName={pageName}
        link={link}
        title={title}
      />

      <FAQSection dict={dict} />
    </>
  );
}
