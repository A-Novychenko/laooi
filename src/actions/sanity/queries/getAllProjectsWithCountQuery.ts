export const getAllProjectsWithCountQuery = (
  search: string | null,
  lang: 'uk' | 'en',
  page: number,
  pageSize: number,
  donor?: string,
  sortDate: 'newest' | 'oldest' = 'newest',
) => {
  const filterByid = `&& donor->id.current == ${JSON.stringify(donor)}`;
  const filterByOther = `&& donor->isVisible == false`;
  const selectFilter = donor === 'other' ? filterByOther : filterByid;
  const typeFilter = donor ? selectFilter : '';

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
        name,
        isVisible
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
