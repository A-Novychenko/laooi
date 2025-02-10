import Image from 'next/image';
import Link from 'next/link';

import { Title, PostLabel } from '@/components/ui';

import ArrowIcon from '~/icons/arrowBtnIcon.svg';
import NoImage from '~/no-image.svg';
import staticData from '@/data/common.json';

import { cn } from '@/utils/cn';
import { formatDate } from '@/utils/formatDate';

import { PostCardProps } from './types';

import styles from './PostCard.module.css';

export const PostCard: React.FC<PostCardProps> = ({
  post,
  lang,
  readMoreLabel,
  pageName,
  labelTitle,
}) => {
  const {
    image,
    imageAlt,
    label,
    title,
    text,
    date,
    type,
    deadline,
    slug,
    projectYear,
  } = post;

  const { poster, posterAlt } = staticData;

  const formattedDate = formatDate(date);

  const isDeadline = deadline ? new Date(deadline) < new Date() : false;

  return (
    <Link
      href={`/${lang}/${pageName}/${slug}`}
      className={cn('block h-full rounded-[20px] bg-bgLightSlate', styles.link)}
    >
      <div className="relative h-[264px] w-full overflow-hidden rounded-2xl md:w-[336px] xl:w-[416px]">
        <PostLabel type={type ?? isDeadline} deadline={projectYear}>
          {type && label}
          {deadline && `${labelTitle} ${formatDate(deadline)}`}
          {projectYear && projectYear}
        </PostLabel>

        {image ? (
          <Image
            src={image ? image : poster}
            alt={imageAlt ? imageAlt : posterAlt}
            width={416}
            height={264}
            className="block size-full object-cover"
          />
        ) : (
          <NoImage className="size-full object-cover text-textPrimary" />
        )}
      </div>

      <div className="max-w-full p-4">
        <div
          className={cn(
            'mb-2 h-36 md:h-[10.5rem] xl:h-52',
            text
              ? 'h-36 md:h-[10.5rem] xl:h-52'
              : 'h-[4.75rem] md:h-[5.125rem] xl:h-[6.25rem]',
          )}
        >
          <Title
            tag={'h3'}
            style={'third'}
            className="mb-2 line-clamp-3 leading-[1.35]"
          >
            {title}
          </Title>

          {text && (
            <p className="line-clamp-4 text-sm/normal font-semibold md:text-sm/[1.35] xl:text-base">
              {text}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-y-2">
          <p className="text-xs/5 font-normal xl:text-sm">{formattedDate}</p>

          <p className="flex items-center justify-center gap-2 text-sm/normal font-semibold hover:text-bgAccentLight xl:text-base">
            {readMoreLabel}
            <ArrowIcon width={24} height={24} />
          </p>
        </div>
      </div>
    </Link>
  );
};
