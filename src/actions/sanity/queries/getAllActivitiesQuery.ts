export const getAllActivitiesQuery = () =>
  `*[_type == "activities"] | order(index asc) {
  _id,
  quantity,
  text,
  index
}`;
