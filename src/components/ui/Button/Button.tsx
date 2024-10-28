import { ButtonProps } from './types';

import { cn } from '@/utils/cn';

import ArrowBtnIcon from '~/icons/arrowBtnIcon.svg';

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'primary',
  icon = true,
  className,
}) => {
  return (
    <button
      type="button"
      className={cn(
        'flex items-center justify-center gap-2 rounded-[32px] px-8 py-4 text-lg/normal font-bold transition-colors',
        type === 'primary' &&
          'bg-bgAccentDark text-textLight hover:bg-bgDark focus:bg-bgDark',
        type === 'secondary' &&
          'bg-bgAccentLight text-textLight hover:bg-bgDark focus:bg-bgDark',
        type === 'light' &&
          'bg-bgLightSlate text-textPrimary hover:bg-bgSlate focus:bg-bgSlate',
        className,
      )}
    >
      {children}

      {icon && <ArrowBtnIcon width={24} height={24} />}
    </button>
  );
};
