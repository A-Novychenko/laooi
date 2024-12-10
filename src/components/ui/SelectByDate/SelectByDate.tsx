'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import ArrowIcon from '~/icons/arrowDown.svg';

import { SortDate } from './types';
export const SelectByDate = () => {
  const [selectedSort, setSelectedSort] = useState<SortDate>('newest');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const sortUrl = searchParams.get('sort') as SortDate;
    setSelectedSort(sortUrl || 'newest');
  }, [searchParams]);

  const handleSelect = (type: SortDate) => {
    setSelectedSort(type);

    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', type);

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="relative w-full xl:min-w-[302px]" tabIndex={0}>
      <div className="group relative">
        <div className="flex w-full cursor-pointer justify-between rounded-full bg-bgLightSlate px-6 py-4 text-base/normal font-semibold focus-within:bg-bgSlate hover:bg-bgSlate xl:text-lg">
          <span>{selectedSort === 'newest' ? 'Новіші' : 'Старіші'}</span>
          <ArrowIcon
            width={24}
            height={24}
            className="transition-all group-hover:-rotate-180"
          />
        </div>
        {/* <select
          value={selectedSort}
          onChange={handleSortChange}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select> */}
        <ul className="absolute z-20 hidden w-full rounded-3xl bg-textLight p-4 group-focus-within:block group-hover:block">
          <li
            className="cursor-pointer rounded-2xl p-4 text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
            onClick={() => handleSelect('newest')}
          >
            Найновіші
          </li>
          <li
            className="cursor-pointer rounded-2xl p-4 text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
            onClick={() => handleSelect('oldest')}
          >
            Найстаріші
          </li>
        </ul>
      </div>
    </div>
  );
};
