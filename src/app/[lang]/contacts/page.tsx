import { ContactsFormSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

const ContactsPage = async ({
  params: { lang },
}: {
  params: { lang: 'uk' | 'en' };
}) => {
  const dict = await getDictionary(lang);

  return (
    <>
      <ContactsFormSection dict={dict} lang={lang} />
    </>
  );
};

export default ContactsPage;
