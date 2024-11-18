import { MediaCard } from '@/components/ui';

import { cn } from '@/utils/cn';

import { MediaListProps } from './types';

import styles from './MediaList.module.css';

export const MediaList: React.FC<MediaListProps> = ({ items }) => {
  return (
    <ul className="md:flex md:gap-4">
      {items &&
        items.map(({ img, cardLink }, idx) => (
          <li
            key={idx}
            className={cn(
              'hidden first-of-type:block',
              styles.item,
              'xl:block',
            )}
          >
            <MediaCard img={img} cardLink={cardLink} />
          </li>
        ))}
    </ul>
  );
};
