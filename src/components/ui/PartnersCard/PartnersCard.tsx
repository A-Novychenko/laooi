import Image from 'next/image';

import { PartnersCardProps } from './types';

export const PartnersCard: React.FC<PartnersCardProps> = ({ img, name }) => {
  return (
    <div className="flex h-[112px] items-center justify-center gap-4 rounded-2xl bg-bgLightSlate p-4 md:h-[128px] md:gap-2 md:rounded-[20px] md:px-6 xl:h-[152px] xl:gap-4 xl:rounded-3xl">
      <div className="size-[64px] shrink-0 md:size-[96px] xl:size-[120px]">
        <Image
          src={img}
          alt={name}
          width={120}
          height={120}
          className="size-full object-cover"
        />
      </div>

      <p className="text-sm/normal font-semibold text-textPrimary xl:text-base/normal">
        {name}
      </p>
    </div>
  );
};
