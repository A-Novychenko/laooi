import Link from 'next/link';
import Image from 'next/image';

import staticData from '@/data/common.json';

import { PartnersCardProps } from './types';

export const PartnersCard: React.FC<PartnersCardProps> = ({
  img,
  name,
  link,
}) => {
  const { poster, posterAlt } = staticData;

  return (
    <Link target="_blank" rel="noopener noreferrer" href={link}>
      <div className="flex h-[112px] items-center justify-start gap-4 rounded-2xl bg-bgLightSlate p-4 md:h-[128px] md:gap-2 md:rounded-[20px] md:px-6 xl:h-[152px] xl:gap-4 xl:rounded-3xl">
        <div className="size-[64px] shrink-0 overflow-hidden rounded-full md:size-[96px] xl:size-[120px]">
          <Image
            src={img ? `${img} logo` : `Company ${poster}`}
            alt={name ? name : posterAlt}
            width={120}
            height={120}
            className="size-full object-cover"
          />
        </div>

        <p className="text-sm/normal font-semibold text-textPrimary xl:text-base/normal">
          {name}
        </p>
      </div>
    </Link>
  );
};
