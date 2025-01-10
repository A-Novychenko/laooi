export const transformTenderPreview = (
  tender: ITenderPreview,
  lang: 'uk' | 'en' = 'uk',
): ITransformedTenderPreview => {
  return {
    deadline: tender.deadline,
    label: tender.deadline,
    image: tender.images[0]?.asset.url,
    imageAlt: tender.images[0]?.caption[lang],
    title: tender.title[lang],
    date: tender.publicationDate,
    slug: tender.slug.current,
  };
};
