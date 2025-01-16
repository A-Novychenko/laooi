export const getTeamQuery = () => {
  return `
  *[_type == "team"] | order(index asc) {
    _id,
    name,
    position,
    description,
    photo {
      caption,
      asset->{
        _id,
        url
      }
    },
    link,
    index
  }
  `;
};
