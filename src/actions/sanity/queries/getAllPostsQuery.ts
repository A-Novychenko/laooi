export const getAllPostsQuery = `
*[_type == "Post"] | order(publicationDate desc) {
  _id,
  title {
    uk,
    en
  },
  postType,
  publicationDate,
  slug,
  images[] {
    caption,
    asset->{
      _id,
      url
    }
  },
  body {
    uk,
    en
  }
}
`;
