import { MCounter } from '@/components/animation';

import { cn } from '@/utils/cn';
import { formatNumber } from '@/utils/formatNumber';

import { ActivitiesCardProps } from './types';

export const ActivitiesCard: React.FC<ActivitiesCardProps> = ({
  quantity,
  text,
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl bg-bgLightSlate p-[16px] md:max-w-[336px] md:rounded-[20px] md:p-[24px] xl:max-w-[308px]',
      )}
    >
      <p className="mb-2 text-[30px]/[1.27] font-bold text-textMenuAccent md:text-[32px]/[1.13] xl:text-[36px]/normal">
        <span className="hidden xl:inline">
          <MCounter value={quantity} />
        </span>

        <span className="xl:hidden">{formatNumber(quantity)}</span>
      </p>

      <p className="line-clamp-5 text-sm/normal font-semibold md:h-16 xl:h-24 xl:text-base/normal">
        {text}
      </p>
    </div>
  );
};
