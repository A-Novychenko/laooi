'use client';

import Link from 'next/link';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import { cn } from '@/utils/cn';

import { DropdownMenuProps } from './types';

import styles from './DropdownMenu.module.css';

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  dataForButtons,
  dataForLinks,
  menuPosition = 'bottom start',
}) => {
  return (
    <Menu>
      <MenuButton className="flex size-8 items-center justify-center rounded-[40px] bg-bgSlate data-[active]:bg-bgIconEyeDark data-[active]:text-textLight">
        {children}
      </MenuButton>
      <MenuItems
        anchor={menuPosition}
        className={cn('rounded-[24px] bg-bgLight p-4', `${styles.menuWrap}`)}
      >
        {dataForButtons &&
          dataForButtons.length > 0 &&
          dataForButtons.map(({ action, text, className }, idx) => (
            <MenuItem key={idx}>
              <button
                onClick={action}
                className={cn('data-[focus]:bg-blue-100', className)}
              >
                {text}
              </button>
            </MenuItem>
          ))}

        {dataForLinks &&
          dataForLinks.length > 0 &&
          dataForLinks.map(({ href, text, className }, idx) => (
            <MenuItem key={idx}>
              <Link href={href} className={className}>
                {text}
              </Link>
            </MenuItem>
          ))}
      </MenuItems>
    </Menu>
  );
};
