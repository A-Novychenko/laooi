import { PlaceholderSection, PrivacyPolicySection } from '@/sections';

import { getPrivacyPolicy } from '@/actions/sanity';
import { getDictionary } from '@/utils/dictionaries';

import makeMetaData from '@/data/meta';

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { lang: 'uk' | 'en' };
}) {
  const lang = params.lang || 'uk';

  const meta = await makeMetaData(lang, 'privacy-policy');

  return meta;
}

const PrivacyPolicyPage = async ({
  params: { lang },
}: {
  params: { lang: 'uk' | 'en' };
}) => {
  const dict = await getDictionary(lang);
  const { title, errorData } = dict.common.privacyPolicyPage;

  const privacyPolicy = await getPrivacyPolicy(lang);

  return (
    <>
      {privacyPolicy ? (
        <PrivacyPolicySection dict={dict} privacyPolicy={privacyPolicy} />
      ) : (
        <PlaceholderSection data={{ title, ...errorData }} />
      )}
    </>
  );
};

export default PrivacyPolicyPage;
