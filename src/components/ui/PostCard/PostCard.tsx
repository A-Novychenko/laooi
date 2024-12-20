// import Image from 'next/image';
// import Link from 'next/link';

// import { Title, PostLabel } from '@/components/ui';

// import ArrowIcon from '~/icons/arrowBtnIcon.svg';
// import NoImage from '~/no-image.svg';

// import { cn } from '@/utils/cn';

// import { PostCardProps } from './types';

// import styles from './PostCard.module.css';
// import { formatDate } from '@/utils/formatDate';

// export const PostCard: React.FC<PostCardProps> = ({
//   post,
//   lang,
//   readMoreLabel,
// }) => {
//   const { image, imageAlt, label, title, text, date, postUrl, type } = post;

//   const formattedDate = formatDate(date);

//   return (
//     <Link
//       href={`/${lang}/blog/${postUrl}`}
//       className={cn('block h-full rounded-[20px] bg-bgLightSlate', styles.link)}
//     >
//       <div className="relative h-[264px] w-full overflow-hidden rounded-2xl md:w-[336px] xl:w-[416px]">
//         <PostLabel type={type}>{label}</PostLabel>

//         {image ? (
//           <Image
//             src={image}
//             alt={imageAlt ? imageAlt : ''}
//             width={416}
//             height={264}
//             className="block size-full object-cover"
//           />
//         ) : (
//           <NoImage className="size-full object-cover text-textPrimary" />
//         )}
//       </div>

//       <div className="max-w-full p-4">
//         <Title
//           tag={'h3'}
//           style={'third'}
//           className="mb-2 line-clamp-3 h-[4.75rem] leading-[1.35] md:h-[5.125rem] xl:h-[6.25rem]"
//         >
//           {title}
//         </Title>

//         <p className="mb-2 line-clamp-4 h-16 text-sm/normal font-semibold md:h-[4.75rem] md:text-sm/[1.35] xl:h-[5.875rem] xl:text-base">
//           {text}
//         </p>

//         <div className="flex flex-wrap items-center justify-between gap-y-2">
//           <p className="text-xs/5 font-normal xl:text-sm">{formattedDate}</p>

//           <p className="flex items-center justify-center gap-2 text-sm/normal font-semibold hover:text-bgAccentLight xl:text-base">
//             {readMoreLabel}
//             <ArrowIcon width={24} height={24} />
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };
import Image from 'next/image';
import Link from 'next/link';

import { Title, PostLabel } from '@/components/ui';

import ArrowIcon from '~/icons/arrowBtnIcon.svg';
import NoImage from '~/no-image.svg';

import { cn } from '@/utils/cn';

import { PostCardProps } from './types';

import styles from './PostCard.module.css';
import { formatDate } from '@/utils/formatDate';

export const PostCard: React.FC<PostCardProps> = ({
  post,
  lang,
  readMoreLabel,
}) => {
  const { image, imageAlt, label, title, text, date, postUrl, type } = post;

  const formattedDate = formatDate(date);

  return (
    <Link
      href={`/${lang}/blog/${postUrl}`}
      className={cn('block h-full rounded-[20px] bg-bgLightSlate', styles.link)}
    >
      <div className="relative h-[264px] w-full overflow-hidden rounded-2xl md:w-[336px] xl:w-[416px]">
        <PostLabel type={type}>{label}</PostLabel>

        {image ? (
          <Image
            src={image}
            alt={imageAlt ? imageAlt : ''}
            width={416}
            height={264}
            className="block size-full object-cover"
          />
        ) : (
          <NoImage className="size-full object-cover text-textPrimary" />
        )}
      </div>

      <div className="max-w-full p-4">
        <div className="mb-2 h-36 md:h-[10.5rem] xl:h-52">
          <Title
            tag={'h3'}
            style={'third'}
            className="mb-2 line-clamp-3 leading-[1.35]"
          >
            {title}
          </Title>

          <p className="line-clamp-4 text-sm/normal font-semibold md:text-sm/[1.35] xl:text-base">
            {text}
          </p>
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
