export const getDocumentsQuery = `
  *[_type == "documents"]{
  title,
  category,
  index,
  "fileUrl": file.asset->url
} `;
