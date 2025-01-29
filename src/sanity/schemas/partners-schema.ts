/* eslint-disable @typescript-eslint/no-explicit-any */

import { defineType } from 'sanity';

export const partners = defineType({
  name: 'partners',
  title: 'Партнери',
  type: 'document',

  preview: {
    select: {
      title: 'name.uk',
      subtitle: 'index',
      media: 'img',
    },
  },

  fields: [
    {
      name: 'name',
      title: 'Назва організації партнера',
      type: 'localizedString',
      validation: Rule => [
        Rule.required().error('Поле обовʼязкове'),
        Rule.custom((name: any) => {
          const nameEn = name?.en || '';
          const nameUk = name?.uk || '';

          if (nameEn.length > 100 || nameUk.length > 100) {
            return 'Може містити до 100 символів';
          }
          if (nameEn.length < 2 || nameUk.length < 2) {
            return 'Повинно містити від 2 символів';
          }
          return true;
        }).error('Має бути між 2 і 100 символами для кожної мови'),
      ],
    },

    {
      name: 'id',
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
      name: 'img',
      title: 'Логотип',
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
      name: 'link',
      title:
        'Посилання на сайт партнера (https://www.facebook.com/luhanskLAOLI/)',
      type: 'url',
      validation: Rule =>
        Rule.required()
          .error('Поле обовʼязкове')
          .uri({ scheme: ['http', 'https'] })
          .error('Введіть коректний URL'),
    },

    {
      name: 'isVisible',
      title: 'Додати в секцію "Нас підтримують"',
      type: 'boolean',
      options: {
        layout: 'radio', // Відображає як радіокнопки
      },
      description:
        'Оберіть "Так", якщо потрібно щоб цей партнер показувався в секції "Нас підтримують"',
      initialValue: true, // За замовчуванням "Так"
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
