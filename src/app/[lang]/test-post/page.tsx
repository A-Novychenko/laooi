import { PostSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

const PostPage = async ({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang);

  const { postBackLink } = dict.common;
  const { posts } = dict.blogGallerySection;

  return <PostSection linkTitle={postBackLink} post={posts[0]} />;
};

export default PostPage;
