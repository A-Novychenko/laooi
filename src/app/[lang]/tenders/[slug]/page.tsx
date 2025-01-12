import { BlogSection, PlaceholderSection, PostSection } from '@/sections';

import {
  getAllTenders,
  getLatestTenders,
  getTenderBySlug,
} from '@/actions/sanity';
import { getDictionary } from '@/utils/dictionaries';

export async function generateStaticParams() {
  const { tenders } = await getAllTenders();

  const staticParams =
    tenders?.map(({ slug }) => {
      return {
        slug,
      };
    }) || [];

  return staticParams;
}

const TenderPage = async ({
  params: { lang, slug },
}: {
  params: { lang: 'uk' | 'en'; slug: string };
}) => {
  const tender = await getTenderBySlug(slug, lang);

  const latestTender = await getLatestTenders(lang);

  const dict = await getDictionary(lang);

  const { pageName, title, errorData, link, labelTitle } = dict.tendersSection;
  const { tenderBackLink } = dict.common;

  return (
    <>
      {tender ? (
        <PostSection post={tender} postBackLink={tenderBackLink} />
      ) : (
        <PlaceholderSection data={{ title, ...errorData }} />
      )}

      <BlogSection
        dict={dict}
        lang={lang}
        pageName={pageName}
        title={title}
        link={link}
        posts={latestTender}
        labelTitle={labelTitle}
      />
    </>
  );
};

export default TenderPage;
