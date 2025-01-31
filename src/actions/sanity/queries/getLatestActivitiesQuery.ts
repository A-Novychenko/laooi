export const getLatestActivitiesQuery = () =>
  `*[_type == "activities"] | order(index asc) [0..3] {
  _id,
  quantity,
  text,
  index
}`;
