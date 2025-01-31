/* eslint-disable @typescript-eslint/no-explicit-any */

import { defineType } from 'sanity';

export const activities = defineType({
  name: 'activities',
  title: 'Діяльність в цифрах',
  type: 'document',

  // preview: {
  //   select: {
  //     title: `${'quantity'} ${'text.uk'}`,
  //     subtitle: 'index',
  //   },
  // },

  preview: {
    select: {
      quantity: 'quantity',
      textUk: 'text.uk',
      subtitle: 'index',
    },
    prepare({ quantity, textUk, subtitle }) {
      return {
        title: `${quantity} ${textUk}`,
        subtitle: `Індекс: ${subtitle}`,
      };
    },
  },

  fields: [
    {
      name: 'quantity',
      title: 'Число',
      type: 'number',
      validation: Rule => [Rule.required().error('Поле обовʼязкове')],
    },

    {
      name: 'text',
      title: 'Опис. *** | Обовʼязково! Від 2 до 85 символів',
      type: 'localizedString',
      validation: Rule => [
        Rule.required().error('Поле обовʼязкове'),
        Rule.custom((title: any) => {
          const titleEn = title?.en || '';
          const titleUk = title?.uk || '';

          if (titleEn.length > 85 || titleUk.length > 85) {
            return 'Може містити до 85 символів';
          }
          if (titleEn.length < 2 || titleUk.length < 2) {
            return 'Повинно містити від 2 символів';
          }
          return true;
        }).error('Має бути між 2 і 80 символами для кожної мови'),
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
