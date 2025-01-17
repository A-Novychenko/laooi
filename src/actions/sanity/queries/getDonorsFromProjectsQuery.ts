export const getDonorsFromProjectsQuery = () => {
  return `
*[_type == "projects" && defined(donor) && defined(donor->id.current) && defined(donor->name.uk) && defined(donor->name.en)] {
  donor->{
    _id,
    id,
    name,
    isVisible
  }
} | order(name.uk asc) {
  donor
} [0...1000]
  `;
};
