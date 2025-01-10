export const getPostsWithCountQuery = (
  search: string | null,
  lang: 'uk' | 'en',
  page: number,
  pageSize: number,
  projectYear?: string,
  sortDate: 'newest' | 'oldest' = 'newest',
) => {
  const typeFilter = projectYear ? `&& postType == "${projectYear}"` : '';
  const sortFilter =
    sortDate === 'oldest'
      ? `| order(publicationDate asc)`
      : `| order(publicationDate desc)`;
  const searchFilter = search
    ? `(title.${lang} match "${search}*" || body.${lang} match "${search}*")`
    : 'true';

  return `{
    "projects": *[_type == "projects" && ${searchFilter} ${typeFilter}] ${sortFilter} [${(page - 1) * pageSize}...${page * pageSize}] {
      _id,
      title {
        uk,
        en
      },
      projectYear,
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
    "totalCount": count(*[_type == "projects" && ${searchFilter} ${typeFilter}])
  }`;
};
