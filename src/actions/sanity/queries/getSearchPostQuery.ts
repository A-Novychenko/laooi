export const getSearchPostQuery = (
  search: string,
  lang: 'uk' | 'en',
  page: number = 1,
  pageSize: number = 12,
) => {
  const start = (page - 1) * pageSize;
  const end = pageSize;
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
  }[${start}...${start + end}]`; // Використовуємо діапазон для пагінації
};
