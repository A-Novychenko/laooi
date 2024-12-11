import dynamic from 'next/dynamic';

import { GallerySearchInput, Title } from '@/components/ui';
import { MediaList } from '@/components/base';

import { MediaGallerySectionProps } from './types';

const Pagination = dynamic(
  () => import('@/components/ui/Pagination/Pagination'),
  {
    ssr: false,
  },
);

export const MediaGallerySection: React.FC<MediaGallerySectionProps> = ({
  dict,
  currentPage,
  totalPages,
  mediaItems,
  placeholder,
}) => {
  const { title } = dict.mediaSection;

  return (
    <section className="section">
      <div className="container">
        <div className="mb-4 md:flex md:justify-between">
          <Title className="mb-4 md:mb-0">{title}</Title>
        </div>

        <GallerySearchInput placeholder={placeholder} />

        <MediaList items={mediaItems} />

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </section>
  );
};
