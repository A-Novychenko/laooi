'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import { cn } from '@/utils/cn';

import SearchIcon from '~/icons/search.svg';

import { GallerySearchInputProps } from './types';

import styles from './GallerySearchInput.module.css';

export const GallerySearchInput: React.FC<GallerySearchInputProps> = ({
  placeholder,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;

    setSearchQuery(query);

    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set('search', query);
    } else {
      params.delete('search');
    }

    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    if (searchQuery === '') {
      const params = new URLSearchParams(searchParams.toString());
      params.delete('search');
      router.push(`?${params.toString()}`);
    }
  }, [searchQuery, router, searchParams]);

  return (
    <div className="relative mb-2 md:mb-4 xl:mb-0">
      <input
        type="search"
        value={searchQuery}
        onChange={handleSearch}
        placeholder={placeholder}
        className={cn(
          'h-11 w-full rounded-[40px] border bg-textLight pl-12 pr-6 font-semibold outline-textActive placeholder:text-textSlate focus:border-transparent md:h-12 xl:h-14 xl:w-[644px] xl:pl-12 xl:pr-6 xl:text-sm/normal',
          styles.input,
        )}
      />

      <SearchIcon
        width={16}
        height={16}
        className="absolute left-6 top-1/2 size-4 -translate-y-1/2 text-textPrimary"
      />
    </div>
  );
};
