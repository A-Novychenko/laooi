import { MetadataRoute } from 'next';

import {
  getAdvisors,
  getAllPosts,
  getAllProjects,
  getAllTenders,
} from '@/actions/sanity';

type SlugData = { slug: string };

const fetchAdvisors = async (): Promise<string[]> => {
  const { advisors } = await getAdvisors();
  return advisors?.map(({ slug }) => slug) || [];
};

const fetchAllData = async (
  fetchFunction: (
    search: string | null,
    lang: 'uk' | 'en',
    page: number,
    pageSize: number,
  ) => Promise<{
    posts?: SlugData[];
    projects?: SlugData[];
    tenders?: SlugData[];
    totalPages: number;
  }>,
): Promise<string[]> => {
  const allSlugs: string[] = [];
  let page = 1;
  let totalPages = 1;
  const pageSize = 50;

  do {
    const {
      posts,
      projects,
      tenders,
      totalPages: newTotalPages,
    } = await fetchFunction(null, 'uk', page, pageSize);
    const slugs = posts || projects || tenders || [];
    allSlugs.push(...slugs.map(({ slug }) => slug));
    totalPages = newTotalPages;
    page++;
  } while (page <= totalPages);

  return allSlugs;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://laooi.org';
  const languages = ['en', 'uk'];
  const paths = [
    '',
    '/advisors',
    '/blog',
    '/contacts',
    '/documents',
    '/main-areas',
    '/media',
    '/privacy-policy',
    '/projects',
    '/tenders',
    '/research',
    '/search',
    '/strategy',
    '/team',
  ];

  const staticUrls = paths.flatMap(path =>
    languages.map(lang => ({
      url: `${baseUrl}/${lang}${path}`,
      lastModified: new Date().toISOString(),
    })),
  );

  const advisorSlugs = await fetchAdvisors();
  const advisorUrls = advisorSlugs.flatMap(slug =>
    languages.map(lang => ({
      url: `${baseUrl}/${lang}/advisors/${slug}`,
      lastModified: new Date().toISOString(),
    })),
  );

  const blogSlugs = await fetchAllData(getAllPosts);
  const blogUrls = blogSlugs.flatMap(slug =>
    languages.map(lang => ({
      url: `${baseUrl}/${lang}/blog/${slug}`,
      lastModified: new Date().toISOString(),
    })),
  );

  const projectsSlugs = await fetchAllData(getAllProjects);
  const projectsUrls = projectsSlugs.flatMap(slug =>
    languages.map(lang => ({
      url: `${baseUrl}/${lang}/projects/${slug}`,
      lastModified: new Date().toISOString(),
    })),
  );

  const tendersSlugs = await fetchAllData(getAllTenders);
  const tendersUrls = tendersSlugs.flatMap(slug =>
    languages.map(lang => ({
      url: `${baseUrl}/${lang}/tenders/${slug}`,
      lastModified: new Date().toISOString(),
    })),
  );

  return [
    ...staticUrls,
    ...advisorUrls,
    ...blogUrls,
    ...projectsUrls,
    ...tendersUrls,
  ];
}
