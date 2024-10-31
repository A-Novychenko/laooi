'use client';

import { Tooltip } from 'react-tooltip';

import { NavEmbeddedLink } from '@/components/ui';

import { cn } from '@/utils/cn';

import { TooltipMenuProps } from './types';

import styles from './TooltipMenu.module.css';

export const TooltipMenu: React.FC<TooltipMenuProps> = ({ children, data }) => {
  return (
    <>
      <a
        id="clickable"
        className="flex items-center p-[10px] text-lg font-semibold transition-colors hover:text-textAccent focus:text-textAccent"
      >
        {children}
      </a>

      <Tooltip
        anchorSelect="#clickable"
        clickable
        className={styles.tooltipCustom}
      >
        <ul
          className={cn(
            'flex flex-col rounded-[24px] bg-bgLight p-4',
            `${styles.menuWrap}`,
          )}
        >
          <NavEmbeddedLink data={data} />
        </ul>
      </Tooltip>
    </>
  );
};
