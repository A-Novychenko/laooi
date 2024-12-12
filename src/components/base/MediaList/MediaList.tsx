import { MediaCard } from '@/components/ui';

import { cn } from '@/utils/cn';

import { MediaListProps } from './types';

import styles from './MediaList.module.css';
import { Fragment } from 'react';

export const MediaList: React.FC<MediaListProps> = ({
  items,
  type = 'gallery',
}) => {
  return (
    <>
      {type === 'main' && (
        <ul className="md:flex md:gap-4">
          {items &&
            items.map(({ imageUrl, imageAlt, link }) => (
              <Fragment key={link}>
                {link && (
                  <li
                    key={link}
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
              </Fragment>
            ))}
        </ul>
      )}

      {type === 'gallery' && (
        <ul className="flex flex-col gap-[16px] md:flex-row md:flex-wrap">
          {items &&
            items.map(({ imageUrl, imageAlt, link }) => (
              <Fragment key={link + imageUrl}>
                {link && (
                  <li className={cn(styles.galleryItem)}>
                    <MediaCard
                      imageUrl={imageUrl}
                      imageAlt={imageAlt}
                      link={link}
                    />
                  </li>
                )}
              </Fragment>
            ))}
        </ul>
      )}
    </>
  );
};
