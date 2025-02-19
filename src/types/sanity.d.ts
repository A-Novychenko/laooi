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
  slug: {
    current: string;
  };
}

interface ITransformedAdvisor {
  photo: string;
  alt: string;
  name: string;
  city: string;
  phone: string;
  index: number;
  slug: string;
}

interface IAdvisorBySlug {
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
  link: link;
  index: number;
  slug: {
    current: string;
  };
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
}

interface ITransformedAdvisorBySlug {
  photo: string;
  alt: string;
  name: string;
  city: string;
  phone: string;
  index: number;
  slug: string;
  link: link;
  body: {
    title: string;
    text: any;
  }[];
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

interface IDonor {
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

interface ITransformedDonor {
  name: string;
  img: string;
  alt: string;
  link: string;
  index: number;
}

interface IDonorFromFilter {
  donor: {
    _id: string;
    name: {
      uk: string;
      en: string;
    };
    id: { current: string };
    isVisible: boolean;
  };
}

interface ITransformedFromFilter {
  value: string;
  label: string;
}

interface ITeamMember {
  _id: string;
  name: {
    uk: string;
    en: string;
  };
  position: {
    uk: string;
    en: string;
  };
  description: {
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
  link: string;
  index: number;
}

interface ITransformedTeamMember {
  name: string;
  position: string;
  description: string;
  photo: string;
  alt: string;
  link: string;
  index: number;
}

interface IActivity {
  _id: string;
  quantity: number;
  text: {
    uk: string;
    en: string;
  };
  index: number;
}

interface ITransformedActivity {
  quantity: number;
  text: string;
}

interface ISearchArray {
  _type?: string;
  link?: string;
  _id?: string;
  title?: { [key: string]: string };
  slug?: { current: string; _type: string };
  _createdAt?: string;
  postType?: string;
  _rev?: string;
  body?: { [key: string]: string };
  _updatedAt?: string;
  publicationDate?: string;
  images?: {
    asset: { _ref: string; _type: string };
    caption: { [key: string]: string };
  }[];
  description?: { [key: string]: string };
  name?: { [key: string]: string };
  projectYear?: string;
  file?: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  deadline?: string;
  position?: { [key: string]: string };
  photo: {
    asset: { _ref: string; _type: string };
    caption: { [key: string]: string };
  };
  index?: number;
  phone?: string;
  city?: { [key: string]: string };
}

type LangType = 'uk' | 'en';

interface ISearchItem {
  _id: string;
  title: string;
  slug: string;
  publicationDate?: string;
  image?: string;
  imageAlt?: string;
  projectYear?: string;
  type?: string;
  deadline?: string;
  fileUrl: string;
  name: string;
  position: string;
  description: string;
  photo: string;
  alt: string;
  link: string;
  index: number;
  label: string;
  date: string;
  phone: string;
  city: string;
  text?: string;
}

interface ISanitySearchResult {
  _id: string;
  _type: string;
  title?: Record<LangType, string>;
  slug?: { current: string };
  publicationDate?: string;
  images?: { asset?: { _ref: string }; caption?: Record<LangType, string> }[];
  projectYear?: string;
  postType?: string;
  deadline?: string;
  file?: { asset?: { _ref: string } };
  name?: Record<LangType, string>;
  position?: Record<LangType, string>;
  description?: Record<LangType, string>;
  photo?: { asset?: { _ref: string }; caption?: Record<LangType, string> };
  link?: string;
  index?: number;
  label?: string;
  body?: ItemBody;
  phone?: string;
  city?: { [key: string]: string };
  img?: { asset?: { _ref: string }; caption?: Record<LangType, string> };
}

type SearchCategory =
  | 'projects'
  | 'research'
  | 'media'
  | 'documents'
  | 'post'
  | 'tenders'
  | 'team'
  | 'news'
  | 'advisors'
  | 'other';

type ISearchResults = Record<string, ISearchItem[]>;

type ItemBody = {
  [key: string]: Array<{
    children: Array<{ text: string }>;
  }>;
};
