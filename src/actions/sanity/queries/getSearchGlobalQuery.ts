export const getSearchGlobalQuery = `
  *[
    title[$lang] match $query || 
    description[$lang] match $query || 
    body[$lang] match $query || 
    link match $query || 
    name[$lang] match $query
  ]
`;
