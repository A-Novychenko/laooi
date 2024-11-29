import { GalleryPost, Title } from '@/components/ui';

import { GalleryNewsSectionProps } from './types';

export const GalleryNewsSection: React.FC<GalleryNewsSectionProps> = ({
  title,
  posts,
  lang,
}) => {
  const newPosts = Array.from({ length: 12 }, () => posts[0]);

  return (
    <section className="my-auto pb-32 pt-16">
      <div className="container">
        <Title className="mb-4">{title}</Title>

        <GalleryPost posts={newPosts} lang={lang} />
      </div>
    </section>
  );
};
