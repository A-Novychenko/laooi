import { defineType } from 'sanity';

export const localizedString = defineType({
  name: 'localizedString',
  title: 'Localized String',
  type: 'object',
  fields: [
    {
      name: 'uk',
      type: 'string',
      title: 'Українська',
    },
    {
      name: 'en',
      type: 'string',
      title: 'English',
    },
  ],
});
