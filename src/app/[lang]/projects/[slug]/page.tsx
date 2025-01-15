import { BlogSection, PlaceholderSection, PostSection } from '@/sections';

import {
  getProjectBySlug,
  getLatestProjects,
  getAllProjects,
} from '@/actions/sanity';
import { getDictionary } from '@/utils/dictionaries';

export const revalidate = 0;

export async function generateStaticParams() {
  const { projects } = await getAllProjects();

  const staticParams =
    projects?.map(({ slug }) => {
      return {
        slug,
      };
    }) || [];

  return staticParams;
}

const ProjectPage = async ({
  params: { lang, slug },
}: {
  params: { lang: 'uk' | 'en'; slug: string };
}) => {
  const project = await getProjectBySlug(slug, lang);

  const latestProjects = await getLatestProjects(lang);

  const dict = await getDictionary(lang);

  const { pageName, title, link, errorData } = dict.projectsSection;
  const { projectBackLink, donorTitle } = dict.common;

  return (
    <>
      {project ? (
        <PostSection
          post={project}
          postBackLink={projectBackLink}
          pageName={pageName}
          donorTitle={donorTitle}
        />
      ) : (
        <PlaceholderSection data={{ title, ...errorData }} />
      )}

      <BlogSection
        dict={dict}
        lang={lang}
        pageName={pageName}
        title={title}
        link={link}
        posts={latestProjects}
      />
    </>
  );
};

export default ProjectPage;
