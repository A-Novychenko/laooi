export const getAllMediaItemsQuery = (
  page: number,
  pageSize: number,
  sortDate: 'newest' | 'oldest' = 'newest',
  searchQuery: string | null,
) => {
  const sortFilter =
    sortDate === 'oldest'
      ? `| order(publicationDate asc)`
      : `| order(publicationDate desc)`;

  const searchFilter = searchQuery ? `(link match "*${searchQuery}*")` : 'true';

  return `
  {
    "items": *[_type == "media" && ${searchFilter}] ${sortFilter} [${(page - 1) * pageSize}...${page * pageSize}] {
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
    "total": count(*[_type == "media" && ${searchFilter}])
    }
`;
};
