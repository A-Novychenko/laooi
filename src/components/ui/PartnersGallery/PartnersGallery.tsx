import { PartnersCard } from '@/components/ui';

import { PartnersGalleryProps } from './types';

import style from './PartnersGallery.module.css';

export const PartnersGallery: React.FC<PartnersGalleryProps> = ({ items }) => {
  return (
    <ul className="flex flex-col gap-[16px] md:flex-row md:flex-wrap">
      {items &&
        items.map(({ img, name, link }, idx) => (
          <li key={idx} className={style.card}>
            <PartnersCard img={img} name={name} link={link} />
          </li>
        ))}
    </ul>
  );
};
