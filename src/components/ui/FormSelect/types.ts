import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from 'react-hook-form';

export type CustomSelectProp = {
  data: {
    name: string;
    description: string;
    errorText: string;
    title: string;
    placeholder: string;
    options: Option[];
  };
  register: UseFormRegister<IContactsFormFields>;
  setValue: UseFormSetValue<IContactsFormFields>;
  label?: string;
  errors: FieldErrors<IContactsFormFields>;
  trigger: UseFormTrigger<IContactsFormFields>;
  required?: boolean;
};

export type Option = {
  label: string;
  value: string;
  description: string;
};
