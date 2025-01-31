import { PartnersGallery, Title } from '@/components/ui';

import { PartnersSectionProps } from './types';

export const PartnersSection: React.FC<PartnersSectionProps> = ({
  dict,
  partners,
}) => {
  const { title } = dict.partnersSection;
  return (
    <section className="section xl:pb-32">
      <div className="container">
        <Title className="mb-4">{title}</Title>

        <PartnersGallery items={partners} />
      </div>
    </section>
  );
};
