'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import {
  ButtonLink,
  FormSelect,
  FormField,
  FormTextField,
  Loader,
} from '@/components/ui';

import { sendEmail } from '@/utils/sendEmail';
import { generateEmailHTML } from '@/utils/generateEmailHTML';

import { ContactsFormProps } from './types';
import { useState } from 'react';

export const ContactsForm: React.FC<ContactsFormProps> = ({ data }) => {
  const { formLabel, submitBtnLabel, inputs, select, textArea } = data;

  const [pending, setPending] = useState<boolean>(false);

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

  const onSubmit: SubmitHandler<IContactsFormFields> = async ({
    name,
    email,
    phone,
    appeal,
    message,
  }) => {
    const mailData = {
      subject: `Request from ${name}`,
      html: generateEmailHTML({
        name,
        email,
        phone,
        caseType: appeal,
        msg: message,
      }),
    };

    try {
      setPending(true);

      await sendEmail(mailData);

      reset();

      window.sessionStorage.removeItem('contactForm');
    } catch (e) {
      console.log('e', e);
    } finally {
      setPending(false);
    }
  };
  console.log('errors', errors);

  return (
    <div className="rounded-2xl bg-bgLightSlate px-[16px] py-6 md:rounded-[20px] md:p-[32px] xl:rounded-3xl xl:p-[40px]">
      <p className="mb-4 text-base/normal text-textPrimary xl:mb-6 xl:text-lg/normal">
        {formLabel}
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2.5 md:gap-y-2"
      >
        <div className="gap-y-2 md:flex md:flex-wrap md:gap-x-[16px] xl:gap-y-4">
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
          disabled={Object.keys(errors).length > 0 || pending}
          icon={false}
        >
          {submitBtnLabel}
          <Loader size={20} visible={pending} />
        </ButtonLink>
      </form>
    </div>
  );
};
