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
            return 'Може містити до 70 символів';
          }
          if (titleEn.length < 2 || titleUk.length < 2) {
            return 'Повинно містити від 2 символів';
          }
          return true;
        }).error('Має бути між 2 і 70 символами для кожної мови'),
      ],
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
