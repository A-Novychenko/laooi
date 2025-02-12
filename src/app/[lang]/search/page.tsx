import { getSearchGlobal } from '@/actions/sanity';

import {
  AdvisorCard,
  ButtonLink,
  DocumentCard,
  MediaCard,
  PostCard,
  SearchInput,
  TeamCard,
  Title,
} from '@/components/ui';

import { getDictionary } from '@/utils/dictionaries';

export const revalidate = 0;

const SearchPage = async ({
  params: { lang },
  searchParams,
}: {
  params: {
    lang: 'uk' | 'en';
  };
  searchParams: {
    searchQuery: string;
  };
}) => {
  const dict = await getDictionary(lang);

  const { mainTitle, categoryTitles, linksTitle, errorData } =
    dict.searchSection;
  const { readMoreLabel, teamClosedLabel, searchInput } = dict.common;
  const { fileLinks } = dict.documentsSection;
  const { labelTitle } = dict.tendersSection;
  const { link } = dict.advisorsPage.advisorsSection;

  const searchQuery = searchParams.searchQuery || '';

  const searchResults = await getSearchGlobal(searchQuery, lang);

  const {
    post,
    tenders,
    projects,
    documents,
    research,
    team,
    advisors,
    media,
  } = searchResults;

  console.log(searchResults);

  return (
    <>
      <section className="section">
        <div className="container">
          <Title tag={'h1'} className="mb-4">
            {mainTitle}
          </Title>

          <SearchInput
            lang={lang}
            placeholder={searchInput.placeholder}
            desktop={false}
            searchPage={true}
            className={
              'border border-textActive bg-textLight outline-textActive placeholder:text-textSlate focus:border-transparent xl:h-[56px]'
            }
          />

          {Object.keys(searchResults).length <= 0 && (
            <div className="mt-4 flex items-center justify-center py-4 text-center md:py-0 xl:py-8">
              <p className="w-full text-base/[1.37] md:w-[453px] xl:w-[506px] xl:text-lg">
                {errorData.description}
              </p>
            </div>
          )}
        </div>
      </section>

      {projects && projects.length > 0 && (
        <section>
          <div className="container py-8 md:py-12 xl:py-16">
            <div className="mb-4 flex flex-col md:flex-row md:justify-between">
              <div className="mb-2 flex items-center gap-2">
                <Title className="">{categoryTitles.projects}</Title>

                <p className="text-[30px]/normal text-textBlue md:text-[36px] xl:text-[40px]">
                  {projects.length}
                </p>
              </div>

              <ButtonLink
                type={'link'}
                settings={{
                  href: 'projects',
                  externalLink: false,
                }}
                typeStyle={'light'}
              >
                {linksTitle}
              </ButtonLink>
            </div>

            <ul className="flex w-full flex-wrap gap-4 rounded-3xl">
              {projects.slice(0, 6).map((item, idx) => {
                return (
                  <li key={idx} className="w-full md:w-[336px] xl:w-[416px]">
                    <PostCard
                      post={item}
                      lang={lang}
                      readMoreLabel={readMoreLabel}
                      pageName={'projects'}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {research && research.length > 0 && (
        <section>
          <div className="container py-8 md:py-12 xl:py-16">
            <div className="mb-4 flex flex-col md:flex-row md:justify-between">
              <div className="mb-2 flex items-center gap-2">
                <Title className="">{categoryTitles.research}</Title>

                <p className="text-[30px]/normal text-textBlue md:text-[36px] xl:text-[40px]">
                  {research.length}
                </p>
              </div>

              <ButtonLink
                type={'link'}
                settings={{
                  href: 'research',
                  externalLink: false,
                }}
                typeStyle={'light'}
              >
                {linksTitle}
              </ButtonLink>
            </div>

            <ul className="flex w-full flex-wrap gap-4 rounded-3xl">
              {research.slice(0, 6).map((item, idx) => {
                return (
                  <li key={idx} className="w-full md:w-[336px] xl:w-[416px]">
                    <DocumentCard doc={item} fileLinks={fileLinks} />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {media && media.length > 0 && (
        <section>
          <div className="container py-8 md:py-12 xl:py-16">
            <div className="mb-4 flex flex-col md:flex-row md:justify-between">
              <div className="mb-2 flex items-center gap-2">
                <Title className="">{categoryTitles.media}</Title>

                <p className="text-[30px]/normal text-textBlue md:text-[36px] xl:text-[40px]">
                  {media.length}
                </p>
              </div>

              <ButtonLink
                type={'link'}
                settings={{
                  href: 'media',
                  externalLink: false,
                }}
                typeStyle={'light'}
              >
                {linksTitle}
              </ButtonLink>
            </div>

            <ul className="flex flex-col gap-[16px] md:flex-row md:flex-wrap">
              {media.slice(0, 10).map((item, idx) => {
                return (
                  <li key={idx} className="md:w-[219px] xl:w-[243px]">
                    <MediaCard
                      imageUrl={item.photo}
                      imageAlt={item.alt}
                      link={item.link}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {documents && documents.length > 0 && (
        <section>
          <div className="container py-8 md:py-12 xl:py-16">
            <div className="mb-4 flex flex-col md:flex-row md:justify-between">
              <div className="mb-2 flex items-center gap-2">
                <Title className="">{categoryTitles.documents}</Title>

                <p className="text-[30px]/normal text-textBlue md:text-[36px] xl:text-[40px]">
                  {documents.length}
                </p>
              </div>

              <ButtonLink
                type={'link'}
                settings={{
                  href: 'documents',
                  externalLink: false,
                }}
                typeStyle={'light'}
              >
                {linksTitle}
              </ButtonLink>
            </div>

            <ul className="flex w-full flex-wrap gap-4 rounded-3xl">
              {documents.slice(0, 6).map((item, idx) => {
                return (
                  <li key={idx} className="w-full md:w-[336px] xl:w-[416px]">
                    <DocumentCard doc={item} fileLinks={fileLinks} />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {post && post.length > 0 && (
        <section>
          <div className="container py-8 md:py-12 xl:py-16">
            <div className="mb-4 flex flex-col md:flex-row md:justify-between">
              <div className="mb-2 flex items-center gap-2">
                <Title className="">{categoryTitles.post}</Title>

                <p className="text-[30px]/normal text-textBlue md:text-[36px] xl:text-[40px]">
                  {post.length}
                </p>
              </div>

              <ButtonLink
                type={'link'}
                settings={{
                  href: 'blog',
                  externalLink: false,
                }}
                typeStyle={'light'}
              >
                {linksTitle}
              </ButtonLink>
            </div>

            <ul className="flex w-full flex-wrap gap-[16px] rounded-3xl">
              {post.slice(0, 6).map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="max-w-[448px] md:w-[336px] xl:w-[416px] smOnly480:max-w-full"
                  >
                    <PostCard
                      post={item}
                      lang={lang}
                      readMoreLabel={readMoreLabel}
                      pageName={'blog'}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {tenders && tenders.length > 0 && (
        <section>
          <div className="container py-8 md:py-12 xl:py-16">
            <div className="mb-4 flex flex-col md:flex-row md:justify-between">
              <div className="mb-2 flex items-center gap-2">
                <Title className="">{categoryTitles.tenders}</Title>

                <p className="text-[30px]/normal text-textBlue md:text-[36px] xl:text-[40px]">
                  {tenders.length}
                </p>
              </div>

              <ButtonLink
                type={'link'}
                settings={{
                  href: 'tenders',
                  externalLink: false,
                }}
                typeStyle={'light'}
              >
                {linksTitle}
              </ButtonLink>
            </div>

            <ul className="flex w-full flex-wrap gap-[16px] rounded-3xl">
              {tenders.slice(0, 6).map((item, idx) => {
                return (
                  <li key={idx} className="w-full md:w-[336px] xl:w-[416px]">
                    <PostCard
                      post={item}
                      lang={lang}
                      readMoreLabel={readMoreLabel}
                      pageName={'tenders'}
                      labelTitle={labelTitle}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {team && team.length > 0 && (
        <section>
          <div className="container py-8 md:py-12 xl:py-16">
            <div className="mb-4 flex flex-col md:flex-row md:justify-between">
              <div className="mb-2 flex items-center gap-2">
                <Title className="">{categoryTitles.team}</Title>

                <p className="text-[30px]/normal text-textBlue md:text-[36px] xl:text-[40px]">
                  {team.length}
                </p>
              </div>

              <ButtonLink
                type={'link'}
                settings={{
                  href: 'team',
                  externalLink: false,
                }}
                typeStyle={'light'}
              >
                {linksTitle}
              </ButtonLink>
            </div>

            <ul className="flex w-full flex-wrap gap-[16px] rounded-3xl">
              {team.slice(0, 6).map((item, idx) => {
                return (
                  <TeamCard
                    key={idx}
                    teamMember={item}
                    readMoreLabel={readMoreLabel}
                    teamClosedLabel={teamClosedLabel}
                    className={'w-full md:w-[336px] xl:w-[416px]'}
                  />
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {advisors && advisors.length > 0 && (
        <section className="md:pb-12 xl:pb-16">
          <div className="container py-8 md:py-12 xl:py-16">
            <div className="mb-4 flex flex-col md:flex-row md:justify-between">
              <div className="mb-2 flex items-center gap-2">
                <Title className="">{categoryTitles.advisors}</Title>

                <p className="text-[30px]/normal text-textBlue md:text-[36px] xl:text-[40px]">
                  {advisors.length}
                </p>
              </div>

              <ButtonLink
                type={'link'}
                settings={{
                  href: 'advisors',
                  externalLink: false,
                }}
                typeStyle={'light'}
              >
                {linksTitle}
              </ButtonLink>
            </div>

            <ul className="flex w-full flex-wrap gap-[16px] rounded-3xl">
              {advisors.slice(0, 6).map((item, idx) => {
                return (
                  <li key={idx} className="w-full md:w-[336px] xl:w-[416px]">
                    <AdvisorCard advisor={item} lang={lang} link={link} />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default SearchPage;
