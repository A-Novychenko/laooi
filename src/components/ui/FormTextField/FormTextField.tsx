'use client';

import { useState } from 'react';

import RequiredIcon from '~/icons/required.svg';

import { FormTextFieldProps } from './types';

export const FormTextField: React.FC<FormTextFieldProps> = ({
  config,
  register,
  errors,
  trigger,
}) => {
  const [symbolsCount, setSymbolsCount] = useState(0);

  const { label, name: nameData, placeholder, validationOptions } = config;

  const required = validationOptions.required.value;
  const maxLength = validationOptions.maxLength?.value || 1024;
  const name = nameData as 'message';
  const isError = errors?.[name as keyof IContactsFormFields];
  const errorMessage = errors?.[name]?.message;

  return (
    <>
      <label htmlFor={name} className="mt-4 flex h-auto flex-col">
        <span className="mb-1 flex gap-1">
          <span className="text-base/normal font-semibold text-textSecondary">
            {label}
          </span>
          {required && <RequiredIcon width={8} height={8} />}
        </span>
      </label>

      <textarea
        id={name}
        aria-required={required ? true : false}
        aria-invalid={isError ? 'true' : 'false'}
        aria-describedby={isError ? `errorMessage${name}` : undefined}
        placeholder={placeholder}
        maxLength={maxLength}
        className="mb-1 h-[340px] resize-none rounded-2xl bg-textLight p-4 text-base/normal font-normal text-textPrimary outline-bgLight placeholder:text-textActive md:h-[194px] md:p-5 xl:h-[202px] xl:p-6"
        {...register(name as 'message', {
          ...validationOptions,
          onChange: e => {
            setSymbolsCount(e.target.value.length);
            trigger(name);
          },
          onBlur: () => {
            trigger(name);
          },
        })}
      />

      <div className="flex gap-1 text-[0.625rem]/normal font-normal md:text-xs/normal">
        {isError && (
          <span id={`errorMessage${name}`} className="flex gap-1 text-textRed">
            <RequiredIcon width={8} height={8} />
            {errorMessage}
          </span>
        )}

        <span className="ml-auto text-textActive">
          {symbolsCount}/{maxLength}
        </span>
      </div>
    </>
  );
};
