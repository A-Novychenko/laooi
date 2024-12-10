import dynamic from 'next/dynamic';

import {
  CategorySelect,
  GallerySearchInput,
  SelectByDate,
  Title,
} from '@/components/ui';
import { BlogGallery } from '@/components/base';

import { BlogGallerySectionProps } from './types';

const Pagination = dynamic(
  () => import('@/components/ui/Pagination/Pagination'),
  {
    ssr: false,
  },
);

export const BlogGallerySection: React.FC<BlogGallerySectionProps> = ({
  title,
  posts,
  lang,
  readMoreLabel,
  currentPage,
  totalPages,
  placeholder,
  selectSortByDate,
  selectPostByType,
}) => {
  return (
    <section className="my-auto pb-32 pt-16">
      <div className="container">
        <Title className="mb-4">{title}</Title>

        <div className="flex flex-col md:mb-4 xl:flex-row xl:gap-4">
          <GallerySearchInput placeholder={placeholder} />

          <div className="flex flex-col md:flex-row md:gap-4">
            <CategorySelect selectPostByType={selectPostByType} />

            <SelectByDate selectSortByDate={selectSortByDate} />
          </div>
        </div>

        <BlogGallery posts={posts} lang={lang} readMoreLabel={readMoreLabel} />

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </section>
  );
};
