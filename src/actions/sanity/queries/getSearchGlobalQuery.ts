export const getSearchGlobalQuery = `
  *[
    string::lower(title[$lang]) match string::lower("*" + $query + "*") ||
    string::lower(description[$lang]) match string::lower("*" + $query + "*") ||
    string::lower(array::join(body[$lang][].children[].text," ")) match string::lower("*" + $query + "*") ||
    string::lower(link) match string::lower("*" + $query + "*") ||
    string::lower(name[$lang]) match string::lower("*" + $query + "*")
  ]
`;
