import { Metadata } from 'next';
import { getDictionary } from '@/utils/dictionaries';
import {
  getAdvisorBySlug,
  getPostBySlug,
  getProjectBySlug,
  getTenderBySlug,
} from '@/actions/sanity';

const { NEXT_PUBLIC_BASE_URL } = process.env;

const makeMetaData = async (lang: 'uk' | 'en', page: string, slug?: string) => {
  const dictionary: IDictionary = await getDictionary(lang);

  let metaData: IMetaDataPage | undefined =
    dictionary.meta[page as keyof typeof dictionary.meta];

  // Якщо є slug (динамічна сторінка), отримуємо мета-дані з Sanity
  if (slug && page === 'blog') {
    const postMeta = await getPostBySlug(slug, lang);
    if (postMeta) {
      metaData = {
        title: postMeta.title,
        description: postMeta.body,
        keywords: postMeta.title?.split(' ').join(', ') || '',
        images: [
          {
            url: '/meta/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'LAOOI',
          },
        ],
      };
    }
  }

  if (slug && page === 'advisors') {
    const advisorMeta = await getAdvisorBySlug(lang, slug);
    if (advisorMeta) {
      metaData = {
        title: `${advisorMeta.name} | ${lang === 'uk' ? 'ЛАООІ' : 'LAOOI'}`,
        description: `${advisorMeta.name} ${advisorMeta.city} ${advisorMeta.phone}`,
        keywords:
          `${advisorMeta.name} ${advisorMeta.city} ${advisorMeta.phone}`
            .split(' ')
            .join(', ') || '',
        images: [
          {
            url: '/meta/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'LAOOI',
          },
        ],
      };
    }
  }

  if (slug && page === 'projects') {
    const projectMeta = await getProjectBySlug(slug, lang);
    if (projectMeta) {
      metaData = {
        title: `${projectMeta.title} | ${lang === 'uk' ? 'ЛАООІ' : 'LAOOI'}`,
        description: projectMeta.title,
        keywords:
          `${projectMeta.title} ${projectMeta.body[0]?.title}  ${projectMeta.projectYear}`
            .split(' ')
            .join(', ') || '',
        images: [
          {
            url: '/meta/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'LAOOI',
          },
        ],
      };
    }
  }

  if (slug && page === 'tenders') {
    const tenderMeta = await getTenderBySlug(slug, lang);
    if (tenderMeta) {
      metaData = {
        title: `${tenderMeta.title} | ${lang === 'uk' ? 'ЛАООІ' : 'LAOOI'}`,
        description: tenderMeta.title,
        keywords: tenderMeta.title.split(' ').join(', ') || '',
        images: [
          {
            url: '/meta/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'LAOOI',
          },
        ],
      };
    }
  }

  if (!metaData) {
    return {};
  }

  const { title, description, keywords, images } = metaData;

  const locale = lang === 'uk' ? 'uk_UA' : 'en_US';
  const BASE_URL = NEXT_PUBLIC_BASE_URL as string;
  const url = slug
    ? `${BASE_URL}/${lang}/${page}/${slug}`
    : `${BASE_URL}/${lang}/${page}`;

  const meta: Metadata = {
    title,
    description,
    keywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
      languages: {
        uk: `${BASE_URL}/uk/${page}${slug ? `/${slug}` : ''}`,
        en: `${BASE_URL}/en/${page}${slug ? `/${slug}` : ''}`,
      },
    },
    // manifest: '/meta/site.webmanifest',
    openGraph: {
      title,
      description,
      url,
      siteName: title,
      locale,
      type: slug ? 'article' : 'website',
      images,
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      images,
    },
    icons: {
      icon: [
        {
          url: '/meta/favicon.ico',
        },
        {
          url: '/meta/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          url: '/meta/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          url: '/meta/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          url: '/meta/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      shortcut: [
        {
          url: '/meta/favicon.ico',
        },
      ],
      apple: [
        {
          url: '/meta/apple-touch-icon.png',
        },
      ],
      other: [
        {
          rel: 'apple-touch-icon',
          url: '/meta/apple-touch-icon.png',
        },
      ],
    },
  };

  return meta;
};

export default makeMetaData;
