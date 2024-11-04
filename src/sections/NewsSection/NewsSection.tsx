import { PostCard, Title } from '@/components/ui';

import { cn } from '@/utils/cn';

import styles from './NewsSection.module.css';

import { NewsSectionProps } from './types';

export const NewsSection: React.FC<NewsSectionProps> = ({ dict, lang }) => {
  const { sectionTitle, posts } = dict.newsSection;

  return (
    <section className="section">
      <div className="container">
        <Title>{sectionTitle}</Title>
        <ul>
          {posts &&
            posts.map((post: INewsPosts, idx: number) => (
              <li key={idx} className={cn(styles.card)}>
                <PostCard post={post} lang={lang} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
