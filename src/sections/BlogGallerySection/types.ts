export type BlogGallerySectionProps = {
  title: string;
  readMoreLabel: string;
  posts: IPostBlogGalleryPage[];
  lang: 'uk' | 'en';
  currentPage: number;
  totalPages: number;
  placeholder: string;
  selectSortByDate: ISelectSortByDate;
  selectPostByType: ISelectPostByType;
  notFoundDescr: string;
  pageName: string;
  labelTitle?: string;
};
