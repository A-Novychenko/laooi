export const getLatestTendersQuery = () =>
  `*[_type == "tenders"] | order(publicationDate desc) [0..2] {
    _id,
    title {
      uk,
      en
    },
    deadline,
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
