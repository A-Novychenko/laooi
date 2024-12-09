import { MediaCard } from '@/components/ui';

import { cn } from '@/utils/cn';

import { MediaListProps } from './types';

import styles from './MediaList.module.css';

export const MediaList: React.FC<MediaListProps> = ({
  items,
  type = 'gallery',
}) => {
  return (
    <>
      {type === 'main' && (
        <ul className="md:flex md:gap-4">
          {items &&
            items.map(({ imageUrl, imageAlt, link }, idx) => (
              <>
                {link && (
                  <li
                    key={idx}
                    className={cn(
                      'hidden first-of-type:block',
                      styles.item,
                      'xl:block',
                    )}
                  >
                    <MediaCard
                      imageUrl={imageUrl}
                      imageAlt={imageAlt}
                      link={link}
                    />
                  </li>
                )}
              </>
            ))}
        </ul>
      )}

      {type === 'gallery' && (
        <ul className="flex flex-col gap-4 md:flex-row md:flex-wrap">
          {items &&
            items.map(({ imageUrl, imageAlt, link }, idx) => (
              <>
                {link && (
                  <li key={idx} className={cn(styles.galleryItem)}>
                    <MediaCard
                      imageUrl={imageUrl}
                      imageAlt={imageAlt}
                      link={link}
                    />
                  </li>
                )}
              </>
            ))}
        </ul>
      )}
    </>
  );
};
