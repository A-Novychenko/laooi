export type BlogGallerySectionProps = {
  title: string;
  readMoreLabel: string;
  posts: ITransformedPostPreview[];
  lang: 'uk' | 'en';
  currentPage: number;
  totalPages: number;
  placeholder: string;
  selectSortByDate: ISelectSortByDate;
  selectPostByType: ISelectPostByType;
  notFoundDescr: string;
};
