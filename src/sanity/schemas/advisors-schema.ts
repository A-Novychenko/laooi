/* eslint-disable @typescript-eslint/no-explicit-any */

import { defineType } from 'sanity';

export const advisors = defineType({
  name: 'advisors',
  title: 'Радники',
  type: 'document',

  preview: {
    select: {
      title: 'name.uk',
      subtitle: 'index',
      media: 'photo',
    },
  },

  fields: [
    {
      name: 'name',
      title:
        'Прізвище та імʼя радника. *** | Обовʼязково! Від 2 до 70 символів',
      type: 'localizedString',
      validation: Rule => [
        Rule.required().error('Поле обовʼязкове'),
        Rule.custom((title: any) => {
          const titleEn = title?.en || '';
          const titleUk = title?.uk || '';

          if (titleEn.length > 100 || titleUk.length > 100) {
            return 'Може містити до 100 символів';
          }
          if (titleEn.length < 2 || titleUk.length < 2) {
            return 'Повинно містити від 2 символів';
          }
          return true;
        }).error('Має бути між 2 і 100 символами для кожної мови'),
      ],
    },

    {
      name: 'slug',
      title: 'Генератор ідентифікатора сторінки',
      type: 'slug',
      options: {
        source: 'name.en',
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
      name: 'photo',
      title: 'Фото',
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
      name: 'city',
      title: 'Місто',
      type: 'localizedString',
      validation: Rule => [Rule.required().error('Поле обовʼязкове')],
    },

    {
      name: 'phone',
      title: 'Телефон радника.',
      type: 'string',
      validation: Rule => [Rule.required().error('Поле обовʼязкове')],
    },

    {
      name: 'link',
      title:
        'Посилання на facebook радника (https://www.facebook.com/luhanskLAOLI/)',
      type: 'url',
      validation: Rule =>
        Rule.required()
          .error('Поле обовʼязкове')
          .uri({ scheme: ['http', 'https'] })
          .error('Введіть коректний URL'),
    },

    {
      name: 'body',
      title: 'Детальна інформація про радника',
      type: 'object',
      validation: Rule => [Rule.required().error('Поле обовʼязкове')],
      fields: [
        {
          name: 'uk',
          type: 'array',
          title: 'Українська',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Звичайний текст', value: 'normal' },
                { title: 'Заголовок 2', value: 'h2' },
                { title: 'Заголовок 3', value: 'h3' },
                { title: 'Заголовок 4', value: 'h4' },
                { title: 'Заголовок 5', value: 'h5' },
                { title: 'Заголовок 6', value: 'h6' },
                { title: 'Цитата', value: 'blockquote' },
              ],
              lists: [
                { title: 'Маркірований список', value: 'bullet' },
                { title: 'Нумерований список', value: 'number' },
              ],
              marks: {
                decorators: [
                  { title: 'Жирний', value: 'strong' },
                  { title: 'Курсив', value: 'em' },
                  { title: 'Підкреслений', value: 'underline' },
                  { title: 'Закреслений', value: 'strike-through' },
                  { title: 'Код', value: 'code' },
                ],
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    title: 'Посилання',
                    fields: [
                      {
                        name: 'href',
                        type: 'url',
                        title: 'URL',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
        {
          name: 'en',
          type: 'array',
          title: 'Англійська',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Звичайний текст', value: 'normal' },
                { title: 'Заголовок 2', value: 'h2' },
                { title: 'Заголовок 3', value: 'h3' },
                { title: 'Заголовок 4', value: 'h4' },
                { title: 'Заголовок 5', value: 'h5' },
                { title: 'Заголовок 6', value: 'h6' },
                { title: 'Цитата', value: 'blockquote' },
              ],
              lists: [
                { title: 'Маркірований список', value: 'bullet' },
                { title: 'Нумерований список', value: 'number' },
              ],
              marks: {
                decorators: [
                  { title: 'Жирний', value: 'strong' },
                  { title: 'Курсив', value: 'em' },
                  { title: 'Підкреслений', value: 'underline' },
                  { title: 'Закреслений', value: 'strike-through' },
                  { title: 'Код', value: 'code' },
                ],
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    title: 'Посилання',
                    fields: [
                      {
                        name: 'href',
                        type: 'url',
                        title: 'URL',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },

    {
      name: 'index',
      title: 'Індекс',
      type: 'number',
      description: 'Число для сортування на сайті',
      validation: Rule =>
        Rule.integer()
          .positive()
          .required()
          .error('Індекс має бути позитивним цілим числом'),
      initialValue: 999,
    },
  ],
});
