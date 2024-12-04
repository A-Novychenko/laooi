import { BlogGallerySection, PlaceholderSection } from '@/sections';

import { getAllPosts } from '@/actions/sanity';

import { getDictionary } from '@/utils/dictionaries';

const BlogPage = async ({
  params: { lang },
}: {
  params: { lang: 'uk' | 'en' };
}) => {
  const dict = await getDictionary(lang);

  const { readMoreLabel } = dict.common;
  const { title, errorData } = dict.blogSection;

  const posts = await getAllPosts(lang);

  return (
    <>
      {posts && posts.length > 0 ? (
        <BlogGallerySection
          title={title}
          posts={posts}
          lang={lang}
          readMoreLabel={readMoreLabel}
        />
      ) : (
        <PlaceholderSection data={{ title, ...errorData }} />
      )}
    </>
  );
};

export default BlogPage;
