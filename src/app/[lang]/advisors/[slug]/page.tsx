import { SingleAdvisorSection, PlaceholderSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';
import { getAdvisorBySlug, getAdvisors } from '@/actions/sanity';

import makeMetaData from '@/data/meta';

export const revalidate = 3600;

export async function generateStaticParams() {
  const { advisors } = await getAdvisors();

  const staticParams =
    advisors?.map(({ slug }) => {
      return {
        slug,
      };
    }) || [];

  return staticParams;
}

export async function generateMetadata({
  params,
}: {
  params: { lang: 'uk' | 'en'; slug: string };
}) {
  const lang = params.lang || 'uk';

  const meta = await makeMetaData(lang, 'advisors', params.slug);

  return meta;
}

const SingleAdvisorPage = async ({
  params: { lang, slug },
}: {
  params: { lang: 'uk' | 'en'; slug: string };
}) => {
  const dict = await getDictionary(lang);

  const advisor = await getAdvisorBySlug(lang, slug);

  const { advisorsBackLink, postAdvisorFBLinkLabel } = dict.common;
  const { title, errorData } = dict.singleAdvisorSection;

  return (
    <>
      {advisor ? (
        <SingleAdvisorSection
          advisorsBackLink={advisorsBackLink}
          advisor={advisor}
          postFBLinkLabel={postAdvisorFBLinkLabel}
        />
      ) : (
        <PlaceholderSection data={{ title, ...errorData }} />
      )}
    </>
  );
};

export default SingleAdvisorPage;
