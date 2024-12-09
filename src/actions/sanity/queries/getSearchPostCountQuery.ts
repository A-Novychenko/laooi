export const getSearchPostCountQuery = (search: string, lang: 'uk' | 'en') => {
  return `count(*[_type == "post" && lang == "${lang}" && (title match "${search}*" || body match "${search}*")])`;
};
