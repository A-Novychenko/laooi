export const getSearchPostQuery = (
  search: string,
  lang: 'uk' | 'en',
  page: number,
  pageSize: number,
  postType?: 'news' | 'articles' | 'events',
) => {
  const typeFilter = postType ? `&& postType == "${postType}"` : '';
  return `*[_type == "Post" && (title.${lang} match "${search}*" || body.${lang} match "${search}*") ${typeFilter}] | order(publicationDate desc) [${(page - 1) * pageSize}...${page * pageSize}] {
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
