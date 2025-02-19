import {
  getAllDonors,
  getLatestActivities,
  getLatestPosts,
} from '@/actions/sanity';

import {
  AboutSection,
  ActivitiesSection,
  FAQSection,
  HeroSection,
  MediaSection,
  BlogSection,
  SocialsSection,
  TargetSection,
  DonorsMainSection,
} from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

export const revalidate = 3600;

export default async function Home({
  params: { lang },
}: {
  params: { lang: 'uk' | 'en' };
}) {
  const dict = await getDictionary(lang);

  const latestActivities = await getLatestActivities(lang);
  const latestPosts = await getLatestPosts(lang);
  const donors = await getAllDonors(lang);

  const { pageName, title, link } = dict.blogSection;

  return (
    <>
      <HeroSection dict={dict} lang={lang} />

      <AboutSection dict={dict} lang={lang} />

      <ActivitiesSection
        dict={dict}
        lang={lang}
        activities={latestActivities}
        isMainPage
      />

      <TargetSection dict={dict} lang={lang} />

      {donors && donors.length > 0 && (
        <DonorsMainSection dict={dict} lang={lang} donors={donors} />
      )}

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
