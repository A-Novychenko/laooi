import { UseFormRegister } from 'react-hook-form';

export type FormFieldProps = {
  label: string;
  errorText: string;
  type: string;
  name: string;
  register: UseFormRegister<IContactsFormFields>;
  placeholder: string;
};
