import { TargetCardProps } from './types';

export const TargetCard: React.FC<TargetCardProps> = ({ text }) => {
  return (
    <div className="flex h-[88px] items-center justify-center rounded-2xl bg-bgLightSlate px-4 py-6 md:h-[96px] md:rounded-[20px] xl:h-[108px] xl:rounded-3xl xl:py-8">
      <p className="text-center text-sm/normal font-semibold text-textPrimary xl:text-base/normal">
        {text}
      </p>
    </div>
  );
};
