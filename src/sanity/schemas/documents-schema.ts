/* eslint-disable @typescript-eslint/no-explicit-any */

import { defineType } from 'sanity';

export const documents = defineType({
  name: 'documents',
  title: 'Документи',
  type: 'document',

  preview: {
    select: {
      title: 'title.uk',
      subtitle: 'category',
    },
  },

  fields: [
    {
      name: 'title',
      title: 'Назва документа. *** | Обовʼязково! Від 2 до 45 символів',
      type: 'localizedString',
      validation: Rule => [
        Rule.required().error('Поле обовʼязкове'),
        Rule.custom((title: any) => {
          const titleEn = title?.en || '';
          const titleUk = title?.uk || '';

          if (titleEn.length > 46 || titleUk.length > 46) {
            return 'Може містити до 45 символів';
          }
          if (titleEn.length < 2 || titleUk.length < 2) {
            return 'Повинно містити від 2 символів';
          }
          return true;
        }).error('Заголовок має бути між 2 і 45 символами для кожної мови'),
      ],
    },

    {
      name: 'category',
      title: 'Розділ.',
      type: 'string',
      description: 'До якого розділу належить документ?',
      validation: Rule => Rule.required().error('Поле обовʼязкове'),
      options: {
        list: [
          { title: 'Установчі документи', value: 'constituent' },
          { title: 'Внутрішні документи та політики', value: 'internal' },
          { title: 'Фінансові звіти', value: 'financial' },
          { title: 'Звіти про використання доходів', value: 'reports' },
          { title: 'Інші документи', value: 'other' },
        ],
        layout: 'dropdown',
      },
    },

    {
      name: 'file',
      title: 'PDF Файл',
      type: 'file',
      description: 'Завантажте PDF-файл документа',
      validation: Rule =>
        Rule.required().error('Поле обовʼязкове для завантаження PDF-файлу'),
      options: {
        accept: '.pdf',
      },
    },
  ],
});
