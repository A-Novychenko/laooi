export const getAdvisorBySlugQuery = (slug: string) => {
  return `
  *[_type == "advisors" && slug.current == "${slug}"][0] {
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
    slug,
    body,
    phone,
    link,
    index
  }
  `;
};
