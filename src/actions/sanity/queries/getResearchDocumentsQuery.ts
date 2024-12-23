export const getResearchDocumentsQuery = `
  *[_type == "research"]{
  title,
  index,
  "fileUrl": file.asset->url
} `;
