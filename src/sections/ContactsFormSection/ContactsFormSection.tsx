'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

import { ButtonLink, FormField } from '@/components/ui';

export const ContactsFormSection: React.FC<ISectionProps> = ({ dict }) => {
  const { inputs } = dict.common.contactsPage;

  const { register, handleSubmit } = useForm<IContactsFormFields>();

  const onSubmit: SubmitHandler<IContactsFormFields> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2.5">
      {inputs.map(({ name, type, label, errorText, placeholder }, idx) => (
        <FormField
          key={idx}
          type={type}
          name={name}
          label={label}
          errorText={errorText}
          register={register}
          placeholder={placeholder}
        />
      ))}

      <ButtonLink
        type="button"
        typeStyle="primary"
        settings={{ action: () => {}, type: 'submit' }}
      >
        Submit
      </ButtonLink>
    </form>
  );
};
