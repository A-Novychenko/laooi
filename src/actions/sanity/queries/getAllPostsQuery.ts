export const getAllPostsQuery = (
  page: number,
  pageSize: number,
  postType?: 'news' | 'articles' | 'events',
) => {
  const typeFilter = postType ? `&& postType == "${postType}"` : '';
  return `*[_type == "Post" ${typeFilter}] | order(publicationDate desc) [${(page - 1) * pageSize}...${page * pageSize}] {
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
