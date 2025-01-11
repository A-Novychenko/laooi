import { sanityClient } from '@/sanity/lib/client';
import { getPartnersQuery } from '../queries';

const fetchPartners = async (): Promise<IPartner[]> => {
  const query = getPartnersQuery();
  const data: IPartner[] = await sanityClient.fetch<IPartner[]>(query);

  return data || [];
};

export const getPartners = async (
  lang: 'uk' | 'en' = 'uk',
): Promise<{ partners: ITransformedPartner[] }> => {
  try {
    const partners = await fetchPartners();

    const transformedPartners: ITransformedPartner[] = partners.map(partner => {
      return {
        name: partner.name[lang],
        img: partner.img.asset.url,
        alt: partner.img.caption[lang],
        link: partner.link,
        index: partner.index,
      };
    });

    return { partners: transformedPartners };
  } catch (error) {
    console.error('Помилка при отриманні партнерів:', error);

    return { partners: [] };
  }
};
