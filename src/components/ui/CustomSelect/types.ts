import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

export type CustomSelectProp = {
  data: {
    name: string;
    errorText: string;
    title: string;
    placeholder: string;
    options: Option[];
  };
  register: UseFormRegister<IContactsFormFields>;
  setValue: UseFormSetValue<IContactsFormFields>;
  label?: string;
};

export type Option = {
  label: string;
  value: string;
};
