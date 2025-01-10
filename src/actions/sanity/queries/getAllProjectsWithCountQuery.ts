export const getAllProjectsWithCountQuery = (
  search: string | null,
  lang: 'uk' | 'en',
  page: number,
  pageSize: number,
  postType?: 'news' | 'articles' | 'events',
  sortDate: 'newest' | 'oldest' = 'newest',
) => {
  const typeFilter = postType ? `&& postType == "${postType}"` : '';
  const sortFilter =
    sortDate === 'oldest'
      ? `| order(publicationDate asc)`
      : `| order(publicationDate desc)`;
  const searchFilter = search
    ? `(title.${lang} match "${search}*" || body.${lang} match "${search}*")`
    : 'true';

  return `{
    "posts": *[_type == "Post" && ${searchFilter} ${typeFilter}] ${sortFilter} [${(page - 1) * pageSize}...${page * pageSize}] {
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
    },
    "totalCount": count(*[_type == "Post" && ${searchFilter} ${typeFilter}])
  }`;
};
