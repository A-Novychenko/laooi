import { MediaGallerySection, PlaceholderSection } from '@/sections';

import { getAllMediaItems } from '@/actions/sanity';

import { getDictionary } from '@/utils/dictionaries';

const MediaPage = async ({
  params: { lang },
  searchParams,
}: {
  params: { lang: 'uk' | 'en' };
  searchParams: { page?: string; sort?: string };
}) => {
  const dict = await getDictionary(lang);

  const { title, errorData } = dict.mediaSection;
  const {
    searchInput: { placeholder },
    selectSortByDate,
  } = dict.common;

  const page = parseInt(searchParams.page || '1', 10);
  const pageSize = 15;

  const sortDate = searchParams.sort === 'oldest' ? 'oldest' : 'newest';

  const { totalPages, mediaItems } = await getAllMediaItems(
    lang,
    page,
    pageSize,
    sortDate,
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
          placeholder={placeholder}
          selectSortByDate={selectSortByDate}
        />
      ) : (
        <PlaceholderSection data={{ title, ...errorData }} />
      )}
    </>
  );
};

export default MediaPage;
