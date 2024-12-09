export const getLatestMediaItemsQuery = () =>
  `*[_type == "media"] | order(publicationDate desc) [0..4] {
    _id,
    link,
    img {
      caption,
      asset->{
        _id,
        url
      }
    },
    publicationDate
  }`;
