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
      <section className="section bg-slate-200">
        <div className="container">
          <ContactsFormSection dict={dict} lang={lang} />
        </div>
      </section>
    </>
  );
};

export default ContactsPage;
