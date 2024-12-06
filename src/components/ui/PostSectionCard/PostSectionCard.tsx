import Image from 'next/image';
import { PostSectionCardProps } from './types';

export const PostSectionCard: React.FC<PostSectionCardProps> = ({ image }) => {
  console.log('POST IMAGE', image);
  return (
    <>
      <Image
        src={image.src}
        alt={image.alt}
        width={632}
        height={632}
        className="object-cover"
      />
    </>
  );
};
