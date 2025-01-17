export const getPartnersQuery = () => {
  return `
  *[_type == "partners" && isVisible == true] | order(index asc) {
    _id,
    name,
    img {
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
