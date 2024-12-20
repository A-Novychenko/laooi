import { cn } from '@/utils/cn';

import RequiredIcon from '~/icons/required.svg';

import { FormFieldProps } from './types';

export const FormField: React.FC<FormFieldProps> = ({
  config,
  register,
  errors,
  trigger,
}) => {
  const {
    type,
    label,
    name: nameData,
    placeholder,
    validationOptions,
  } = config;

  const required = validationOptions.required.value;
  const name = nameData as 'name' | 'email' | 'phone';
  const isError = errors?.[name as keyof IContactsFormFields];
  const errorMessage = errors?.[name]?.message;

  return (
    <label className="flex h-[6.375rem] flex-col">
      <span className="mb-1 flex gap-1">
        <span className="text-base/normal font-semibold text-textSecondary">
          {label}
        </span>

        <RequiredIcon width={8} height={8} />
      </span>

      <input
        aria-required={required ? true : false}
        aria-invalid={
          errors[name as keyof IContactsFormFields] ? 'true' : 'false'
        }
        aria-describedby={
          errors[name as keyof IContactsFormFields]
            ? `errorMessage${name}`
            : undefined
        }
        type={type}
        placeholder={placeholder}
        className={cn(
          'mb-1 px-4 py-2 text-base/normal font-normal text-textPrimary placeholder:text-textActive',
          'h-14 rounded-[40px] bg-bgLight outline-bgLight',
        )}
        {...register(name as 'name' | 'email' | 'phone', {
          ...validationOptions,
          required,
          onChange: () => {
            trigger(name);
          },
          onBlur: () => {
            trigger(name);
          },
          pattern: {
            value: validationOptions?.pattern
              ? new RegExp(validationOptions.pattern.value)
              : new RegExp(''),
            message: validationOptions?.pattern
              ? validationOptions?.pattern?.message
              : '',
          },
        })}
      />

      {isError && errorMessage && (
        <span className="flex gap-1">
          <RequiredIcon width={8} height={8} />

          <span className="text-[0.625rem]/normal text-textRed">
            {errorMessage}
          </span>
        </span>
      )}
    </label>
  );
};
