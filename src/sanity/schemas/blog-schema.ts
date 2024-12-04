/* eslint-disable @typescript-eslint/no-explicit-any */

import { defineType } from 'sanity';

export const post = defineType({
  name: 'Post',
  title: 'Статті (мінімум 3)',
  type: 'document',
  validation: (Rule: any) => [
    Rule.required().error('Ця колекція обовʼязкова'),
    Rule.custom((posts: any) =>
      posts.length < 3 ? 'Повинно бути від 3-х постів' : true,
    ),
  ],

  preview: {
    select: {
      title: 'title.uk',
      subtitle: 'postType',
      media: 'image.0',
    },
  },

  fields: [
    {
      name: 'title',
      title: 'Заголовок. *** | Обовʼязково! Від 2 до 70 символів',
      type: 'localizedString',
      validation: Rule => [
        Rule.required().error('Поле обовʼязкове'),
        Rule.custom((title: any) => {
          const titleEn = title?.en || '';
          const titleUk = title?.uk || '';

          if (titleEn.length > 100 || titleUk.length > 100) {
            return 'Може містити до 70 символів';
          }
          if (titleEn.length < 2 || titleUk.length < 2) {
            return 'Повинно містити від 2 символів';
          }
          return true;
        }).error('Заголовок має бути між 2 і 70 символами для кожної мови'),
      ],
    },

    {
      name: 'images',
      title: 'Зображення для карток постів',
      type: 'array',
      validation: Rule =>
        Rule.required().min(1).error('Потрібно додати хоча б одне зображення'),
      of: [
        {
          type: 'image',
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
      ],
    },

    {
      name: 'postType',
      title: 'Тип статті',
      type: 'string',
      description: 'Обирайте тип статті: Новини, Статті або Події',
      validation: Rule => Rule.required().error('Поле обовʼязкове'),
      options: {
        list: [
          { title: 'Новини', value: 'news' },
          { title: 'Статті', value: 'articles' },
          { title: 'Події', value: 'events' },
        ],
        layout: 'dropdown',
      },
    },

    {
      name: 'link',
      title: 'Посилання на публікацію (https://www.facebook.com/luhanskLAOLI/)',
      type: 'url',
      validation: Rule =>
        Rule.required()
          .error('Поле обовʼязкове')
          .uri({ scheme: ['http', 'https'] })
          .error('Введіть коректний URL'),
    },

    {
      name: 'publicationDate',
      title: 'Дата публікації',
      type: 'datetime',
      validation: Rule => Rule.required().error('Поле обовʼязкове'),
    },

    {
      name: 'slug',
      title: 'Генератор ідентифікатора сторінки',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 200,
        slugify: input =>
          encodeURI(input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)),
      },
      validation: Rule => Rule.required().error('Поле обовʼязкове'),
    },

    {
      name: 'body',
      title: 'Текст статті',
      type: 'object',
      fields: [
        {
          name: 'uk',
          type: 'array',
          title: 'Українська',
          of: [{ type: 'block' }],
        },
        {
          name: 'en',
          type: 'array',
          title: 'Англійська',
          of: [{ type: 'block' }],
        },
      ],
    },
  ],
});
