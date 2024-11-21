import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/utils/cn';

import ArrowIcon from '~/icons/arrowBtnIcon.svg';

import { MediaCardProps } from './types';

import styles from './MediaCard.module.css';

export const MediaCard: React.FC<MediaCardProps> = ({ img, cardLink }) => {
  return (
    <Link
      href={cardLink.href}
      className={cn('relative overflow-hidden', styles.link)}
    >
      <div
        className={cn(
          'h-[288px] w-full overflow-hidden rounded-[16px]',
          'md:h-[219px] md:rounded-[20px]',
          'xl:h-[244px] xl:rounded-[24px]',
        )}
      >
        <Image
          src={img.src}
          alt={img.src}
          width={288}
          height={288}
          className="size-full object-cover transition-transform"
        />
      </div>

      <p
        className={cn(
          'absolute bottom-0 left-0 z-[9999] flex h-[64px] w-full items-center justify-between',
          'overflow-hidden rounded-b-[16px] px-4 text-base/normal text-textLight',
          'md:rounded-b-[20px]',
          'xl:rounded-b-[24px] xl:text-lg/normal',
          styles.overlay,
        )}
      >
        {cardLink.labelCardLink} <ArrowIcon width={24} height={24} />
      </p>
    </Link>
  );
};
