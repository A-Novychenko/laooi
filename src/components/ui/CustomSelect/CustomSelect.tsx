'use client';
import { useState } from 'react';

import ArrowIcon from '~/icons/arrowDown.svg';
import RequiredIcon from '~/icons/required.svg';

import { CustomSelectProp, Option } from './types';

export const CustomSelect: React.FC<CustomSelectProp> = ({
  data,
  register,
  setValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const { name, errorText, title, placeholder, options } = data;

  const isError = true;

  const handleSelect = (value: string) => {
    setSelectedType(value);
    setValue(name as 'appeal', value);
    setIsOpen(false);
  };

  const getSelectTitle = (selectOptions: Option[]): string => {
    const selectedOption = selectOptions.find(
      option => option.value === selectedType,
    );
    return selectedOption ? selectedOption.label : placeholder;
  };

  return (
    <div
      className="relative mb-2"
      role="combobox"
      aria-expanded={isOpen}
      aria-controls="type-options"
    >
      <span className="mb-1 flex gap-1">
        <span className="text-base/normal font-semibold text-textSecondary">
          {title}
        </span>
        <RequiredIcon width={8} height={8} />
      </span>
      <div className="group relative">
        <div
          role="button"
          tabIndex={0}
          className="flex w-full cursor-pointer justify-between rounded-full bg-bgLight px-4 py-2 text-base/normal font-normal transition-all hover:bg-bgSlate focus:bg-bgSlate md:px-5 md:py-[17px] xl:px-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p id="type-title">{getSelectTitle(options)}</p>
          <ArrowIcon
            width={24}
            height={24}
            className={`size-6 transition-all ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>

        {isOpen && (
          <ul
            id="type-options"
            role="listbox"
            aria-label="type-label"
            className="absolute z-20 w-full rounded-3xl bg-textLight p-4 transition-all"
          >
            {options.map(option => (
              <li key={option.value}>
                <button
                  className="w-full cursor-pointer rounded-2xl bg-bgLight p-4 text-left text-xs/normal font-semibold text-textPrimary outline-bgLight hover:bg-bgSlate xl:text-sm"
                  type="button"
                  role="option"
                  aria-label={option.label}
                  aria-selected={selectedType === option.value}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {isError && (
        <span className="mt-1 flex gap-1">
          <RequiredIcon width={8} height={8} />

          <span className="text-[0.625rem]/normal text-textRed">
            {errorText}
          </span>
        </span>
      )}
      <input type="hidden" {...register(name as 'appeal')} />
    </div>
  );
};
