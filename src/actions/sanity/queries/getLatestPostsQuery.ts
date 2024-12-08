export const getLatestPostsQuery = () =>
  `*[_type == "Post"] | order(publicationDate desc) [0..2] {
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
  }`;
