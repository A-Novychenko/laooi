'use client';

import { useRef } from 'react';

import { NavEmbeddedLink } from '@/components/ui';

import { cn } from '@/utils/cn';

import { TooltipMenuProps } from './types';

import styles from './TooltipMenu.module.css';

export const TooltipMenu: React.FC<TooltipMenuProps> = ({ children, data }) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    if (
      document.activeElement &&
      menuRef.current?.contains(document.activeElement)
    ) {
      (document.activeElement as HTMLElement).blur();
    }
  };

  return (
    <>
      <div
        ref={menuRef}
        className={cn('relative', styles.menuWrap)}
        tabIndex={0}
      >
        <p
          className={cn(
            'flex items-center p-[10px] text-lg/[1.39] font-semibold transition-colors hover:text-textAccent focus:text-textAccent',
          )}
          onMouseDown={e => e.preventDefault()}
        >
          {children}
        </p>

        <ul
          className={cn(
            'absolute flex flex-col rounded-[24px] bg-bgLight p-4',
            styles.menuBox,
          )}
        >
          <NavEmbeddedLink data={data} handleClose={handleClose} />
        </ul>
      </div>
    </>
  );
};
