import { Metadata } from 'next';

import { getDictionary } from '@/utils/dictionaries';

const { NEXT_PUBLIC_BASE_URL } = process.env;

const makeMetaData = async (lang: string, page: string) => {
  const dictionary: IDictionary = await getDictionary(lang);

  const { title, description, keywords, images }: IMetaDataPage =
    dictionary.meta[page as keyof typeof dictionary.meta];

  const locale = lang === 'uk' ? 'uk_UA' : 'en_US';

  const BASE_URL = NEXT_PUBLIC_BASE_URL as string;

  const meta: Metadata = {
    title,
    description,
    keywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/uk`,

      languages: {
        uk: `${BASE_URL}/uk`,
        en: `${BASE_URL}/en`,
      },
    },

    manifest: '/meta/site.webmanifest',
    openGraph: {
      title,
      description,
      url: BASE_URL,
      siteName: title,
      locale,
      type: 'website',
      images,
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      images,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
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
          rel: '/meta/apple-touch-icon.png',
          url: '/meta/apple-touch-icon.png',
        },
      ],
    },
  };

  return meta;
};

export default makeMetaData;
