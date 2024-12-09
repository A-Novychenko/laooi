import { MediaGallerySection, PlaceholderSection } from '@/sections';

import { getAllMediaItems } from '@/actions/sanity';

import { getDictionary } from '@/utils/dictionaries';

const MediaPage = async ({
  params: { lang },
  searchParams,
}: {
  params: { lang: 'uk' | 'en' };
  searchParams: { page?: string };
}) => {
  const dict = await getDictionary(lang);

  const { title, errorData } = dict.blogSection;

  const page = parseInt(searchParams.page || '1', 10);
  const pageSize = 15;

  const { totalPages, mediaItems } = await getAllMediaItems(
    lang,
    page,
    pageSize,
  );

  return (
    <>
      {mediaItems && mediaItems.length > 0 ? (
        <MediaGallerySection
          dict={dict}
          lang={lang}
          currentPage={page}
          totalPages={totalPages}
          mediaItems={mediaItems}
        />
      ) : (
        <PlaceholderSection data={{ title, ...errorData }} />
      )}
    </>
  );
};

export default MediaPage;
