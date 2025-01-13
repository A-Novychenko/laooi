/* eslint-disable @typescript-eslint/no-explicit-any */

// import type { PortableTextBlock } from 'sanity';

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
  imageAlt: string | undefined;
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
  link: string;
  slug: { current: string };
  images: { asset: { url: string }; caption: { uk: string; en: string } }[];
}

interface ITransformedPost {
  type: string;
  label: string;
  images: { src: string; alt: string }[];
  title: string;
  body: string;
  date: string;
  link: string;
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

interface IMediaItem {
  _id: string;
  link: string;
  img: {
    caption: {
      uk: string;
      en: string;
    };
    asset: {
      _id: string;
      url: string;
    };
  };
  publicationDate: string;
}

interface ITransformedMediaItem {
  imageUrl: string;
  imageAlt: string;
  link: string;
}

interface IMediaItemsResponse {
  items: IMediaItem[];
  total: number;
}

interface IDocument {
  title: {
    uk: string;
    en: string;
  };
  category: string;
  index: number;
  fileUrl: string;
}

interface ITransformedDocument {
  title: string;
  category: string;
  index: number;
  fileUrl: string;
}

interface ITransformedResearchDocument {
  title: string;
  index: number;
  fileUrl: string;
}

interface IAdvisor {
  _id: string;
  name: {
    uk: string;
    en: string;
  };
  photo: {
    caption: {
      uk: string;
      en: string;
    };
    asset: {
      _id: string;
      url: string;
    };
  };
  city: {
    uk: string;
    en: string;
  };
  phone: string;
  index: number;
}

interface ITransformedAdvisor {
  photo: string;
  alt: string;
  name: string;
  city: string;
  phone: string;
  index: number;
}

interface IPrivacyPolicy {
  body: { [key: string]: string };
}

interface ITenderPreview {
  _id: string;
  title: {
    uk: string;
    en: string;
  };
  deadline: string;
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

interface ITransformedTenderPreview {
  deadline: string;
  label: string;
  image: string | undefined;
  imageAlt: string | undefined;
  title: string;
  date: string;
  slug: string;
}

interface ITender {
  _id: string;
  deadline: string;
  title: { [key: string]: string };
  body: { [key: string]: string };
  publicationDate: string;
  slug: { current: string };
  images: { asset: { url: string }; caption: { uk: string; en: string } }[];
}

interface ITransformedTender {
  deadline: string;
  images: { src: string; alt: string }[];
  title: string;
  body: string;
  date: string;
  slug: string;
}

interface IProjectPreview {
  _id: string;
  title: {
    uk: string;
    en: string;
  };
  projectYear: string;
  publicationDate: string;
  slug: {
    current: string;
  };
  images: PostImage[];
  body: {
    uk: any[] | string;
    en: any[] | string;
  };
  donor: {
    name: {
      uk: string;
      en: string;
    };
  };
}

interface ITransformedProjectPreview {
  projectYear: string;
  label: string;
  image: string | undefined;
  imageAlt: string | undefined;
  title: string;
  date: string;
  slug: string;
  donor: string;
}

interface IProject {
  _id: string;
  projectYear: string;
  title: { [key: string]: string };
  body: {
    uk: {
      title: string;
      text: any;
    }[];
    en: {
      title: string;
      text: any;
    }[];
  };
  publicationDate: string;
  slug: { current: string };
  images: { asset: { url: string }; caption: { uk: string; en: string } }[];
  donor: {
    name: {
      uk: string;
      en: string;
    };
  };
}

interface ITransformedProject {
  projectYear: string;
  images: { src: string; alt: string }[];
  title: string;
  body: {
    title: string;
    text: any;
  }[];

  date: string;
  slug: string;
  donor: string;
}

interface IPartner {
  _id: string;
  name: {
    uk: string;
    en: string;
  };
  img: {
    caption: {
      uk: string;
      en: string;
    };
    asset: {
      _id: string;
      url: string;
    };
  };
  link: string;
  index: number;
}

interface ITransformedPartner {
  name: string;
  img: string;
  alt: string;
  link: string;
  index: number;
}

interface IDonors {
  donor: {
    _id: string;
    name: {
      uk: string;
      en: string;
    };
    id: { current: string };
  };
}

interface ITransformedDonor {
  name: string;
  id: string;
}
