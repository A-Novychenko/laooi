export const getProjectBySlugQuery = `*[_type == "projects" && slug.current == $slug][0]{
  _id,
  projectYear,
  title,
  body,
  publicationDate,
  slug,
  images[]{
    asset->{url},
    caption {
      uk,
      en
    }
  }
}`;
