import 'server-only';

const dictionaries: Record<string, () => Promise<IDictionary>> = {
  uk: () => import('../dictionaries/uk.json').then(module => module.default),
  en: () => import('../dictionaries/en.json').then(module => module.default),
};

export const getDictionary = async (locale: string): Promise<IDictionary> => {
  // Список дозволених локалей
  const allowedLocales = ['uk', 'en'];

  // Забороняємо службові шляхи та зарезервовані локалі
  if (['_next', 'api'].includes(locale)) {
    return await dictionaries['uk'](); // Повертаємо словник за замовчуванням
  }

  // Якщо локаль недійсна, встановлюємо українську як дефолтну
  if (!allowedLocales.includes(locale)) {
    return await dictionaries['uk']();
  }

  const dictionaryLoader = dictionaries[locale];
  if (!dictionaryLoader) {
    throw new Error(`Dictionary for locale "${locale}" not found.`);
  }

  return await dictionaryLoader(); // Викликаємо функцію-лоадер
};
