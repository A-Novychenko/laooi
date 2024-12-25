import Image from 'next/image';

import MarkerIcon from '~/icons/marker.svg';
import PhoneIcon from '~/icons/phone.svg';

import { AdvisorCardProps } from './types';

export const AdvisorCard: React.FC<AdvisorCardProps> = ({
  advisor: { photo, alt, name, city, phone },
}) => {
  return (
    <div className="flex h-full items-center gap-x-[8px] rounded-[24px] bg-bgLightSlate p-[16px] md:p-[24px] xl:gap-x-[16px]">
      <div className="size-[64px] shrink-0 overflow-hidden rounded-full md:size-[96px] xl:size-[120px]">
        <Image
          src={photo}
          alt={alt}
          width={120}
          height={120}
          className="size-full object-cover"
        />
      </div>

      <div>
        <p className="mb-2 text-lg/normal font-bold tracking-[-0.36px] text-textSecondary md:text-xl/normal md:tracking-[-0.4px] xl:text-2xl/normal xl:tracking-[-0.48px]">
          {name}
        </p>

        <p className="mb-2 flex items-center gap-1 text-xs/[1.67] text-textPrimary xl:text-sm/[1.43]">
          <MarkerIcon width={16} height={16} />
          {city}
        </p>

        <p className="flex items-center gap-1 text-xs/[1.67] text-textPrimary xl:text-sm/[1.43]">
          <PhoneIcon width={16} height={16} />
          {phone}
        </p>
      </div>
    </div>
  );
};
