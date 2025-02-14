import { ContactsFormSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

import makeMetaData from '@/data/meta';

export async function generateMetadata({
  params,
}: {
  params: { lang: 'uk' | 'en' };
}) {
  const lang = params.lang || 'uk';

  const meta = await makeMetaData(lang, 'contacts');

  return meta;
}

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
