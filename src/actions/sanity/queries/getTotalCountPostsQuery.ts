export const getTotalCountPostsQuery = (
  postType?: 'news' | 'articles' | 'events',
) => {
  const typeFilter = postType ? `&& postType == "${postType}"` : '';
  return `count(*[_type == "Post" ${typeFilter}])`;
};
