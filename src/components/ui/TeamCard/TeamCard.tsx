import Image from 'next/image';
import Link from 'next/link';

import { ReadMoreBtn } from '../ReadMoreBtn';

import { TeamCardProps } from './types';

export const TeamCard: React.FC<TeamCardProps> = ({
  teamMember,
  readMoreLabel,
}) => {
  const { name, position, description, photo, alt, link } = teamMember;

  return (
    <li className="w-[416px]">
      <Image
        src={photo}
        alt={alt}
        width={200}
        height={200}
        className="shrink-0"
      />

      <p>{name}</p>
      <p>{position}</p>
      <p className="line-clamp-6">{description}</p>

      <Link href={link}>facebook</Link>

      <ReadMoreBtn readMoreLabel={readMoreLabel} />
    </li>
  );
};
