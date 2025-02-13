import { SingleAdvisorSection, PlaceholderSection } from '@/sections';

import { getAdvisors } from '@/actions/sanity/methods/getAdvisors';

import { getDictionary } from '@/utils/dictionaries';
import { getAdvisorBySlug } from '@/actions/sanity';

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
