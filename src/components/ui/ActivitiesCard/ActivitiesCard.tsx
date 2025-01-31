import { cn } from '@/utils/cn';

import { MCounter } from '@/components/animation';

import { ActivitiesCardProps } from './types';

export const ActivitiesCard: React.FC<ActivitiesCardProps> = ({
  quantity,
  text,
}) => {
  return (
    <div
      className={cn('rounded-2xl bg-bgLightSlate p-4 md:rounded-[20px] md:p-6')}
    >
      <p className="mb-2 text-[30px]/[1.27] font-bold text-textMenuAccent md:text-[32px]/[1.13] xl:text-[36px]/normal">
        <MCounter value={quantity} />
      </p>

      <p className="line-clamp-3 text-sm/normal font-semibold md:h-12 xl:h-14 xl:text-base/normal">
        {text}
      </p>
    </div>
  );
};
