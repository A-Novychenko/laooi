export const getAllPostsQuery = (page: number, pageSize: number) =>
  `*[_type == "Post"] | order(publicationDate desc) [${(page - 1) * pageSize}...${page * pageSize}] {
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
