'use client';

import { useEffect, useRef, useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

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
  lang,
  searchPage,
  className,
  closeMenu,
}) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (inputValue.trim()) {
      const params = new URLSearchParams();
      params.set('searchQuery', inputValue.trim());

      router.push(`/${lang}/search?${params.toString()}`);

      setInputValue('');

      if (closeMenu) {
        closeMenu(false);
      }
    }
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
              <form onSubmit={handleSubmit}>
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
                  enterKeyHint="search"
                />
              </form>

              <button
                type="submit"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-textPrimary"
                onClick={handleSubmit}
                aria-label="search-button"
              >
                <SearchIcon width="16" height="16" />
              </button>

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
        <div className={`relative ${searchPage ? 'xl:block' : 'xl:hidden'}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={cn(
                'h-[44px] w-full rounded-[40px] bg-bgLightSlate py-2 pl-10 pr-4 text-base/normal font-semibold text-textPrimary outline-textFooterAccent placeholder:text-textSlate md:h-[48px]',
                styles.input,
                className,
              )}
              type="search"
              name="header-search-input"
              placeholder={placeholder}
              value={inputValue}
              onChange={handleInputChange}
              enterKeyHint="search"
            />
          </form>

          <button
            type="submit"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-textPrimary"
            onClick={handleSubmit}
          >
            <SearchIcon width="16" height="16" />
          </button>
        </div>
      )}
    </>
  );
};
