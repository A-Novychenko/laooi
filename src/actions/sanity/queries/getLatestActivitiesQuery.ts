export const getLatestActivitiesQuery = () =>
  `*[_type == "activities"] | order(index asc) [0..7] {
  _id,
  quantity,
  text,
  index
}`;
