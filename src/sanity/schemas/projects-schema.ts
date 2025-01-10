/* eslint-disable @typescript-eslint/no-explicit-any */

import { defineType } from 'sanity';

export const projects = defineType({
  name: 'projects',
  title: 'Проєкти (мінімум 3)',
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
      media: 'images.0.asset',
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
      name: 'slug',
      title: 'Генератор ідентифікатора сторінки',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 200,
        slugify: input =>
          encodeURI(
            input
              .toLowerCase()
              .replace(/[^a-zа-яёіїєґ\s]+/gi, '') // Видаляємо всі символи, що не є літерами або пробілами
              .replace(/\s+/g, '-') // Заміна пробілів на дефіси
              .slice(0, 200), // Обмеження довжини до 200 символів
          ),
      },
      validation: Rule => Rule.required().error('Поле обовʼязкове'),
    },

    {
      name: 'projectYear',
      title: 'Рік проєкту',
      type: 'string',
      options: {
        list: Array.from(
          { length: 30 },
          (_, i) => `${new Date().getFullYear() - i}`,
        ), // Список останніх 30 років
      },
      validation: Rule => Rule.required().error('Поле обовʼязкове'),
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

    {
      name: 'publicationDate',
      title: 'Дата публікації',
      type: 'datetime',
      validation: Rule => Rule.required().error('Поле обовʼязкове'),
    },
  ],
});
