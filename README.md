# LAOOI 💻🧩👨🏿‍💻

**[View live page](https://laooi.org/)**

---

![Site image](./public/meta/og-image.jpg)

## 🗂️ Project description 🗂️

The website **LAOOI** of the Luhansk Association of Disabled People's
Organizations, which supports people with disabilities, advocates for equal
opportunities, promotes social integration, and improves accessibility and
skills development in eastern Ukraine.

- **Project name**: LAOOI
- **Project goals**: • Offering social support for individuals with
  disabilities. • Advocating for and protecting the rights of people with
  disabilities. • Promoting social integration and inclusion. • Developing
  accessible infrastructure. • Raising public awareness about disability issues.
  • Supporting professional skill development. • Encouraging active
  participation of people with disabilities in various activities.
- **Target audience**:
  - **Age**: All
  - **Gender**: All
- **Product scope**: The Luhansk Association of Disabled Persons’ Organizations
  focuses on providing comprehensive support services for people with
  disabilities, aiming to enhance their quality of life and ensure equal
  opportunities. Key areas include advocacy for disability rights, social
  support programs, professional skills development, and public education on
  disability issues. The organization prioritizes the development of accessible
  infrastructure and active social integration, targeting individuals with
  disabilities primarily in eastern Ukraine. Through these efforts, the
  association strives to foster an inclusive society where people with
  disabilities can fully participate and thrive.

## ⚙️ Creating the project ⚙️

**LAOOI** is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Features

- **Optimization**: The website is optimized for fast loading, providing users
  with quick access to information.
- **Modularity and reusability**: The product is built using a component
  approach, which makes the code modular and allows components to be used on
  different pages and in different sections of the project. This simplifies the
  maintenance of the site and the expansion of its functionality.
- **Linters and formatting**: Using tools like Prettier and ESLint helps
  maintain code standards, ensures a consistent style, and identifies potential
  problems in the code.
- **Adaptability**: The website is responsive, allowing you to create dynamic
  and interactive user interfaces without reloading pages. This increases user
  engagement and interaction.
- **Convenient content management**: The content management system has an
  intuitive interface that simplifies the process of updating and editing
  content. You can easily make changes to texts, images and other content
  without special knowledge in web development.
- **Accessibility**:
  - Intuitive design
  - Semantic HTML
  - Mobile-friendly interface
  - Web resource available for any internet connection

### Design

[Design layout on Figma](https://www.figma.com/design/v3lhwJRtxWSqhLP4KkTNgk/Сайт-для-ЛАООІ?node-id=2-10&t=tTa3RbrP3hQlmQOc-1)

### Project structure

```mermaid
graph LR

Z{Enter} --> L(Layout)
  L --> B(Header)
  L --> A((Home page))
  L --> C(Footer)
  B --> BA[Menu]

  A --> AA[Section 1. Hero]
  A --> AB[Section 2. Problems]
  A --> AC[Section 3. Offer]
  A --> AD[Section 4. Advantages]
  A --> AE[Section 5. About]
  A --> AF[Section 6. Cases]
  A --> AG[Section 6. Reviews]
  A --> AH[Section 6. Partners]
  A --> AI[Section 6. FAQ]
  A --> AK[Section 6. ContactUs]

  BA --> D((Portfolio page))
  D --> DA[Section 1. Portfolio Hero]
  D --> DB[Section 2. Portfolio Cases]
  D --> DC[Section 3. Reviews]
  D --> DB[Section 4. ContactUs]


  BA --> E((Business page))
  E --> EA[Section 1. Hero]
  E --> EB[Section 2. Advantages]
  E --> EC[Section 3. BusinessClients]
  E --> ED[Section 4. Collaboration]
  E --> EE[Section 5. Cases]
  E --> EF[Section 6. Partners]
  E --> EG[Section 7. FAQ]
  E --> EH[Section 8. ContactUs]


  BA --> F((Single page))
  F --> FA[Section 1. Hero]
  F --> FB[Section 2. Overview]
  F --> FC[Section 3. Cases]
  F --> FD[Section 4. Review]
  F --> FE[Section 5. ContactUs]

```

<details>

<summary><b>Project Organization and File Colocation: </b></summary>

<br/>

```

|-- public -> static files
|-- src -> source directory with the main application code
  |-- actions -> asynchronous functions that are executed on the server
  |-- app -> pages and routing
    |-- / --> routing group for main UI
    |-- (portfolio) --> routing group for portfolio UI
    |-- (business) --> routing group for business UI
    |-- (single-page) --> routing group for dynamic page UI
  |-- components -> folder with reusable components
    |-- base -> base sections/block components (accordion, form, slider, etc.)
    |-- ui -> small reusable components (button, modal, etc.)
      |-- NameComponent -> folders for each component
        |-- NameComponent.tsx -> main component
        |-- NameComponent.module.css -> file for special components styles
        |-- index.ts -> file for re-export
        |-- types.ts -> file for special components types (props)
  |-- layout -> components that are used as a main template (header, footer)
  |-- sections -> folder with section components
  |-- data -> static data for the project (json)
  |-- types -> folder with reusable type definitions
  |-- utils -> additional reusable functions

```

</details>

### Components API

Each component has its own API. You can find it in the component's folder. This
is a list of more common components and their API.

<details>

<summary><b>Base sections/block components (accordion, form, slider, etc.): </b></summary>

<br/>

- #### AccessMenu

The component is a drop-down menu that contains buttons for controlling text
magnification, using grayscale, and underlining links throughout the site.

| Prop   | Default     | Description                                                    |
| ------ | ----------- | -------------------------------------------------------------- |
| `dict` | `undefined` | required, `IDictionary`, data stored in the project dictionary |

- #### AccordionMenu

A component that creates a list of collapsible link items, allowing users to
expand or collapse nested links.

| Prop          | Default     | Description                                                                                                                     |
| ------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `children`    | `undefined` | required, Built-in ReactNode components                                                                                         |
| `data`        | `undefined` | required, `Array<{ title: string; name: string }>` - an array of objects containing `title` and `name` for each accordion item. |
| `handleClose` | `undefined` | required, A callback function that is triggered to close the accordion menu. It does not take any parameters.                   |

- #### BlogGallery

Description of the component and its purpose

| Prop   | Default | Description                    |
| ------ | ------- | ------------------------------ |
| `prop` | `value` | required/optional, description |

- #### FooterBasement

A component that displays the footer's bottom section with customizable policy
text, copyright information, and developer credits. This component is
responsive, arranging content in a column layout on small screens and switching
to a row layout on larger screens.

| Prop   | Type              | Default     | Description                                                                                               |
| ------ | ----------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `data` | `IFooterBasement` | `undefined` | **required**, an object containing `policy` and `developers` text content for the footer.                 |
| `name` | `string`          | `undefined` | **required**, the name or title to be displayed as copyright text, preceded by a copyright symbol (`©`). |

- #### FooterSocialList

A component that displays a list of social media icons in the footer section. It
presents a title for the social media group and renders each icon as a clickable
item linked to the corresponding social media platform.

| Prop    | Default     | Description                                                                                                                                                                 |
| ------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title` | `undefined` | **required**, `string`, the title displayed for the social media list.                                                                                                      |
| `data`  | `[]`        | **required**, `Array<{ settings: { href: string } }>` an array of objects containing the social media links. Each object must include a `settings` property with an `href`. |

- #### MainNavList

A component that renders the main navigation of a site with embedded links

| Prop          | Default     | Description                                                                                                                                                           |
| ------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lang`        | `undefined` | required, `string`, current site language                                                                                                                             |
| `mainNav`     | `undefined` | required, `Array<{ name: string; href: string, embedded?: IMainNavEmbedded[] }>` - an array of objects containing `name` and `href` and `embedded` for each nav item. |
| `handleClose` | `undefined` | required, A callback function that is triggered to close the accordion menu. It does not take any parameters.                                                         |

- #### MediaList

A component that renders a gallery of media resource link cards

| Prop    | Default     | Description                                                                                                                                                     |
| ------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items` | `undefined` | required, `Array<{ img: string; cardLink: {href: string; labelCardLink: string;} }>` - an array of objects containing `img` and `cardLink` for each media item. |

- #### MobileMenu

A component that renders the main navigation and language switcher on mobile and
tablet devices

| Prop       | Default     | Description                                                                                                                                                           |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dict`     | `undefined` | required, `IDictionary`, data stored in the project dictionary                                                                                                        |
| `children` | `undefined` | required, Built-in ReactNode components                                                                                                                               |
| `logoAlt`  | `undefined` | required, `string`, img description                                                                                                                                   |
| `lang`     | `undefined` | required, `string`, current site language                                                                                                                             |
| `mainNav`  | `undefined` | required, `Array<{ name: string; href: string, embedded?: IMainNavEmbedded[] }>` - an array of objects containing `name` and `href` and `embedded` for each nav item. |

- #### PartnersSliderWrap

Wrapper component for the slider in the partners section

| Prop        | Default     | Description                                                                                                                        |
| ----------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `data`      | `undefined` | required, required, `Array<{ img: string; name: string}>` - an array of objects containing `img` and `name` for each partner item. |
| `className` | `undefined` | optional, `string`, adds custom css class to the Button component.                                                                 |

- #### TargetSliderWrap

Wrapper component for the slider in the target section

| Prop           | Default     | Description                                                                                                |
| -------------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| `targetGroups` | `undefined` | required, required, `Array<{ text: string}>` - an array of objects containing `text` for each target item. |
| `className`    | `undefined` | optional, `string`, adds custom css class to the Button component.                                         |

</details>

<br/>

<details>

<summary><b>Small reusable components (button, modal, etc.):</b></summary>

<br/>

- #### Accordion

A component that renders a list of collapsible accordion items, allowing users
to expand or collapse content sections.

| Prop        | Default     | Description                                                                                                                     |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `data`      | `undefined` | required, `Array<{ title: string; text: string }>` - an array of objects containing `title` and `text` for each accordion item. |
| `className` | `undefined` | optional, `string`, adds custom css class to the Button component.                                                              |

- #### ButtonLink

A button component styled as a button but capable of rendering either as a
button or a link, depending on the settings.

| Prop        | Default     | Description                                                                                                                                               |
| ----------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`  | `undefined` | required, Built-in ReactNode components, an button content                                                                                                |
| `typeStyle` | `primary`   | optional, can take the value `primary` `secondary` `light` `transparent`, changes the design of the button                                                |
| `icon`      | `true`      | optional, `boolean`, display arrow icon                                                                                                                   |
| `type`      | `undefined` | required, `link` or `button`, Specifies which tag to render                                                                                               |
| `settings`  | `undefined` | required, `Object`, Settings for link `{href: required string, external: required string}` or button `{action: required function}` depending on prop type |
| `className` | `undefined` | optional, `string`, adds custom css class to the Button component.                                                                                        |

- #### CircleButton

A circular button component designed to display content within a round button
and handle click actions.

| Prop        | Default     | Description                                                                                      |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------ |
| `children`  | `undefined` | required, `ReactNode`, defines the content inside the button                                     |
| `action`    | `undefined` | required, `() => void`, function triggered when the button is clicked                            |
| `className` | `undefined` | optional, `string`, adds a custom CSS class to the CircleButton component for additional styling |

- #### DateStamp

Component that displays the creation date of news, events, articles

| Prop       | Default     | Description                             |
| ---------- | ----------- | --------------------------------------- |
| `children` | `undefined` | required, Built-in ReactNode components |

- #### DropdownMenu

The component is a drop-down menu that can contain button or link elements.

| Prop             | Default        | Description                                                                             |
| ---------------- | -------------- | --------------------------------------------------------------------------------------- |
| `children`       | `undefined`    | required, `ReactNode`, accepts a button component that will open a menu when clicked    |
| `dataForButtons` | `undefined`    | optional, `Array`, array of objects with settings and data of menu button elements      |
| `dataForLinks`   | `undefined`    | optional, `Array`, array of objects with settings and data of menu link items           |
| `menuPosition`   | `bottom start` | optional, `string`, a line with a list of pages from which the menu location is counted |

- #### FooterNavList

A component that displays a list of navigation links in the footer section. It
presents a title for the navigation group and renders each link as a clickable
item.

| Prop       | Default     | Description                                                                                                                                                         |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` | `undefined` | **required**, `ReactNode`, the title displayed for the navigation list.                                                                                             |
| `data`     | `[]`        | **required**, `IFooterNavEmbedded[]`, an array of objects containing the navigation links. Each object must include `name` (string) and `href` (string) properties. |
| `lang`     | `undefined` | required, `string`, current site language                                                                                                                           |

- #### Gallery

Component for displaying image cards for sections

| Prop   | Default     | Description                                                                                                                     |
| ------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `data` | `undefined` | required, required, `Array<{ src: string; alt: string}>` - an array of objects containing `src` and `alt` for each target item. |

- #### LangSwitcher

A component that displays the current site language and provides the ability to
change languages ​​to Ukrainian or English

| Prop       | Default     | Description                                    |
| ---------- | ----------- | ---------------------------------------------- |
| `lang`     | `undefined` | required, `string`, current site language      |
| `langCode` | `undefined` | required, `string`, static data, language code |

- #### Logo

Company Logo component, the logo image is wrapped in a link that leads to the
main page of the site

| Prop             | Default     | Description                                                                               |
| ---------------- | ----------- | ----------------------------------------------------------------------------------------- |
| `lang`           | `undefined` | required, `string`, current site language                                                 |
| `logoAlt`        | `undefined` | required, `string`, static data, description of the company logo image                    |
| `classNameImage` | `undefined` | optional, `string`, adds a custom CSS class to the link component for additional styling  |
| `classNameLink`  | `undefined` | optional, `string`, adds a custom CSS class to the image component for additional styling |

- #### MediaCard

Component card for the media section

| Prop       | Default     | Description                                            |
| ---------- | ----------- | ------------------------------------------------------ |
| `img`      | `undefined` | required, `string`, path to img                        |
| `cardLink` | `undefined` | required, `string`, link to an external media resource |

- #### NavEmbeddedLink

Component - main navigation nested link

| Prop          | Default     | Description                                                                                                   |
| ------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `data`        | `undefined` | required, `IMainNavEmbedded[]` - an array of objects for each nav item.                                       |
| `handleClose` | `undefined` | required, A callback function that is triggered to close the accordion menu. It does not take any parameters. |

- #### PartnersCard

Component card for the Partners section

| Prop   | Default     | Description                                      |
| ------ | ----------- | ------------------------------------------------ |
| `img`  | `undefined` | required, `string`, path to img                  |
| `name` | `undefined` | required, `string`, company name                 |
| `link` | `undefined` | required, `string`, link to an external resource |

- #### PostCard

Description of the component and its purpose

| Prop   | Default | Description                    |
| ------ | ------- | ------------------------------ |
| `prop` | `value` | required/optional, description |

- #### PostLabel

Description of the component and its purpose

| Prop   | Default | Description                    |
| ------ | ------- | ------------------------------ |
| `prop` | `value` | required/optional, description |

- #### PostText

Description of the component and its purpose

| Prop   | Default | Description                    |
| ------ | ------- | ------------------------------ |
| `prop` | `value` | required/optional, description |

- #### ScrollToTopButton

Description of the component and its purpose

| Prop   | Default | Description                    |
| ------ | ------- | ------------------------------ |
| `prop` | `value` | required/optional, description |

- #### SearchInput

A component for entering search queries on a website. It has a separate state
for desktop devices, a button that appears when clicked.

| Prop          | Default     | Description                                                      |
| ------------- | ----------- | ---------------------------------------------------------------- |
| `placeholder` | `undefined` | required, `string`, placeholder                                  |
| `desktop`     | `undefined` | optional, `boolean` or `undefined`, enables desktop version mode |

- #### Slider

| Prop             | Default     | Description                                                                                               |
| ---------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `slideComponent` | -           | required, `React.FC<any>`, It`s the component that will be rendered as side.                              |
| `slidesData`     | -           | required, `Record<string, any>[]`, It is a array with slide`s objects                                     |
| `section`        | -           | required, `cases`, `reviews`, `partners`, `advantages`, name of the section where slider will be rendered |
| `wrapClassName`  | `undefined` | optional, `string`, adds custom css class to the Swiper component.                                        |
| `slideClassName` | `undefined` | optional, `string`, adds custom css class to the SlideComponent component.                                |

- #### TargetCard

Component card for the Target section

| Prop   | Default     | Description              |
| ------ | ----------- | ------------------------ |
| `text` | `undefined` | required, `string`, text |

- #### Title

A versatile title component that renders a styled heading (`h1`, `h2`, etc.)
with customizable styles based on provided props.

| Prop        | Default     | Description                                                                                                                                   |
| ----------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`  | `undefined` | required, `ReactNode`, content displayed inside the title                                                                                     |
| `tag`       | `h2`        | optional, `string`, specifies the HTML tag to render as (`h1`, `h2`, `h3`, etc.)                                                              |
| `style`     | `second`    | optional, can take values `main`, `second`, or `third`, each representing different text styles for the title                                 |
| `className` | `undefined` | optional, `string`, adds custom CSS classes for additional styling on the title component                                                     |
| `hidden`    | `false`     | optional, `boolean`, if `true`, applies the `visually-hidden` class to hide the title visually while keeping it accessible for screen readers |

- #### TooltipMenu

A component that creates a list of collapsible link items, allowing users to
expand or collapse nested links.

| Prop          | Default     | Description                                                                                                   |
| ------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `children`    | `undefined` | required, Built-in ReactNode components                                                                       |
| `data`        | `undefined` | required, `IMainNavEmbedded[]` - an array of objects for each nav item.                                       |
| `handleClose` | `undefined` | required, A callback function that is triggered to close the accordion menu. It does not take any parameters. |

- #### VideoPlayer

Video player component. Plays videos of different sizes. A link to the video is
expected in the props

| Prop     | Default     | Description                                         |
| -------- | ----------- | --------------------------------------------------- |
| `url`    | `undefined` | required, `string`, value of the path to the video  |
| `poster` | `undefined` | required, `string`, value of the path to the poster |

</details>

### 🚧 Technology stack

- **Main technologies**:

  - Next.js (app router)
  - TypeScript
  - Tailwind CSS

- **Additional dependencies**:

  - Headless UI
  - Swiper
  - React Player
  - React Hook Form
  - React Hook Form Persist
  - React Number Format
  - Zod
  - Clsx
  - Googleapis
  - Graphql-request
  - Graphql

  ...full list of dependencies is available in `package.json` file.

## 🗃️ Deployment 🗃️

To deploy this project, you need to perform the following steps:

1. **Clone the repository**: Use the `git clone` command to clone this
   repository to your computer.
2. **Install the dependencies**: Open a terminal in the root of the project and
   run `npm install` or `yarn install` to install all required dependencies.
3. **Setting environment variables**: Create a `.env` file in the root folder
   and add the necessary environment variables that you need for the project
   according to the `.env.example` file.
4. **Run the application**: Run the `npm run dev` or `yarn dev` command to run
   the project on the local server.
5. **Deploy**: To deploy this project to a production server, use hosting
   platforms such as Vercel, Netlify, or others.

## 📱 Contacts 📱

**WDS** is ready to answer your questions and provide additional information:

- **Website**: [webdevsynergy.com.ua](https://www.webdevsynergy.com.ua)
- **Phone**: <a href="tel:+380665762413">+380665762413</a>
- **Email**: [wds.webdevsynergy@gmail.com](mailto:wds.webdevsynergy@gmail.com)
