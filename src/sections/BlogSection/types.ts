export type BlogSectionProps = {
  dict: IDictionary;
  lang: 'uk' | 'en';
  pageName: string;
  title: string;
  link: {
    label: string;
    settings: {
      href: string;
      externalLink: boolean;
    };
  };
  posts: IPostBlogGalleryPage[];
};
