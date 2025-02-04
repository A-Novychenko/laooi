import { Fragment } from 'react';

import { MediaCard } from '@/components/ui';

import { cn } from '@/utils/cn';

import { MediaListProps } from './types';

import styles from './MediaList.module.css';

export const MediaList: React.FC<MediaListProps> = ({
  items,
  type = 'gallery',
  notFoundDescr,
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
        <>
          {items && items.length > 0 ? (
            <ul className="flex flex-col gap-[16px] md:flex-row md:flex-wrap">
              {items.map(({ imageUrl, imageAlt, link }) => (
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
          ) : (
            <div className="flex flex-col items-center gap-[16px] md:flex-row md:flex-wrap">
              <div className="flex w-full justify-center py-8 text-center">
                <p className="w-full text-base/normal md:w-[453px] xl:w-[506px] xl:text-lg">
                  {notFoundDescr}
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
