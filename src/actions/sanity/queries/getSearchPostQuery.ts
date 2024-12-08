export const getSearchPostQuery = (search: string, lang: 'uk' | 'en') => {
  return `*[_type == "Post" && title.${lang} match "${search}*"] {
    _id,
    title {
      uk,
      en
    },
    postType,
    publicationDate,
    slug,
    images[] {
      caption,
      asset->{
        _id,
        url
      }
    },
    body {
      uk,
      en
    }
  }`;
};
