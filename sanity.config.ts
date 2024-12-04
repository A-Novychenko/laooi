/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { languageFilter } from '@sanity/language-filter';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './src/sanity/env';
import { schema } from './src/sanity/schemas';
import { structure } from './src/sanity/structure';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    languageFilter({
      supportedLanguages: [
        { id: 'uk', title: 'Українська' },
        { id: 'en', title: 'English' },
      ],
      defaultLanguages: ['uk'],
      filterField: field => true,
    }),
  ],
});
