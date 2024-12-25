export const getAdvisorsQuery = () => {
  return `
  *[_type == "advisors"] | order(index asc) {
    _id,
    name,
    photo {
      caption,
      asset->{
        _id,
        url
      }
    },
    city,
    phone,
    index
  }
  `;
};
