export const getAllDonorsQuery = () => {
  return `
  *[_type == "donors" && isVisible == true] | order(index asc) {
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
