import { PrivacyPolicyPortableText, Title } from '@/components/ui';

import { PrivacyPolicySectionProps } from './types';

export const PrivacyPolicySection: React.FC<PrivacyPolicySectionProps> = ({
  dict,
  privacyPolicy,
}) => {
  const { title } = dict.common.privacyPolicyPage;

  return (
    <section className="section">
      <div className="container">
        <Title tag="h1" className="mb-4">
          {title}
        </Title>

        {privacyPolicy ? (
          <div className="rounded-[24px] bg-bgLightSlate p-6 md:p-8 xl:p-10">
            <PrivacyPolicyPortableText value={privacyPolicy} />
          </div>
        ) : (
          <p>No privacy policy available.</p>
        )}
      </div>
    </section>
  );
};
