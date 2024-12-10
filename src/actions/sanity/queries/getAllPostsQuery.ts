export const getAllPostsQuery = (
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

  return `*[_type == "Post" ${typeFilter}] ${sortFilter} [${(page - 1) * pageSize}...${page * pageSize}] {
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
