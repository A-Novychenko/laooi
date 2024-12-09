export const getSearchPostCountQuery = (
  search: string,
  lang: 'uk' | 'en',
  postType?: 'news' | 'articles' | 'events',
) => {
  const typeFilter = postType ? `&& postType == "${postType}"` : '';
  return `count(*[_type == "Post" && (title.${lang} match "${search}*" || body.${lang} match "${search}*") ${typeFilter}])`;
};
