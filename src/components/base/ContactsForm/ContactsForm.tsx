'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { ToastContainer, toast, Bounce } from 'react-toastify';

import { ButtonLink, FormField, FormTextField, Loader } from '@/components/ui';

import { sendEmail } from '@/utils/sendEmail';
import { generateEmailHTML } from '@/utils/generateEmailHTML';

import staticData from '@/data/common.json';

import { ContactsFormProps } from './types';

const FormSelect = dynamic(
  () => import('@/components/ui/FormSelect/FormSelect'),
  {
    ssr: false,
  },
);

export const ContactsForm: React.FC<ContactsFormProps> = ({ data }) => {
  const {
    formLabel,
    submitBtnLabel,
    inputs,
    select,
    textArea,
    successSubmit,
    errorSubmit,
  } = data;

  const { subjectMailUser, subjectMailLaooi, contactsFormCasePlaceholder } =
    staticData;

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
    const isTypeRequest = select.options.find(({ value }) => value === appeal)
      ? select.options.find(({ value }) => value === appeal)
      : null;

    const typeRequest = isTypeRequest
      ? isTypeRequest.label
      : contactsFormCasePlaceholder;

    const mailDataLaooi = {
      subject: `${subjectMailLaooi} ${name}`,
      html: generateEmailHTML({
        recipient: 'laooi',
        name,
        email,
        phone,
        caseType: typeRequest,
        msg: message,
      }),
    };

    const mailDataUser = {
      subject: subjectMailUser,
      to: email,
      html: generateEmailHTML({
        recipient: 'user',
        name,
        email,
        phone,
        caseType: typeRequest,
        msg: message,
      }),
    };

    try {
      setPending(true);

      await Promise.all([
        await sendEmail(mailDataLaooi),
        await sendEmail(mailDataUser),
      ]);

      reset();

      window.sessionStorage.removeItem('contactForm');

      toast.success(successSubmit, {
        closeButton: false,
        className: 'toast-custom',
      });
    } catch (e) {
      console.log('e', e);

      toast.error(errorSubmit, {
        closeButton: false,
        className: 'toast-custom',
      });
    } finally {
      setPending(false);
    }
  };

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

          <Loader size={20} visible={pending} strokeWidth={1.5} color="#fff" />
        </ButtonLink>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};
