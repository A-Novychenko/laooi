import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/studio/*'],
      },
    ],
    sitemap: 'https://laooi.org/sitemap.xml',
  };
}
