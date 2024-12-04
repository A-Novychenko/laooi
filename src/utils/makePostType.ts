export const makePostType = (
  postType: string,
  lang: 'uk' | 'en' = 'uk',
): string => {
  const labels: Record<string, Record<'uk' | 'en', string>> = {
    news: { uk: 'Новини', en: 'News' },
    articles: { uk: 'Статті', en: 'Articles' },
    events: { uk: 'Події', en: 'Events' },
  };

  return labels[postType][lang];
};
