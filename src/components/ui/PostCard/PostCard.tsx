import Image from 'next/image';
import Link from 'next/link';

import { Title } from '../Title';

import ArrowIcon from '~/icons/arrowBtnIcon.svg';

import { PostCardProps } from './types';

export const PostCard: React.FC<PostCardProps> = ({ post, lang }) => {
  const { image, title, text, date, newsUrl, linkTitle } = post;
  return (
    <div className="rounded-[20px] bg-bgLightSlate">
      <div className="h-[264px] w-full overflow-hidden rounded-2xl md:w-[336px] xl:w-[416px]">
        <Image
          src={image}
          alt="sds"
          width={416}
          height={264}
          className="size-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <Title tag={'h3'} style={'third'}>
          {title}
        </Title>
        {/* <div className="w-64 truncate md:w-72 xl:w-[368px]"> */}
        <p className="line-clamp-4 max-h-[76px] text-sm/normal font-semibold xl:text-base">
          {text}
        </p>
        {/* </div> */}
        <div className="flex items-center justify-between">
          <p className="text-xs/5 font-normal xl:text-sm">{date}</p>

          <Link
            href={`/${lang}/${newsUrl}`}
            className="flex items-center justify-center gap-2 text-sm/normal font-semibold xl:text-base"
          >
            {linkTitle}
            <ArrowIcon width={24} height={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};
