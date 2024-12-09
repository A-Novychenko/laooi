export type MediaGallerySectionProps = {
  dict: IDictionary;
  lang: 'uk' | 'en';
  currentPage: number;
  totalPages: number;
  mediaItems: ITransformedMediaItem[];
};
