import { makePostType } from './makePostType';

export const transformPost = (
  post: IPost,
  lang: 'uk' | 'en' = 'uk',
): ITransformedPost => {
  return {
    type: post.postType,
    label: makePostType(post.postType, lang),
    images: post.images.map(image => image.asset.url),
    title: post.title[lang],
    body: post.body[lang] as string,
    date: post.publicationDate,
    link: post.link,
    slug: post.slug.current,
    postUrl: `/${post.slug.current}`,
    linkTitle: post.title[lang],
  };
};
