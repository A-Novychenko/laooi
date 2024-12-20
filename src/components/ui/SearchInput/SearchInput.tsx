'use client';

import { useEffect, useRef, useState, ChangeEvent } from 'react';

import { Transition } from '@headlessui/react';

import { CircleButton } from '@/components/ui';

import { cn } from '@/utils/cn';

import SearchIcon from '~/icons/search.svg';
import CloseIcon from '~/icons/close.svg';

import { SearchInputProps } from './types';

import styles from './SearchInput.module.css';

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  desktop,
}) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {desktop ? (
        <div ref={wrapperRef} className="relative hidden xl:block">
          <CircleButton action={() => setOpen(open => !open)}>
            <SearchIcon width="16" height="16" />
          </CircleButton>

          <Transition show={open}>
            <div
              className={cn([
                'absolute -right-[76px] top-1/2 -translate-y-1/2 transition ease-in-out',
                'data-[closed]:opacity-0',
                'data-[enter]:data-[closed]:-translate-x-full data-[enter]:duration-100',
                'data-[leave]:data-[closed]:translate-x-full data-[leave]:duration-300',
              ])}
            >
              <input
                className={cn(
                  'h-[48px] w-[500px] rounded-[40px] border py-2 pl-10 pr-4 text-base/normal font-semibold outline-textFooterAccent placeholder:text-textSlate focus:border-transparent',
                  styles.input,
                )}
                type="search"
                name="header-search-input"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
              />

              <SearchIcon
                width="16"
                height="16"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-textPrimary"
              />

              {inputValue.length < 1 && (
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="absolute right-4 top-1/2 block -translate-y-1/2 border-none bg-transparent text-textPrimary"
                >
                  <CloseIcon width={16} height={16} />
                </button>
              )}
            </div>
          </Transition>
        </div>
      ) : (
        <div className="relative xl:hidden">
          <input
            className={cn(
              'h-[44px] w-full rounded-[40px] bg-bgLightSlate py-2 pl-10 pr-4 text-base/normal font-semibold text-textPrimary outline-textFooterAccent placeholder:text-textSlate md:h-[48px]',
              styles.input,
            )}
            type="search"
            name="header-search-input"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
          />

          <SearchIcon
            width="16"
            height="16"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-textPrimary"
          />
        </div>
      )}
    </>
  );
};
