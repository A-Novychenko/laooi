import imageUrlBuilder from '@sanity/image-url';

import { sanityClient } from '@/sanity/lib/client';

const builder = imageUrlBuilder(sanityClient);

export const getPhotoUrl = (source: string) => {
  return builder.image(source).url();
};
