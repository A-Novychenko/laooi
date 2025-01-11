export const transformProjectPreview = (
  project: IProjectPreview,
  lang: 'uk' | 'en' = 'uk',
): ITransformedProjectPreview => {
  return {
    projectYear: project.projectYear,
    label: project.projectYear,
    image: project.images[0]?.asset.url,
    imageAlt: project.images[0]?.caption[lang],
    title: project.title[lang],
    date: project.publicationDate,
    slug: project.slug.current,
    donor: project.donor?.name[lang],
  };
};
