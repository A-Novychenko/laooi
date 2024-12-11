export const getDocumentsQuery = `
  *[_type == "documents"]{
  title,
  category,
  "fileUrl": file.asset->url
} `;
