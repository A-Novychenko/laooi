import { Title } from '@/components/ui';
import { MediaList } from '@/components/base';

import { MediaGallerySectionProps } from './types';
import Pagination from '@/components/ui/Pagination/Pagination';

export const MediaGallerySection: React.FC<MediaGallerySectionProps> = ({
  dict,
  currentPage,
  totalPages,
  mediaItems,
}) => {
  const { title } = dict.mediaSection;

  return (
    <section className="section">
      <div className="container">
        <div className="mb-4 md:flex md:justify-between">
          <Title className="mb-4 md:mb-0">{title}</Title>
        </div>

        <MediaList items={mediaItems} />

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </section>
  );
};
