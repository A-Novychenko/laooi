import { type SchemaTypeDefinition } from 'sanity';

import { localizedString } from './localizedString';
import { post } from './blog-schema';
import { media } from './media-schema';
import { documents } from './documents-schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [localizedString, post, media, documents],
};
