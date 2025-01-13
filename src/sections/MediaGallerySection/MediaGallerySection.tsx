import dynamic from 'next/dynamic';

import { GallerySearchInput, PostCardDateSelect, Title } from '@/components/ui';
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
  selectSortByDate,
  notFoundDescr,
}) => {
  const { title } = dict.mediaSection;

  return (
    <section className="section section-media">
      <div className="container">
        <div className="mb-4 md:flex md:justify-between">
          <Title className="mb-4 md:mb-0">{title}</Title>
        </div>

        <div className="mb-4 flex flex-col xl:flex-row xl:gap-[16px]">
          <GallerySearchInput placeholder={placeholder} />

          <PostCardDateSelect selectSortByDate={selectSortByDate} />
        </div>

        <MediaList items={mediaItems} notFoundDescr={notFoundDescr} />

        {mediaItems && mediaItems.length > 0 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        )}
      </div>
    </section>
  );
};
