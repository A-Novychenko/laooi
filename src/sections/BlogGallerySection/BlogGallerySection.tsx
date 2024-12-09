import dynamic from 'next/dynamic';

import { CategorySelect, GallerysSearchInput, Title } from '@/components/ui';
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
}) => {
  return (
    <section className="my-auto pb-32 pt-16">
      <div className="container">
        <Title className="mb-4">{title}</Title>

        <GallerysSearchInput placeholder={placeholder} />

        <CategorySelect />

        <BlogGallery posts={posts} lang={lang} readMoreLabel={readMoreLabel} />

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </section>
  );
};
