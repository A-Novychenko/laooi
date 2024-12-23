'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import {
  ButtonLink,
  FormSelect,
  FormField,
  FormTextField,
} from '@/components/ui';

import { sendEmail } from '@/utils/sendEmail';

import { ContactsFormProps } from './types';

export const ContactsForm: React.FC<ContactsFormProps> = ({ data }) => {
  const { inputs, select, textArea } = data;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<IContactsFormFields>();

  useFormPersist('contactForm', { watch, setValue });

  const onSubmit: SubmitHandler<IContactsFormFields> = async data => {
    console.log(data);

    const mailData = {
      subject: `Request from ${data.name}`,
      text: `Name:${data.name} Email: ${data.email} Phone: ${data.phone}`,
    };

    try {
      await sendEmail(mailData);

      reset();

      window.sessionStorage.removeItem('contactForm');
    } catch (e) {
      console.log('e', e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-2.5 md:gap-y-2"
    >
      <div className="gap-y-2 md:flex md:flex-wrap md:gap-x-[16px]">
        {inputs.map((inputConfig, idx) => (
          <FormField
            key={idx}
            register={register}
            errors={errors}
            trigger={trigger}
            config={inputConfig}
          />
        ))}
      </div>

      <FormSelect
        data={select}
        register={register}
        setValue={setValue}
        trigger={trigger}
        errors={errors}
      />

      <FormTextField
        config={textArea}
        register={register}
        errors={errors}
        trigger={trigger}
      />

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
