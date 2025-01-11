import { Title } from '@/components/ui';
import { PartnersSliderWrap } from '@/components/base';

import { PartnersSectionProps } from './types';

export const PartnersSection: React.FC<PartnersSectionProps> = ({
  dict,
  partners,
}) => {
  const {
    partnersSection: { title },
  } = dict;

  return (
    <section className="section">
      <div className="container">
        <Title className="mb-4">{title}</Title>

        <PartnersSliderWrap data={partners} />
      </div>
    </section>
  );
};
