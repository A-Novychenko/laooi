export const getTenderBySlugQuery = `*[_type == "tenders" && slug.current == $slug][0]{
  _id,
  deadline,
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
