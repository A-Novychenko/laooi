import Image from 'next/image';
import Link from 'next/link';

import ArrowIcon from '~/icons/arrowBtnIcon.svg';

export const MediaCard: React.FC = () => {
  return (
    <Link href={''} className="relative">
      <div className="h-[288px] w-full">
        <Image
          src={'/'}
          alt={''}
          width={288}
          height={288}
          className="size-full object-cover"
        />
      </div>

      <p className="absolute bottom-0 left-0 flex justify-between">
        {'text'} <ArrowIcon width={32} height={32} />
      </p>
    </Link>
  );
};
