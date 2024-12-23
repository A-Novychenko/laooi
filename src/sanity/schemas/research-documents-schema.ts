/* eslint-disable @typescript-eslint/no-explicit-any */

import { defineType } from 'sanity';

export const research = defineType({
  name: 'research',
  title: 'Дослідження',
  type: 'document',

  preview: {
    select: {
      title: 'title.uk',
      index: 'index',
    },
    prepare(selection) {
      const { title, index } = selection;

      return {
        title,
        subtitle: index !== undefined ? `Індекс: [${index}]` : 'Без індексу',
      };
    },
  },

  fields: [
    {
      name: 'title',
      title: 'Назва документа. *** | Обовʼязково! Від 2 символів',
      type: 'localizedString',
      validation: Rule => [
        Rule.required().error('Поле обовʼязкове'),
        Rule.custom((title: any) => {
          const titleEn = title?.en || '';
          const titleUk = title?.uk || '';

          if (titleEn.length < 2 || titleUk.length < 2) {
            return 'Повинно містити від 2 символів';
          }
          return true;
        }).error('Заголовок має бути більше 2-х символів'),
      ],
    },

    {
      name: 'index',
      title: 'Індекс',
      type: 'number',
      description: 'Число для сортування документів на сайті',
      validation: Rule =>
        Rule.integer()
          .positive()
          .required()
          .error('Індекс має бути позитивним цілим числом'),
      initialValue: 999,
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
