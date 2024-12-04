/* eslint-disable @typescript-eslint/no-explicit-any */

interface IPostPreview {
  _id: string;
  title: {
    uk: string;
    en: string;
  };
  postType: string;
  publicationDate: string;
  slug: {
    current: string;
  };
  images: PostImage[];
  body: {
    uk: any[] | string;
    en: any[] | string;
  };
}

interface ITransformedPostPreview {
  type: string;
  label: string;
  image: string | undefined;
  title: string;
  body: string;
  date: string;
  slug: string;
  postUrl: string;
  linkTitle: string;
  text: string;
}

interface IPost {
  _id: string;
  postType: 'news' | 'articles' | 'events';
  title: { [key: string]: string };
  body: { [key: string]: string };
  publicationDate: string;
  slug: { current: string };
  images: { asset: { url: string } }[];
}

interface ITransformedPost {
  type: string;
  label: string;
  images: string[];
  title: string;
  body: string;
  date: string;
  slug: string;
  postUrl: string;
  linkTitle: string;
}

interface IPostImage {
  caption: string;
  asset: {
    _id: string;
    url: string;
  };
}
