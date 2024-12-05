export const getPostBySlugQuery = `*[_type == "Post" && slug.current == $slug][0]{
  _id,
  postType,
  title,
  body,
  publicationDate,
  link,
  slug,
  images[]{
    asset->{url},
    caption {
      uk,
      en
    }
  }
}`;
