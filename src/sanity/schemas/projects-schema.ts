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
      name: 'donor',
      title: 'Донор',
      type: 'reference',
      to: [{ type: 'partners' }],
      validation: Rule => Rule.required().error('Поле обовʼязкове'),
      options: {},
    },

    {
      name: 'body',
      title: 'Body (двомовне)',
      type: 'object',
      fields: [
        {
          name: 'uk',
          title: 'Українська',
          type: 'array',
          of: [
            {
              type: 'object',
              title: 'Section',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Заголовок (UA)',
                },
                {
                  name: 'text',
                  type: 'array',
                  title: 'Текст (UA)',
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
          ],
          validation: Rule =>
            Rule.required()
              .min(1)
              .error(
                'Масив "Body" українською повинен містити хоча б один елемент',
              ),
        },
        {
          name: 'en',
          title: 'Англійська',
          type: 'array',
          of: [
            {
              type: 'object',
              title: 'Section',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Заголовок (EN)',
                },
                {
                  name: 'text',
                  type: 'array',
                  title: 'Текст (EN)',
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
          ],
          validation: Rule =>
            Rule.required()
              .min(1)
              .error(
                'Масив "Body" англійською повинен містити хоча б один елемент',
              ),
        },
      ],
      validation: Rule =>
        Rule.required().error(
          'Поле "Body" є обовʼязковим і повинно бути заповнене обома мовами',
        ),
    },

    {
      name: 'publicationDate',
      title: 'Дата публікації',
      type: 'datetime',
      validation: Rule => Rule.required().error('Поле обовʼязкове'),
    },
  ],
});
