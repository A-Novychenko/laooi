import { GalleryNewsSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

const NewsGallery = async ({
  params: { lang },
}: {
  params: { lang: string };
}) => {
  const dict = await getDictionary(lang);

  const { title, posts } = dict.galleryNewsSection;

  return (
    <main className="flex grow flex-col">
      <GalleryNewsSection title={title} posts={posts} lang={lang} />
    </main>
  );
};

export default NewsGallery;
