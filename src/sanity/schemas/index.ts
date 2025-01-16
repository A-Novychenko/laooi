import { type SchemaTypeDefinition } from 'sanity';

import { localizedString } from './localizedString';
import { post } from './blog-schema';
import { media } from './media-schema';
import { documents } from './documents-schema';
import { research } from './research-documents-schema';
import { advisors } from './advisors-schema';
import { privacyPolicy } from './privacy-policy-schema';
import { tenders } from './tenders-schema';
import { projects } from './projects-schema';
import { partners } from './partners-schema';
import { team } from './team-schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    localizedString,
    post,
    media,
    documents,
    research,
    advisors,
    privacyPolicy,
    tenders,
    projects,
    partners,
    team,
  ],
};
