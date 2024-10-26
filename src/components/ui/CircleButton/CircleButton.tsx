'use client';

import React from 'react';

import { CircleButtonProps } from './types';

export const CircleButton: React.FC<CircleButtonProps> = ({ children }) => {
  return (
    <button
      className="sm:flex sm:h-[44px] sm:w-[44px] sm:items-center sm:justify-center sm:rounded-full sm:bg-bgSlate sm:p-[8px_14px]"
      type="button"
    >
      {children}
    </button>
  );
};
