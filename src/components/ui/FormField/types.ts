import { FieldErrors, UseFormRegister, UseFormTrigger } from 'react-hook-form';

export type FormFieldProps = {
  config: IContactsPageInput;
  register: UseFormRegister<IContactsFormFields>;
  errors: FieldErrors<IContactsFormFields>;
  trigger: UseFormTrigger<IContactsFormFields>;
};
