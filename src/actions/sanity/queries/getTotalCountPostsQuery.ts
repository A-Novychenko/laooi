export const getTotalCountPostsQuery = () => {
  return `count(*[_type == "Post"])`;
};
