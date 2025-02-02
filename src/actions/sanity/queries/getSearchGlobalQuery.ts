export const getSearchGlobalQuery = `
  *[
    title[$lang] match $query || description[$lang] match $query || body[$lang] match $query
  ]
`;
