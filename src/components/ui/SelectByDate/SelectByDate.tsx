'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import ArrowIcon from '~/icons/arrowDown.svg';

import { SelectByDateProps, SortDate } from './types';

export const SelectByDate: React.FC<SelectByDateProps> = ({
  selectSortByDate,
}) => {
  const [selectedSort, setSelectedSort] = useState<SortDate | ''>('');
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    title,
    options: { old: oldTitleOption, new: newTitleOption },
  } = selectSortByDate;

  useEffect(() => {
    const sortUrl = searchParams.get('sort') as SortDate;
    setSelectedSort(sortUrl || '');
  }, [searchParams]);

  const handleSelect = (
    type: SortDate,
    evt: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setSelectedSort(type);
    handleMenuToggle();

    evt.currentTarget.blur();

    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', type);

    router.push(`?${params.toString()}`);
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const getSortTitle = (selectedSort: string) => {
    switch (selectedSort) {
      case 'newest':
        return newTitleOption;
      case 'oldest':
        return oldTitleOption;
      default:
        return title;
    }
  };

  return (
    <div
      className="relative w-full xl:min-w-[302px]"
      role="combobox"
      aria-expanded="true"
      aria-controls="type-options"
    >
      <div className="group relative">
        <div
          role="button"
          tabIndex={0}
          onClick={handleMenuToggle}
          className="flex w-full cursor-pointer justify-between rounded-full bg-bgLightSlate px-[24px] py-2.5 text-base/[1.5] font-semibold md:py-3 xl:w-[302px] xl:py-4 xl:text-lg/[1.22] xl:focus-within:bg-bgSlate xl:hover:bg-bgSlate"
        >
          <p id="sort-title">{getSortTitle(selectedSort)}</p>

          <ArrowIcon
            width={24}
            height={24}
            className={`size-6 transition-all ${isOpen ? 'rotate-180 xl:rotate-0' : ''} xl:group-hover:-rotate-180`}
          />
        </div>

        <ul
          id="sort-options"
          role="listbox"
          aria-label="sort-label"
          className="absolute z-20 hidden w-full rounded-3xl bg-textLight p-4 xl:group-focus-within:block xl:group-hover:block"
        >
          <li key="newest">
            <button
              className="w-full cursor-pointer rounded-2xl p-4 text-left text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
              onClick={evt => handleSelect('newest', evt)}
              type="button"
              role="option"
              aria-label="newest"
              aria-selected={selectedSort === 'newest'}
            >
              {newTitleOption}
            </button>
          </li>

          <li key="oldest">
            <button
              className="w-full cursor-pointer rounded-2xl p-4 text-left text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
              onClick={evt => handleSelect('oldest', evt)}
              type="button"
              role="option"
              aria-label="oldest"
              aria-selected={selectedSort === 'oldest'}
            >
              {oldTitleOption}
            </button>
          </li>
        </ul>

        {isOpen && (
          <ul
            id="sort-options"
            role="listbox"
            aria-label="sort-label"
            className="absolute z-20 w-full rounded-3xl bg-textLight p-4 xl:hidden"
          >
            <li key="newest">
              <button
                className="w-full cursor-pointer rounded-2xl p-4 text-left text-xs/normal font-semibold hover:bg-bgSlate"
                onClick={evt => handleSelect('newest', evt)}
                type="button"
                role="option"
                aria-label="newest"
                aria-selected={selectedSort === 'newest'}
              >
                {newTitleOption}
              </button>
            </li>

            <li key="oldest">
              <button
                className="w-full cursor-pointer rounded-2xl p-4 text-left text-xs/normal font-semibold hover:bg-bgSlate"
                onClick={evt => handleSelect('oldest', evt)}
                type="button"
                role="option"
                aria-label="oldest"
                aria-selected={selectedSort === 'oldest'}
              >
                {oldTitleOption}
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
