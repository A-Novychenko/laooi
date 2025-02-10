import Image from 'next/image';

import { Title } from '@/components/ui';
import { ContactsForm, ContactSocials } from '@/components/base';

import bigLogo from '~/images/bigLogo.png';

export const ContactsFormSection: React.FC<ISectionProps> = ({ dict }) => {
  const { contactsPage, socialLinks, socialListTitle, logoAlt } = dict.common;

  return (
    <section className="section">
      <div className="container">
        <Title tag="h1" className="mb-4">
          {contactsPage.title}
        </Title>

        <div className="flex flex-col gap-[16px] xl:flex-row">
          <ContactsForm data={contactsPage} />

          <div className="flex flex-col gap-[16px]">
            <ContactSocials links={socialLinks} title={socialListTitle} />

            <div className="shrink-0 xl:flex xl:w-[524px] xl:grow xl:items-center">
              <Image
                src={bigLogo}
                width={688}
                height={684}
                alt={logoAlt}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
