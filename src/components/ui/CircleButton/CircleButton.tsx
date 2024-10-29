'use client';

import { CircleButtonProps } from './types';

export const CircleButton: React.FC<CircleButtonProps> = ({
  children,
  action,
}) => {
  return (
    <button
      className="flex size-11 items-center justify-center rounded-full bg-bgSlate p-2"
      type="button"
      onClick={action}
    >
      {children}
    </button>
  );
};
