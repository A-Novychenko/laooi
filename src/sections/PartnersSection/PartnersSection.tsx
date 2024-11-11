import { PartnersSliderWrap } from '@/components/base';
import { Title } from '@/components/ui';

export const PartnersSection: React.FC<ISectionProps> = ({ dict }) => {
  const {
    partnersSection: { title, partners },
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
