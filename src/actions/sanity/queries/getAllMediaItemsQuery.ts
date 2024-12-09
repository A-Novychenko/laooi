export const getAllMediaItemsQuery = (page: number, pageSize: number) => `
  {
    "items": *[_type == "media"] | order(publicationDate desc) [${(page - 1) * pageSize}...${page * pageSize}] {
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
    },
    "total": count(*[_type == "media"])
  }
`;
