import { sanityClient } from '@/sanity/lib/client';

import { getSearchGlobalQuery } from '../queries';

import { getPhotoUrl } from '@/utils/getSanityPhotoUrl';
import { getFileUrl } from '@/utils/getFileUrl';

const fetchGlobalSearchResults = async (
  searchTerm: string,
  lang: LangType = 'uk',
): Promise<ISanitySearchResult[]> => {
  const params: Record<string, unknown> = {
    query: searchTerm,
    lang,
  };

  const data: ISanitySearchResult[] = await sanityClient.fetch(
    getSearchGlobalQuery,
    params,
  );

  return data ?? [];
};

const formatSearchResults = (
  results: ISanitySearchResult[],
  lang: LangType,
): ISearchResults => {
  return results.reduce((acc: ISearchResults, item: ISanitySearchResult) => {
    const category = item._type.toLowerCase() as SearchCategory;

    const formattedItem: ISearchItem = {
      _id: item._id,
      title: item.title?.[lang] || '',
      slug: item.slug?.current || '',
      label: item.title?.[lang] || '',
      date: item.publicationDate || '',
      fileUrl: getFileUrl(item.file?.asset?._ref) || '',
      name: item.name?.[lang] || '',
      position: item.position?.[lang] || '',
      description: item.description?.[lang] || '',
      photo: item.photo?.asset?._ref ? getPhotoUrl(item.photo.asset._ref) : '',
      alt: item.photo?.caption?.[lang] || '',
      link: item.link || '',
      index: item.index || 1,
      phone: item.phone || '',
      city: item.city?.[lang] || '',
    };

    if (['projects', 'post', 'tenders'].includes(category)) {
      formattedItem.image = getPhotoUrl(item.images?.[0]?.asset?._ref || '');
      formattedItem.imageAlt = item.images?.[0]?.caption?.[lang] || '';
    }

    if (category === 'projects') {
      formattedItem.projectYear = item.projectYear;
      formattedItem.label = item.title?.[lang] || '';
      formattedItem.date = item.publicationDate || '';
    }

    if (category === 'post') {
      formattedItem.label = item.postType || '';
      formattedItem.date = item.publicationDate || '';
      formattedItem.type = item.postType || '';
    }

    if (category === 'tenders') {
      formattedItem.deadline = item.deadline || '';
      formattedItem.date = item.publicationDate || '';
    }

    if (category === 'team') {
      formattedItem.name = item.name?.[lang] || '';
      formattedItem.position = item.position?.[lang] || '';
      formattedItem.description = item.description?.[lang] || '';
      formattedItem.photo = item.photo?.asset?._ref
        ? getPhotoUrl(item.photo.asset._ref)
        : '';
      formattedItem.alt = item.photo?.caption?.[lang] || '';
      formattedItem.link = item.link || '';
      formattedItem.index = item.index || 1;
    }

    if (category === 'advisors') {
      formattedItem.phone = item.phone || '';
      formattedItem.city = item.city?.[lang] || '';
    }

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(formattedItem);
    return acc;
  }, {} as ISearchResults);
};

export const getSearchGlobal = async (
  searchTerm: string,
  lang: LangType = 'uk',
): Promise<ISearchResults> => {
  try {
    const results = await fetchGlobalSearchResults(searchTerm, lang);

    return formatSearchResults(results, lang);
  } catch (error) {
    console.error('Помилка при виконанні глобального пошуку:', error);
    return {};
  }
};
