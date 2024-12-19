import { cn } from '@/utils/cn';

import RequiredIcon from '~/icons/required.svg';

import { FormFieldProps } from './types';

export const FormField: React.FC<FormFieldProps> = ({
  type,
  name,
  label,
  errorText,
  register,
  placeholder,
}) => {
  const isError = true;

  return (
    <label className="flex h-[6.375rem] flex-col">
      <span className="mb-1 flex gap-1">
        <span className="text-base/normal font-semibold text-textSecondary">
          {label}
        </span>

        <RequiredIcon width={8} height={8} />
      </span>

      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          'mb-1 px-4 py-2 text-base/normal font-normal text-textPrimary placeholder:text-textActive',
          'h-14 rounded-[40px] bg-bgLight outline-bgLight',
        )}
        {...register(name as 'name' | 'email' | 'phone', {
          required: true,
          maxLength: 20,
        })}
      />

      {isError && (
        <span className="flex gap-1">
          <RequiredIcon width={8} height={8} />

          <span className="text-[0.625rem]/normal text-textRed">
            {errorText}
          </span>
        </span>
      )}
    </label>
  );
};
