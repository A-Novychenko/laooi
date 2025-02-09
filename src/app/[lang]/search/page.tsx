import { getSearchGlobal } from '@/actions/sanity';

import { PlaceholderSection } from '@/sections';
import {
  ButtonLink,
  DocumentCard,
  PostCard,
  SearchInput,
  TeamCard,
  Title,
} from '@/components/ui';

import { getDictionary } from '@/utils/dictionaries';

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

  const { mainTitle, errorData, categoryTitles, linksTitle } =
    dict.searchSection;
  const { readMoreLabel, teamClosedLabel, searchInput } = dict.common;
  const { fileLinks } = dict.documentsSection;
  const { labelTitle } = dict.tendersSection;

  const searchQuery = searchParams.searchQuery || '';

  const searchResults = await getSearchGlobal(searchQuery, lang);

  const { post, tenders, projects, documents, research, team } = searchResults;

  return (
    <>
      {searchResults && Object.keys(searchResults).length > 0 ? (
        <section className="section">
          <div className="container">
            <div className="pb-8 md:pb-12 xl:pb-16">
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
            </div>

            {projects && projects.length > 0 && (
              <div className="py-8 md:py-12 xl:py-16">
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
                      <li
                        key={idx}
                        className="w-full md:w-[336px] xl:w-[416px]"
                      >
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
            )}

            {research && research.length > 0 && (
              <div className="py-8 md:py-12 xl:py-16">
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
                      <li
                        key={idx}
                        className="w-full md:w-[336px] xl:w-[416px]"
                      >
                        <DocumentCard doc={item} fileLinks={fileLinks} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {documents && documents.length > 0 && (
              <div className="py-8 md:py-12 xl:py-16">
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
                      <li
                        key={idx}
                        className="w-full md:w-[336px] xl:w-[416px]"
                      >
                        <DocumentCard doc={item} fileLinks={fileLinks} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {post && post.length > 0 && (
              <div className="py-8 md:py-12 xl:py-16">
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

                <ul className="flex w-full flex-wrap gap-4 rounded-3xl">
                  {post.slice(0, 6).map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className="w-full md:w-[336px] xl:w-[416px]"
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
            )}

            {tenders && tenders.length > 0 && (
              <div className="py-8 md:py-12 xl:py-16">
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

                <ul className="flex w-full flex-wrap gap-4 rounded-3xl">
                  {tenders.slice(0, 6).map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className="w-full md:w-[336px] xl:w-[416px]"
                      >
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
            )}

            {team && team.length > 0 && (
              <div className="py-8 md:py-12 xl:py-16">
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

                <ul className="flex w-full flex-wrap gap-4 rounded-3xl">
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
            )}
          </div>
        </section>
      ) : (
        <PlaceholderSection data={{ title: mainTitle, ...errorData }} />
      )}
    </>
  );
};

export default SearchPage;
