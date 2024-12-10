'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import ArrowIcon from '~/icons/arrowDown.svg';

import { PostType } from './types';

export const CategorySelect = () => {
  const [selectedType, setSelectedType] = useState<PostType | ''>('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const typeUrl = searchParams.get('type') as PostType;
    setSelectedType(typeUrl || '');
  }, [searchParams]);

  const handleSelect = (type: PostType | '') => {
    setSelectedType(type);

    const params = new URLSearchParams(searchParams.toString());
    if (type) {
      params.set('type', type);
    } else {
      params.delete('type');
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="relative xl:min-w-[302px]" tabIndex={0}>
      <div className="group relative">
        <div className="flex w-full cursor-pointer justify-between rounded-full bg-bgLightSlate px-6 py-4 text-base/normal font-semibold hover:bg-bgSlate focus:bg-bgSlate xl:text-lg">
          {selectedType
            ? selectedType === 'news'
              ? 'Новини'
              : selectedType === 'articles'
                ? 'Статті'
                : 'Події'
            : 'Тип контенту'}
          <ArrowIcon
            width={24}
            height={24}
            className="transition-all group-hover:-rotate-180"
          />
        </div>

        <ul className="absolute z-20 hidden w-full rounded-3xl bg-textLight p-4 group-focus-within:block group-hover:block">
          <li
            className="cursor-pointer rounded-2xl p-4 text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
            onClick={() => handleSelect('')}
          >
            Усі
          </li>
          <li
            className="cursor-pointer rounded-2xl p-4 text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
            onClick={() => handleSelect('news')}
          >
            Новини
          </li>
          <li
            className="cursor-pointer rounded-2xl p-4 text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
            onClick={() => handleSelect('articles')}
          >
            Статті
          </li>
          <li
            className="cursor-pointer rounded-2xl p-4 text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
            onClick={() => handleSelect('events')}
          >
            Події
          </li>
        </ul>
      </div>
    </div>
  );
};
