export const getCategoriesSearchResult = (searchResults: ISearchArray[]) => {
  return searchResults.reduce(
    (categories: Record<string, ISearchArray[]>, item) => {
      const type = item._type?.toLowerCase() || 'other';
      if (!categories[type]) {
        categories[type] = [];
      }
      categories[type].push(item);
      return categories;
    },
    {},
  );
};
