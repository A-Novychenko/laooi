import { BlogGallerySection, PlaceholderSection } from '@/sections';

import { getAllPosts } from '@/actions/sanity';

import { getDictionary } from '@/utils/dictionaries';

const BlogPage = async ({
  params: { lang },
  searchParams,
}: {
  params: { lang: 'uk' | 'en' };
  searchParams: { page?: string; search?: string; type?: string };
}) => {
  const dict = await getDictionary(lang);

  const { readMoreLabel, searchInput } = dict.common;
  const { title, errorData } = dict.blogSection;

  const page = parseInt(searchParams.page || '1', 10);
  const pageSize = 12;

  const searchQuery = searchParams.search || '';
  // const postType = searchParams.type || '';

  const { posts, totalPages } = await getAllPosts(
    searchQuery,
    lang,
    page,
    pageSize,
  );

  return (
    <>
      {posts && posts.length > 0 ? (
        <BlogGallerySection
          title={title}
          posts={posts}
          lang={lang}
          readMoreLabel={readMoreLabel}
          currentPage={page}
          totalPages={totalPages}
          placeholder={searchInput.placeholder}
        />
      ) : (
        <PlaceholderSection data={{ title, ...errorData }} />
      )}
    </>
  );
};

export default BlogPage;
