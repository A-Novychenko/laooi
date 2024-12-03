import Image from 'next/image';
import Link from 'next/link';

import { Title, PostLabel } from '@/components/ui';

import ArrowIcon from '~/icons/arrowBtnIcon.svg';

import { cn } from '@/utils/cn';

import { PostCardProps } from './types';

import styles from './PostCard.module.css';

export const PostCard: React.FC<PostCardProps> = ({ post, lang }) => {
  const { image, title, text, date, postUrl, linkTitle, type } = post;

  return (
    <Link
      href={`/${lang}/${postUrl}`}
      className={cn('block h-full rounded-[20px] bg-bgLightSlate', styles.link)}
    >
      <div className="relative h-[264px] w-full overflow-hidden rounded-2xl md:w-[336px] xl:w-[416px]">
        <PostLabel label={type}>{type}</PostLabel>

        <Image
          src={image}
          alt="sds"
          width={416}
          height={264}
          className="size-full object-cover"
        />
      </div>

      <div className="p-4">
        <Title
          tag={'h3'}
          style={'third'}
          className="mb-2 line-clamp-3 h-[4.75rem] leading-[1.35] md:h-[5.125rem] xl:h-[6.25rem]"
        >
          {title}
        </Title>
        <p className="mb-2 line-clamp-4 h-16 text-sm/normal font-semibold md:h-[4.75rem] md:text-sm/[1.35] xl:h-[5.875rem] xl:text-base">
          {text}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-xs/5 font-normal xl:text-sm">{date}</p>

          <p className="flex items-center justify-center gap-2 text-sm/normal font-semibold hover:text-bgAccentLight xl:text-base">
            {linkTitle}
            <ArrowIcon width={24} height={24} />
          </p>
        </div>
      </div>
    </Link>
  );
};
