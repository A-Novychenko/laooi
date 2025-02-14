'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import ArrowIcon from '~/icons/arrowDown.svg';

import { CategorySelectProps } from './types';

export const PostCardCategorySelect: React.FC<CategorySelectProps> = ({
  selectPostByType,
  queryKey,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | ''>('');
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const { options, title } = selectPostByType;

  useEffect(() => {
    const valueFromUrl = searchParams.get(queryKey) || '';
    setSelectedValue(valueFromUrl);
  }, [searchParams, queryKey]);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (
    value: string | '',
    evt: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setSelectedValue(value);

    handleMenuToggle();

    evt.currentTarget.blur();

    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(queryKey, value);
    } else {
      params.delete(queryKey);
    }

    router.push(`?${params.toString()}`);
  };

  const getSelectedLabel = () => {
    const selectedOption = options.find(
      option => option.value === selectedValue,
    );

    return selectedOption ? selectedOption.label : title;
  };

  return (
    <div
      className="relative mb-2 md:mb-0 md:min-w-[336px] xl:min-w-[302px]"
      role="combobox"
      aria-expanded={isOpen}
      aria-controls={
        isOpen ? 'category-options-mobile' : 'category-options-desktop'
      }
      aria-labelledby="sort-title"
    >
      <div className="group relative">
        <div
          role="button"
          tabIndex={0}
          onClick={handleMenuToggle}
          className="flex w-full cursor-pointer justify-between rounded-full bg-bgLightSlate px-[24px] py-2.5 text-base/[1.5] font-semibold md:py-3 xl:whitespace-nowrap xl:py-4 xl:text-lg/[1.22] xl:focus-within:bg-bgSlate xl:hover:bg-bgSlate"
        >
          <p
            id={`sort-title-${selectedValue}`}
            className="line-clamp-1 overflow-hidden md:max-w-[336px] xl:max-w-[220px]"
          >
            {getSelectedLabel()}
          </p>

          <ArrowIcon
            width={24}
            height={24}
            className={`size-6 transition-all ${isOpen ? 'rotate-180 xl:rotate-0' : ''} xl:group-hover:-rotate-180`}
          />
        </div>

        <ul
          id="category-options-desktop"
          role="listbox"
          className="absolute z-20 hidden max-h-[50vh] w-full overflow-y-auto rounded-3xl bg-textLight p-4 transition-all xl:group-focus-within:block xl:group-hover:block"
        >
          {options.map((option, index) => (
            <li key={`${option.value}-${index}`}>
              <button
                className="w-full cursor-pointer rounded-2xl p-4 text-left text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
                type="button"
                role="option"
                aria-labelledby={`label-${option.value}`}
                aria-selected={selectedValue === option.value}
                onClick={evt => handleSelect(option.value, evt)}
              >
                <span id={`label-${option.value}`}>{option.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {isOpen && (
          <ul
            id="category-options-mobile"
            role="listbox"
            aria-labelledby="sort-title"
            className="absolute z-20 max-h-[50vh] w-full overflow-y-auto rounded-3xl bg-textLight p-4 transition-all xl:hidden"
          >
            {options.map((option, index) => (
              <li key={`${option.value}-mobile-${index}`}>
                <button
                  className="w-full cursor-pointer rounded-2xl p-4 text-left text-xs/normal font-semibold hover:bg-bgSlate xl:text-sm"
                  type="button"
                  role="option"
                  aria-labelledby={`label-mobile-${option.value}`}
                  aria-selected={selectedValue === option.value}
                  onClick={evt => handleSelect(option.value, evt)}
                >
                  <span id={`label-mobile-${option.value}`}>
                    {option.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
