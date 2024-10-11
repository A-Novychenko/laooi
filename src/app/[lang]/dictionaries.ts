import 'server-only';

const dictionaries: Record<string, () => Promise<any>> = {
  uk: () => import('../../dictionaries/uk.json').then(module => module.default),
  en: () => import('../../dictionaries/en.json').then(module => module.default),
};

export const getDictionary = async (locale: string): Promise<any> => {
  const dictionaryLoader = dictionaries[locale];

  if (!dictionaryLoader) {
    throw new Error(`Dictionary for locale "${locale}" not found.`);
  }

  return dictionaryLoader();
};
