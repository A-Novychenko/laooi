import { BlogGallerySection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

const BlogPage = async ({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang);

  const { title, posts } = dict.blogGallerySection;

  return <BlogGallerySection title={title} posts={posts} lang={lang} />;
};

export default BlogPage;
