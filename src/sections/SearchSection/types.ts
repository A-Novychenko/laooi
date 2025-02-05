export type SearchSectionProps = {
  lang: 'uk' | 'en';
  searchResults: ISearchArray[];
  categoryTitles: ICategoryTitles;
  linksTitle: string;
  readMoreLabel: string;
  fileLinks: IFileLinks;
  labelTitle?: string;
  teamClosedLabel: string;
  mainTitle: string;
  searchInputPlaceholder: string;
};
