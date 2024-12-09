/* eslint-disable @typescript-eslint/no-explicit-any */

import { defineType } from 'sanity';

export const media = defineType({
  name: 'media',
  title: 'Медіа про нас (мінімум 3)',
  type: 'document',
  validation: (Rule: any) => [
    Rule.required().error('Ця колекція обовʼязкова'),
    Rule.custom((posts: any) =>
      posts.length < 3 ? 'Повинно бути від 3-х постів' : true,
    ),
  ],

  preview: {
    select: {
      title: 'link',
      subtitle: 'publicationDate',
      media: 'img',
    },
  },

  fields: [
    {
      name: 'link',
      title: 'Посилання на публікацію (https://www.example.com)',
      type: 'url',
      validation: Rule =>
        Rule.required()
          .error('Поле обовʼязкове')
          .uri({ scheme: ['http', 'https'] })
          .error('Введіть коректний URL'),
    },

    {
      name: 'img',
      title: 'Зображення',
      type: 'image',
      validation: Rule => Rule.required().error('Потрібно додати зображення'),
      options: { hotspot: true },
      fields: [
        {
          name: 'caption',
          type: 'localizedString',
          title: 'Альтернативний текст та для скрінрідера. Що зображено?',
          validation: Rule => Rule.required().error('Поле обовʼязкове'),
        },
        {
          name: 'attribution',
          type: 'localizedString',
          title: 'Attribution (заповнювати не потрібно)',
        },
      ],
    },

    {
      name: 'publicationDate',
      title: 'Дата публікації',
      type: 'datetime',
      validation: Rule => Rule.required().error('Поле обовʼязкове'),
    },
  ],
});
