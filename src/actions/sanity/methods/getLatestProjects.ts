import { sanityClient } from '@/sanity/lib/client';

import { transformProjectPreview } from '@/utils/transformProjectPreview';

import { getLatestProjectsQuery } from '../queries';

const fetchLatestProjects = async (): Promise<IProjectPreview[]> => {
  const query = getLatestProjectsQuery();
  const data = await sanityClient.fetch(query);

  return data ? data : [];
};

export const getLatestProjects = async (
  lang: 'uk' | 'en' = 'uk',
): Promise<ITransformedProjectPreview[]> => {
  try {
    const projects = await fetchLatestProjects();

    const transformedProjects = projects
      ? projects.map(project => transformProjectPreview(project, lang))
      : [];

    return transformedProjects;
  } catch (error) {
    console.error('Помилка при отриманні latest projects:', error);

    return [];
  }
};
