export const transformProject = (
  project: IProject,
  lang: 'uk' | 'en' = 'uk',
): ITransformedProject => {
  return {
    projectYear: project.projectYear,
    images: project.images.map(image => {
      return {
        src: image.asset.url,
        alt: image.caption[lang],
      };
    }),
    title: project.title[lang],
    body: project.body[lang] as string,
    date: project.publicationDate,
    slug: project.slug.current,
  };
};
