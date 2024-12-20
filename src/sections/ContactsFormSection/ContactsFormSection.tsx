import { ContactsForm } from '@/components/base';

export const ContactsFormSection: React.FC<ISectionProps> = ({ dict }) => {
  const { contactsPage } = dict.common;

  return <ContactsForm data={contactsPage} />;
};
