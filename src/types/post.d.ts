/* eslint-disable @typescript-eslint/no-explicit-any */
interface IPostBlogGalleryPage {
  deadline?: string;
  type?: string;
  label: string;
  text?: string;
  image: string | undefined;
  imageAlt: string | undefined;
  title: string;
  body?: string;
  date: string;
  slug: string;
  postUrl?: string;
  linkTitle?: string;
  projectYear?: string;
}

interface IPostBlogPage {
  deadline?: string;
  projectYear?: string;
  type?: string;
  label?: string;
  text?: string;
  link?: string;
  images?: { src: string; alt: string }[];
  imageAlt?: string;
  title: string;
  body?:
    | string
    | {
        title: string;
        text: any;
      }[];
  date: string;
  slug: string;
  postUrl?: string;
  linkTitle?: string;
  donor?: string;
}
