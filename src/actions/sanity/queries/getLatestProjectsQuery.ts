export const getLatestProjectsQuery = () =>
  `*[_type == "projects"] | order(publicationDate desc) [0..2] {
    _id,
    title {
      uk,
      en
    },
    projectYear,
    publicationDate,
    slug,
    images[] {
      caption,
      asset->{
        _id,
        url
      }
    }
  }`;
