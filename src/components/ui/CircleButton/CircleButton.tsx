'use client';

import { cn } from '@/utils/cn';

import { CircleButtonProps } from './types';

export const CircleButton: React.FC<CircleButtonProps> = ({
  children,
  action,
  className,
}) => {
  return (
    <button
      className={cn(
        'flex size-11 items-center justify-center rounded-full bg-bgSlate p-2 transition-colors hover:bg-bgDarkSlate focus:bg-bgDarkSlate',
        className,
      )}
      type="button"
      onClick={action}
    >
      {children}
    </button>
  );
};
