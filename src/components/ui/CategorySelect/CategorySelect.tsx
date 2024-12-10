'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import ArrowIcon from '~/icons/arrowDown.svg';

import { CategorySelectProps, PostType } from './types';

export const CategorySelect: React.FC<CategorySelectProps> = ({
  selectPostByType,
}) => {
  const [selectedType, setSelectedType] = useState<PostType | ''>('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    title,
    options: { news, articles, events, all },
  } = selectPostByType;

  useEffect(() => {
    const typeUrl = searchParams.get('type') as PostType;
    setSelectedType(typeUrl || '');
  }, [searchParams]);

  const handleSelect = (
    type: PostType | '',
    evt: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setSelectedType(type);

    evt.currentTarget.blur();

    const params = new URLSearchParams(searchParams.toString());
    if (type) {
      params.set('type', type);
    } else {
      params.delete('type');
    }

    router.push(`?${params.toString()}`);
  };

  const getSelectTypeTitle = (type: string) => {
    switch (type) {
      case 'articles':
        return articles;
      case 'events':
        return events;
      case 'news':
        return news;
      case 'all':
        return all;
      default:
        return title;
    }
  };

  return (
    <div
      className="relative mb-2 md:mb-0 md:min-w-[336px] xl:min-w-[302px]"
      role="combobox"
    >
      <div className="group relative">
        <div
          role="button"
          tabIndex={0}
          className="flex w-full cursor-pointer justify-between rounded-full bg-bgLightSlate px-6 py-4 text-base/normal font-semibold transition-all hover:bg-bgSlate focus:bg-bgSlate xl:text-lg"
        >
          <p id="type-title">{getSelectTypeTitle(selectedType)}</p>
          <ArrowIcon
            width={24}
            height={24}
            className="transition-all group-hover:-rotate-180"
          />
        </div>

        <ul
          id="type-options"
          role="listbox"
          aria-label="type-label"
          className="absolute z-20 hidden w-full rounded-3xl bg-textLight p-4 transition-all group-focus-within:block group-hover:block"
        >
          <li>
            <button
              className="w-full cursor-pointer rounded-2xl p-4 text-left text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
              type="button"
              role="option"
              aria-label="all"
              onClick={evt => handleSelect('', evt)}
            >
              {all}
            </button>
          </li>
          <li>
            <button
              className="w-full cursor-pointer rounded-2xl p-4 text-left text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
              type="button"
              role="option"
              aria-label="news"
              onClick={evt => handleSelect('news', evt)}
            >
              {news}
            </button>
          </li>
          <li>
            <button
              className="w-full cursor-pointer rounded-2xl p-4 text-left text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
              type="button"
              role="option"
              aria-label="articles"
              onClick={evt => handleSelect('articles', evt)}
            >
              {articles}
            </button>
          </li>
          <li>
            <button
              className="w-full cursor-pointer rounded-2xl p-4 text-left text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
              type="button"
              role="option"
              aria-label="events"
              onClick={evt => handleSelect('events', evt)}
            >
              {events}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
