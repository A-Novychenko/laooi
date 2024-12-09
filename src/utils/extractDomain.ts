export const extractDomain = (url: string) => {
  try {
    const parsedUrl = new URL(url);

    return parsedUrl.hostname;
  } catch (error) {
    console.error('Invalid URL:', error);

    return null;
  }
};
