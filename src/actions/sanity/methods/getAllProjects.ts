import { sanityClient } from '@/sanity/lib/client';

import { transformProjectPreview } from '@/utils/transformProjectPreview';

import { getAllProjectsWithCountQuery } from '../queries';

const fetchPosts = async (
  search: string | null,
  lang: 'uk' | 'en',
  page: number,
  pageSize: number,
  donor?: string,
  sortDate: 'newest' | 'oldest' = 'newest',
): Promise<{
  projects: IProjectPreview[];
  totalCount: number;
}> => {
  const query = getAllProjectsWithCountQuery(
    search,
    lang,
    page,
    pageSize,
    donor,
    sortDate,
  );

  const result = await sanityClient.fetch(query);

  return {
    projects: result.projects ?? [],
    totalCount: result.totalCount ?? 0,
  };
};

export const getAllProjects = async (
  search: string | null = null,
  lang: 'uk' | 'en' = 'uk',
  page: number = 1,
  pageSize: number = 12,
  donor?: string,
  sortDate: 'newest' | 'oldest' = 'newest',
): Promise<{
  projects: ITransformedProjectPreview[];
  totalPages: number;
}> => {
  try {
    const { projects, totalCount } = await fetchPosts(
      search,
      lang,
      page,
      pageSize,
      donor,
      sortDate,
    );

    const transformedPosts = projects
      ? projects.map(project => transformProjectPreview(project, lang))
      : [];

    const totalPages = Math.ceil(totalCount / pageSize);

    return { projects: transformedPosts, totalPages };
  } catch (error) {
    console.error('Помилка при отриманні проєктів:', error);
    return { projects: [], totalPages: 0 };
  }
};
