export const getFileUrl = (fileRef: string | undefined) => {
  if (!fileRef) return null;

  return `https://cdn.sanity.io/files/w31v92q7/production/${fileRef.replace('file-', '').replace('-pdf', '.pdf')}`;
};
