export const transformTender = (
  tender: ITender,
  lang: 'uk' | 'en' = 'uk',
): ITransformedTender => {
  return {
    deadline: tender.deadline,
    images: tender.images.map(image => {
      return {
        src: image.asset.url,
        alt: image.caption[lang],
      };
    }),
    title: tender.title[lang],
    body: tender.body[lang] as string,
    date: tender.publicationDate,
    slug: tender.slug.current,
  };
};
