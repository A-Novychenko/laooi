export const getAllProjectsWithCountQuery = (
  search: string | null,
  lang: 'uk' | 'en',
  page: number,
  pageSize: number,
  donor?: string,
  sortDate: 'newest' | 'oldest' = 'newest',
) => {
  const typeFilter = donor
    ? `&& donor->id.current == ${JSON.stringify(donor)}`
    : '';

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
      donor->{
        name
        },
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
