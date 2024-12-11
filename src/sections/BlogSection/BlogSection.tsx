import { ButtonLink, PostCard, Title } from '@/components/ui';

import { cn } from '@/utils/cn';
import { getLatestPosts } from '@/actions/sanity';

import { BlogSectionProps } from './types';

import styles from './BlogSection.module.css';

export const BlogSection: React.FC<BlogSectionProps> = async ({
  dict,
  lang,
}) => {
  const { title, link } = dict.blogSection;
  const { readMoreLabel } = dict.common;

  const posts = await getLatestPosts(lang);

  return (
    <>
      {posts && posts.length > 0 ? (
        <section className="section">
          <div className="container">
            <div className="mb-4 md:flex md:justify-between">
              <Title className="mb-4 md:mb-0">{title}</Title>

              <ButtonLink
                type="link"
                typeStyle="light"
                settings={{
                  ...link.settings,
                  href: `/${lang}${link.settings.href}`,
                }}
                className="md:h-12 md:w-[219px] xl:h-14 xl:w-[308px]"
              >
                {link.label}
              </ButtonLink>
            </div>

            <ul className="md:flex md:flex-row md:gap-[16px]">
              {posts &&
                posts.map((post: ITransformedPostPreview, idx: number) => (
                  <li key={idx} className={cn(styles.card)}>
                    <PostCard
                      post={post}
                      lang={lang}
                      readMoreLabel={readMoreLabel}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
};
