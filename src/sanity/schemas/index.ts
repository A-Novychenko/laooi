import { type SchemaTypeDefinition } from 'sanity';

import { localizedString } from './localizedString';
import { post } from './blog-schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [localizedString, post],
};
