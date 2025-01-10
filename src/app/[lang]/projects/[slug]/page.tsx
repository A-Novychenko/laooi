import { BlogSection, PlaceholderSection, PostSection } from '@/sections';

import {
  getProjectBySlug,
  getAllPosts,
  getLatestProjects,
} from '@/actions/sanity';
import { getDictionary } from '@/utils/dictionaries';

export async function generateStaticParams() {
  const { posts } = await getAllPosts();

  const staticParams =
    posts?.map(({ slug }) => {
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
  const { projectBackLink } = dict.common;

  return (
    <>
      {project ? (
        <PostSection post={project} postBackLink={projectBackLink} />
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
