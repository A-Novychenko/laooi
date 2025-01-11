import { sanityClient } from '@/sanity/lib/client';

import { getProjectBySlugQuery } from '../queries';

import { transformProject } from '@/utils/transformProject';

export const getProjectBySlug = async (
  slug: string,
  lang: 'uk' | 'en' = 'uk',
): Promise<ITransformedProject | null> => {
  const decodedSlug = decodeURIComponent(slug);

  try {
    const project = await sanityClient.fetch(getProjectBySlugQuery, {
      slug: decodedSlug,
    });

    console.log('project', project);

    if (project) {
      return transformProject(project, lang);
    }

    return null;
  } catch (error) {
    console.error('Error fetching project:', error);

    return null;
  }
};
