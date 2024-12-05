import { makePostType } from './makePostType';

export const transformPost = (
  post: IPost,
  lang: 'uk' | 'en' = 'uk',
): ITransformedPost => {
  return {
    type: post.postType,
    label: makePostType(post.postType, lang),
    images: post.images.map(image => {
      console.log('image', image);
      return {
        src: image.asset.url,
        alt: image.caption[lang],
      };
    }),
    title: post.title[lang],
    body: post.body[lang] as string,
    date: post.publicationDate,
    link: post.link,
    slug: post.slug.current,
    postUrl: `/${post.slug.current}`,
    linkTitle: post.title[lang],
  };
};
