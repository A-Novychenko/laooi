import { BlogGallerySection, PlaceholderSection } from '@/sections';

import { getAllPosts } from '@/actions/sanity';

import { getDictionary } from '@/utils/dictionaries';

enum PostType {
  News = 'news',
  Articles = 'articles',
  Events = 'events',
}

const BlogPage = async ({
  params: { lang },
  searchParams,
}: {
  params: { lang: 'uk' | 'en' };
  searchParams: {
    page?: string;
    search?: string;
    type?: 'news' | 'articles' | 'events';
    sort?: string;
  };
}) => {
  const dict = await getDictionary(lang);

  const { readMoreLabel, searchInput, selectSortByDate, selectPostByType } =
    dict.common;
  const { title, errorData } = dict.blogSection;

  const page = parseInt(searchParams.page || '1', 10);
  const pageSize = 12;

  const searchQuery = searchParams.search || '';

  const sortDate = searchParams.sort === 'oldest' ? 'oldest' : 'newest';

  const postType: PostType | undefined = Object.values(PostType).includes(
    searchParams.type as PostType,
  )
    ? (searchParams.type as PostType)
    : undefined;

  const { posts, totalPages } = await getAllPosts(
    searchQuery,
    lang,
    page,
    pageSize,
    postType,
    sortDate,
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
          selectSortByDate={selectSortByDate}
          selectPostByType={selectPostByType}
        />
      ) : (
        <PlaceholderSection data={{ title, ...errorData }} />
      )}
    </>
  );
};

export default BlogPage;
