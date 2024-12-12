export const getAllMediaItemsQuery = (
  page: number,
  pageSize: number,
  sortDate: 'newest' | 'oldest' = 'newest',
) => {
  const sortFilter =
    sortDate === 'oldest'
      ? `| order(publicationDate asc)`
      : `| order(publicationDate desc)`;

  return `
  {
    "items": *[_type == "media"] ${sortFilter} [${(page - 1) * pageSize}...${page * pageSize}] {
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
    "total": count(*[_type == "media" ${sortFilter}])
  }
`;
};
