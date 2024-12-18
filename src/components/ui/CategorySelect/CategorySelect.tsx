'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import ArrowIcon from '~/icons/arrowDown.svg';

import { CategorySelectProps, PostType } from './types';

export const CategorySelect: React.FC<CategorySelectProps> = ({
  selectPostByType,
}) => {
  const [selectedType, setSelectedType] = useState<PostType | ''>('');
  const [isOpen, setIsOpen] = useState(false);

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

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (
    type: PostType | '',
    evt: React.MouseEvent<HTMLButtonElement>,
  ) => {
    evt.currentTarget.blur();
    setSelectedType(type);
    handleMenuToggle();

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
      aria-expanded="true"
      aria-controls="type-options"
    >
      <div className="group relative">
        <div
          role="button"
          tabIndex={0}
          onClick={handleMenuToggle}
          className="flex w-full cursor-pointer justify-between rounded-full bg-bgLightSlate px-6 py-2.5 text-base/[1.5] font-semibold transition-all hover:bg-bgSlate focus:bg-bgSlate md:py-3 xl:py-4 xl:text-lg/[1.22]"
        >
          <p id="type-title">{getSelectTypeTitle(selectedType)}</p>

          <ArrowIcon
            width={24}
            height={24}
            className={`size-6 transition-all ${isOpen ? 'rotate-180 xl:rotate-0' : ''} xl:group-hover:-rotate-180`}
          />
        </div>

        <ul
          id="type-options"
          role="listbox"
          aria-label="type-label"
          className="absolute z-20 hidden w-full rounded-3xl bg-textLight p-4 transition-all xl:group-focus-within:block xl:group-hover:block"
        >
          <li key="all">
            <button
              className="w-full cursor-pointer rounded-2xl p-4 text-left text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
              type="button"
              role="option"
              aria-label="all"
              aria-selected={selectedType === ''}
              onClick={evt => handleSelect('', evt)}
            >
              {all}
            </button>
          </li>

          <li key="news">
            <button
              className="w-full cursor-pointer rounded-2xl p-4 text-left text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
              type="button"
              role="option"
              aria-label="news"
              onClick={evt => handleSelect('news', evt)}
              aria-selected={selectedType === 'news'}
            >
              {news}
            </button>
          </li>

          <li key="articles">
            <button
              className="w-full cursor-pointer rounded-2xl p-4 text-left text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
              type="button"
              role="option"
              aria-label="articles"
              aria-selected={selectedType === 'articles'}
              onClick={evt => handleSelect('articles', evt)}
            >
              {articles}
            </button>
          </li>

          <li key="events">
            <button
              className="w-full cursor-pointer rounded-2xl p-4 text-left text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
              type="button"
              role="option"
              aria-label="events"
              aria-selected={selectedType === 'events'}
              onClick={evt => handleSelect('events', evt)}
            >
              {events}
            </button>
          </li>
        </ul>
        {isOpen && (
          <ul
            id="type-options"
            role="listbox"
            aria-label="type-label"
            className="absolute z-20 w-full rounded-3xl bg-textLight p-4 transition-all xl:hidden"
          >
            <li key="all">
              <button
                className="w-full cursor-pointer rounded-2xl p-4 text-left text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
                type="button"
                role="option"
                aria-label="all"
                aria-selected={selectedType === ''}
                onClick={evt => handleSelect('', evt)}
              >
                {all}
              </button>
            </li>

            <li key="news">
              <button
                className="w-full cursor-pointer rounded-2xl p-4 text-left text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
                type="button"
                role="option"
                aria-label="news"
                onClick={evt => handleSelect('news', evt)}
                aria-selected={selectedType === 'news'}
              >
                {news}
              </button>
            </li>

            <li key="articles">
              <button
                className="w-full cursor-pointer rounded-2xl p-4 text-left text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
                type="button"
                role="option"
                aria-label="articles"
                aria-selected={selectedType === 'articles'}
                onClick={evt => handleSelect('articles', evt)}
              >
                {articles}
              </button>
            </li>

            <li key="events">
              <button
                className="w-full cursor-pointer rounded-2xl p-4 text-left text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
                type="button"
                role="option"
                aria-label="events"
                aria-selected={selectedType === 'events'}
                onClick={evt => handleSelect('events', evt)}
              >
                {events}
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
