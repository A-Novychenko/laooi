import { Title } from '@/components/ui';
import { BlogGallery } from '@/components/base';

import { BlogGallerySectionProps } from './types';

export const BlogGallerySection: React.FC<BlogGallerySectionProps> = ({
  title,
  posts,
  lang,
}) => {
  const newPosts = Array.from({ length: 12 }, () => posts[0]);

  return (
    <section className="my-auto pb-32 pt-16">
      <div className="container">
        <Title className="mb-4">{title}</Title>

        <BlogGallery posts={newPosts} lang={lang} />
      </div>
    </section>
  );
};
