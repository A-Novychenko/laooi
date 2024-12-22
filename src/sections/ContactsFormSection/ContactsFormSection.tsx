import { ContactsForm, ContactSocials } from '@/components/base';

export const ContactsFormSection: React.FC<ISectionProps> = ({ dict }) => {
  const { contactsPage, socialLinks, socialListTitle } = dict.common;

  return (
    <section>
      <div className="flex flex-col gap-4 xl:flex-row">
        <ContactsForm data={contactsPage} />

        <ContactSocials links={socialLinks} title={socialListTitle} />
      </div>
    </section>
  );
};
