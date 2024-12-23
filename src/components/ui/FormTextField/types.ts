import { FieldErrors, UseFormRegister, UseFormTrigger } from 'react-hook-form';

export type FormTextFieldProps = {
  config: IContactsPageInput;
  register: UseFormRegister<IContactsFormFields>;
  errors: FieldErrors<IContactsFormFields>;
  trigger: UseFormTrigger<IContactsFormFields>;
};
