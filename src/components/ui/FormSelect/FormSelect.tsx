'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import ArrowIcon from '~/icons/arrowDown.svg';
import RequiredIcon from '~/icons/required.svg';

import { CustomSelectProp, Option } from './types';

const FormSelect: React.FC<CustomSelectProp> = ({
  data,
  register,
  setValue,
  errors,
  trigger,
  required = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const selectRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();

  const { name, errorText, title, placeholder, options, description } = data;

  const isError = errors?.[name as keyof IContactsFormFields];

  const errorMessage = isError?.message || errorText;

  const handleSelect = (value: string) => {
    setSelectedType(value);
    setValue(name as 'appeal', value, { shouldValidate: true });
    trigger(name as 'appeal');
    setIsOpen(false);
  };

  const getSelectTitle = (selectOptions: Option[]): string => {
    const selectedOption = selectOptions.find(
      option => option.value === selectedType,
    );
    return selectedOption ? selectedOption.label : placeholder;
  };

  const getSelectDescription = (selectOptions: Option[]): string => {
    const selectedDescription = selectOptions.find(
      option => option.value === selectedType,
    );

    return selectedDescription ? selectedDescription.description : description;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const refParam = searchParams?.get('ref');

    console.log('first parameter', refParam);
    if (refParam && refParam === 'become-a-partner') {
      const partnerOption = options.find(option => option.value === 'partner');
      if (partnerOption) {
        setSelectedType(partnerOption.value);
        setValue(name as 'appeal', partnerOption.value, {
          shouldValidate: true,
        });
        trigger(name as 'appeal');
      }
    }
  }, [searchParams, options, setValue, trigger, name]);

  return (
    <div
      ref={selectRef}
      className="relative"
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

      <div
        className="group relative"
        tabIndex={0}
        // onBlur={() => setIsOpen(false)}
      >
        <div
          role="button"
          tabIndex={0}
          className="flex h-14 w-full cursor-pointer items-center justify-between rounded-full bg-bgLight px-4 py-2 text-base/normal font-normal transition-all hover:bg-bgSlate active:bg-textLight md:px-5 md:py-[17px] xl:px-6"
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
            className="absolute z-20 w-full rounded-3xl bg-textLight p-4 shadow-mobMenuHeader transition-all"
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
      <input
        type="hidden"
        aria-required={required ? true : false}
        aria-invalid={
          errors[name as keyof IContactsFormFields] ? 'true' : 'false'
        }
        {...register(name as 'appeal', {
          required: required ? errorMessage : false,
        })}
      />

      <p className="mt-2 text-base/normal xl:mt-4 xl:text-lg">
        {getSelectDescription(options)}
      </p>
    </div>
  );
};

export default FormSelect;
