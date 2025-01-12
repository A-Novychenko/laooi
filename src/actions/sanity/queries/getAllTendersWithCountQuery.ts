export const getAllTendersWithCountQuery = (
  search: string | null,
  lang: 'uk' | 'en',
  page: number,
  pageSize: number,
  deadline?: string,
  sortDate: 'newest' | 'oldest' = 'newest',
) => {
  const now = new Date().toISOString();
  let typeFilter = '';

  if (deadline === 'active') {
    typeFilter = `&& deadline >= "${now}"`;
  } else if (deadline === 'disabled') {
    typeFilter = `&& deadline < "${now}"`;
  }

  const sortFilter =
    sortDate === 'oldest'
      ? `| order(publicationDate asc)`
      : `| order(publicationDate desc)`;
  const searchFilter = search
    ? `(title.${lang} match "${search}*" || body.${lang} match "${search}*")`
    : 'true';

  return `{
    "tenders": *[_type == "tenders" && ${searchFilter} ${typeFilter}] ${sortFilter} [${(page - 1) * pageSize}...${page * pageSize}] {
      _id,
      title {
        uk,
        en
      },
      slug,
      deadline,
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
      },
      publicationDate
    },
    "totalCount": count(*[_type == "tenders" && ${searchFilter} ${typeFilter}])
  }`;
};
