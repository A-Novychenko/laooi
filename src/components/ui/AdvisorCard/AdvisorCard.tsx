import Image from 'next/image';

import { cn } from '@/utils/cn';

import MarkerIcon from '~/icons/marker.svg';
import PhoneIcon from '~/icons/phone.svg';

import { AdvisorCardProps } from './types';

import styles from './AdvisorCard.module.css';

export const AdvisorCard: React.FC<AdvisorCardProps> = ({
  advisor: { photo, alt, name, city, phone },
}) => {
  return (
    <div className="flex h-full items-center gap-x-[8px] rounded-[24px] bg-bgLightSlate p-[16px] md:p-[24px] xl:gap-x-[16px]">
      <div className="size-[64px] shrink-0 overflow-hidden rounded-full md:size-[96px] xl:size-[120px]">
        <Image
          src={photo}
          alt={alt}
          width={96}
          height={96}
          className="size-full object-cover"
        />
      </div>

      <div>
        <p
          className={cn(
            'mb-2 text-lg/normal font-bold tracking-[-0.36px] text-textSecondary md:text-xl/normal md:tracking-[-0.4px] xl:text-2xl/normal xl:tracking-[-0.48px]',
            styles.wordRTransfer,
          )}
        >
          {name}
        </p>

        <p className="mb-2 flex items-center gap-1 text-xs/[1.67] text-textPrimary xl:text-sm/[1.43]">
          <MarkerIcon width={16} height={16} />
          {city}
        </p>

        <p className="flex items-center gap-1 text-xs/[1.67] text-textPrimary xl:text-sm/[1.43]">
          <PhoneIcon
            width={16}
            height={16}
            className="size-4 shrink-0 self-start pt-1"
          />
          {phone}
        </p>
      </div>
    </div>
  );
};
