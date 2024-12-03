import { ButtonLink, PostCard, Title } from '@/components/ui';

import { cn } from '@/utils/cn';

import { BlogSectionProps } from './types';

import styles from './BlogSection.module.css';

export const BlogSection: React.FC<BlogSectionProps> = ({ dict, lang }) => {
  const { sectionTitle, posts, link } = dict.blogSection;

  return (
    <section className="section">
      <div className="container">
        <div className="mb-4 md:flex md:justify-between">
          <Title className="mb-4 md:mb-0">{sectionTitle}</Title>

          <ButtonLink
            type="link"
            typeStyle="light"
            settings={{
              ...link.settings,
              href: `${lang}${link.settings.href}`,
            }}
            className="md:h-12 md:w-[219px] xl:h-14 xl:w-[308px]"
          >
            {link.label}
          </ButtonLink>
        </div>

        <ul className="md:flex md:flex-row md:gap-[16px]">
          {posts &&
            posts.map((post: IBlogPost, idx: number) => (
              <li key={idx} className={cn(styles.card)}>
                <PostCard post={post} lang={lang} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
