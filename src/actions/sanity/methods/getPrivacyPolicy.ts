import { sanityClient } from '@/sanity/lib/client';

import { getPrivacyPolicyQuery } from '@/actions/sanity';

import type { PortableTextBlock } from 'sanity';

const fetchPrivacyPolicy = async (): Promise<IPrivacyPolicy[]> => {
  const query = getPrivacyPolicyQuery();
  const data: IPrivacyPolicy[] =
    await sanityClient.fetch<IPrivacyPolicy[]>(query);

  return data || [];
};

export const getPrivacyPolicy = async (
  lang: 'uk' | 'en' = 'uk',
): Promise<PortableTextBlock[] | null> => {
  try {
    const data = await fetchPrivacyPolicy();

    const privacyPolicyData = data && data.length > 0 ? data[0] : null;

    const transformedPrivacyPolicy: PortableTextBlock[] | null = Array.isArray(
      privacyPolicyData?.body[lang],
    )
      ? (privacyPolicyData.body[lang].map(block => ({
          ...block,
          children: block.children || [],
          _type: block._type || 'block',
        })) as PortableTextBlock[])
      : null;

    return transformedPrivacyPolicy;
  } catch (error) {
    console.error('Помилка при отриманні політики конфіденційності:', error);

    return null;
  }
};
