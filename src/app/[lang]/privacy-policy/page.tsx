import { PlaceholderSection, PrivacyPolicySection } from '@/sections';

import { getPrivacyPolicy } from '@/actions/sanity';
import { getDictionary } from '@/utils/dictionaries';

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
