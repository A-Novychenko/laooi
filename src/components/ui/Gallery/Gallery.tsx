import Image from 'next/image';

import staticData from '@/data/common.json';

import { GalleryProps } from './types';

import styles from './Gallery.module.css';

export const Gallery: React.FC<GalleryProps> = ({ data }) => {
  const { poster, posterAlt } = staticData;

  return (
    <ul className="flex gap-4">
      {data &&
        data.map(({ img }) => (
          <li key={img.src} className={styles.card}>
            <Image
              src={img?.src ? img?.src : poster}
              alt={img?.alt ? img?.alt : posterAlt}
              width={288}
              height={288}
              className="size-full object-cover"
            />
          </li>
        ))}
    </ul>
  );
};
