interface IDictionary {
  meta: IMeta;
  common: {
    logoAlt: string;
    searchInput: { placeholder: string };
    postFBLinkLabel: string;
    postBackLink: IPostBackLink;
    tenderBackLink: IPostBackLink;
    projectBackLink: IPostBackLink;
    readMoreLabel: string;
    mainNav: IMainNav[];
    accessibilityMenu: IAccessibilityMenu;
    footerNav: IFooterNav;
    socialListTitle: string;
    socialLinks: ISocialLinksItem[];
    footerBasement: IFooterBasement;
    footerLinkTitle: string;
    errorPage: IPlaceholder;
    devPage: IPlaceholder;
    selectSortByDate: ISelectSortByDate;
    selectPostByType: ISelectPostByType;
    contactsPage: IContactsPage;
    privacyPolicyPage: IPrivacyPolicyPage;
  };
  aboutSection: IAboutSection;
  activitiesSection: IActivitiesSection;
  heroSection: IHeroSection;
  FAQSection: IFAQSection;
  socialSection: ISocialSection;
  blogSection: IBlogSection;
  tendersSection: IBlogSection;
  projectsSection: IBlogSection;
  targetSection: ITargetSection;
  partnersSection: IPartnersSection;
  mediaSection: IMediaSection;
  documentsSection: IDocumentsSection;
  documentsSection: IDocumentsSection;
  researchSection: IResearchSection;
  advisorsPage: {
    advisorsHeroSection: IAdvisorsHeroSection;
    advisorsSection: IAdvisorsSection;
  };
}

interface IPostBackLink {
  label: string;
  link: string;
}

interface IMeta {
  main: IMetaDataPage;
}

interface IMetaDataPage {
  title: string;
  description: string;
  keywords: string;
  images: {
    url: string;
    width: number;
    height: number;
    alt: string;
  }[];
}

interface IAccessibilityMenu {
  textSize: {
    increase: string;
    decrease: string;
  };
  grayscale: { on: string; off: string };
  highlightLink: { on: string; off: string };
  cursor: {
    increase: string;
    decrease: string;
  };
  reset: string;
}

interface IMainNav {
  name: string;
  href: string;
  embedded?: IMainNavEmbedded[];
}

interface IMainNavEmbedded {
  name: string;
  href: string;
}

interface IFooterNav {
  footerAbout: IFooterNavItem;
  footerActivities: IFooterNavItem;
  footerOther: IFooterNavItem;
}

interface IFooterNavEmbedded {
  name: string;
  href: string;
}

interface IFooterNavItem {
  title: string;
  embedded: IFooterNavEmbedded[];
}

interface ISocialLinksItem {
  name: string;
  label: string;
  settings: { href: string; externalLink: boolean };
}

interface IAboutSection {
  title: string;
  img: {
    src: string;
    alt: string;
  };
  text: {
    first: string;
    second: string;
  };
  link: {
    label: string;
    href: string;
  };
}

interface IActivitiesSection {
  title: string;
  description: string;
  link: {
    label: string;
    settings: {
      href: string;
      externalLink: boolean;
    };
  };
  items: IActivitiesSectionItems[];
}

interface IActivitiesSectionItems {
  quantity: string;
  text: string;
}

interface IHeroSection {
  title: string;
  descr: string;
  link: {
    label: string;
    settings: {
      href: string;
      externalLink: boolean;
    };
  };
  img: {
    src: string;
    alt: string;
  };
}

interface IFAQSection {
  title: string;
  items: {
    question: string;
    answer: string;
  }[];
}

interface ISocialSection {
  title: string;
  descr: string;
  videoUrl: string;
  poster: string;
}

interface IFooterBasement {
  policy: string;
  developers: string;
  designer: string;
}

interface IBlogSection {
  pageName: string;
  title: string;
  notFoundDescr: string;
  errorData: IErrorData;
  link: { label: string; settings: { href: string; externalLink: boolean } };
}

interface ITargetSection {
  title: string;
  targetGroups: { text: string }[];
  photos: { img: { src: string; alt: string } }[];
}

interface IPartnersSection {
  title: string;
  partners: {
    img: string;
    name: string;
    link: string;
  }[];
}

interface IPlaceholder {
  title: string;
  description: string;
  link: {
    label: string;
    settings: {
      href: string;
      externalLink: boolean;
    };
  };
}

interface IMediaSection {
  title: string;
  notFoundDescr: string;
  errorData: IErrorData;
  link: {
    label: string;
    settings: {
      href: string;
      externalLink: boolean;
    };
  };
}

interface IErrorData {
  description: string;
  link: {
    label: string;
    settings: {
      href: string;
      externalLink: boolean;
    };
  };
}

interface IDocumentsSection {
  mainTitle: string;
  fileLinks: IFileLinks;
  categories: { title: string; category: string }[];
  errorData: IErrorData;
}

interface IFileLinks {
  openFileLabel: string;
  downloadFileLabel: string;
}

interface IDocumentsSection {
  mainTitle: string;
  fileLinks: IFileLinks;
  categories: { title: string; category: string }[];
  errorData: IErrorData;
}

interface IResearchSection {
  mainTitle: string;
  categoryTitle: string;
  fileLinks: IFileLinks;
  errorData: IErrorData;
}

interface IFileLinks {
  openFileLabel: string;
  downloadFileLabel: string;
}

interface ISelectSortByDate {
  title: string;
  options: {
    new: string;
    old: string;
  };
}

interface ISelectPostByType {
  title: string;
  options: {
    news: string;
    articles: string;
    events: string;
    all: string;
  };
}

interface IContactsPage {
  title: string;
  formLabel: string;
  submitBtnLabel: string;
  successSubmit: string;
  errorSubmit: string;
  inputs: IContactsPageInput[];
  select: {
    name: string;
    title: string;
    description: string;
    placeholder: string;
    errorText: string;
    options: { label: string; value: string; description: string }[];
  };
  textArea: IFormTextField;
}

interface IContactsPageInput {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  validationOptions: validationOptions;
}

interface IValidationOptions {
  required: ValidationOption;
  pattern: ValidationOption;
  minLength?: ValidationOption;
  maxLength: ValidationOption;
}

type ValidationOption = {
  value: string | number | boolean;
  message: string;
};

type IFormTextField = {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  validationOptions: TextValidationOptions;
};

type TextValidationOptions = {
  required: ValidationOption;
  minLength: ValidationOption;
  maxLength: ValidationOption;
};

interface IAdvisorsHeroSection {
  title: string;
  firstImg: string;
  secondImg: string;
  firstImgAlt: string;
  secondImgAlt: string;
  description: {
    quotedText: {
      advisors: string;
      question: string;
      become: string;
    };
    firstParagraph: { after: string };
    secondParagraph: { before: string; after: string };
    thirdParagraph: { before: string; after: string };
  };
  btn: { btnLabel: string; settings: { href: string; externalLink: boolean } };
}

interface IAdvisorsSection {
  title: string;
}

interface IPrivacyPolicyPage {
  title: string;
  errorData: IErrorData;
}
