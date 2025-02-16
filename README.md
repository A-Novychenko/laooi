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

#### Project Map

- **Privacy Policy**
- **Contacts**
- **Strategy**
- **Main Areas**
- **Media**
- **Blog**
  - `blog/[slug]`
- **Search**
- **Search Page** (`search/[query]`)
- **Documents**
- **Team**
- **Tenders**
  - `tenders/[slug]`
- **Projects**
  - `projects/[slug]`
- **Research**
- **Advisors**
  - `advisors/[slug]`

# Project Structure

| Section        | Description                  | Dynamic Route        |
| -------------- | ---------------------------- | -------------------- |
| Privacy Policy | Project privacy policy info  | ❌                   |
| Contacts       | Contact information page     | ❌                   |
| Strategy       | Project strategy overview    | ❌                   |
| Main Areas     | Key focus areas              | ❌                   |
| Media          | Media-related content        | ❌                   |
| Blog           | Blog articles                | ✅ `blog/[slug]`     |
| Search         | General search functionality | ❌                   |
| Search Page    | Search results page          | ✅ `search/[query]`  |
| Documents      | Project documents            | ❌                   |
| Team           | Team members page            | ❌                   |
| Tenders        | Open tenders list            | ✅ `tenders/[slug]`  |
| Projects       | List of projects             | ✅ `projects/[slug]` |
| Research       | Research and reports         | ❌                   |
| Advisors       | Project advisors             | ✅ `advisors/[slug]` |

## Structure Diagram

```mermaid
graph TD;
    A[Privacy Policy]
    B[Contacts]
    C[Strategy]
    D[Main Areas]
    E[Media]
    F[Blog] --> G[blog[slug]]
    H[Search]
    I[Documents]
    J[Team]
    K[Tenders] --> L[tender[slug]]
    M[Projects] --> N[projects[slug]]
    O[Research]
    P[Advisors] --> Q[advisor[slug]]

    A -->|Homepage| B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> H
    H --> I
    I --> J
    J --> K
    K --> M
    M --> O
    O --> P


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

The `BlogGallery` component is designed to display a collection of blog posts in
a responsive grid format. If no posts are available, it renders a fallback
message with a description. Each post is displayed using the `PostCard`
component.

| Prop            | Default     | Description                                                                               |
| --------------- | ----------- | ----------------------------------------------------------------------------------------- |
| `posts`         | `undefined` | **Required**. An array of post objects to be displayed in the gallery.                    |
| `lang`          | `undefined` | **Required**. The language code for the content, used for localization in the `PostCard`. |
| `readMoreLabel` | `undefined` | **Required**. A string label for the "Read More" button displayed in each `PostCard`.     |
| `notFoundDescr` | `undefined` | **Required**. A string description to display when no posts are available in the gallery. |
| `pageName`      | `undefined` | **Required**. The name of the page, passed to the `PostCard` for contextual rendering.    |
| `labelTitle`    | `undefined` | An optional string displayed as a title or label in the `PostCard`.                       |

- #### ContactsForm

The `ContactsForm` component is a dynamic and customizable form used for
collecting user information and sending emails. It provides built-in validation,
persistence, and notification features.

| Prop   | Type   | Default     | Description                                                           |
| ------ | ------ | ----------- | --------------------------------------------------------------------- |
| `data` | Object | `undefined` | Required. Configuration object for form labels, fields, and messages. |

`data` Object Structure

| Field            | Type            | Description                                                        |
| ---------------- | --------------- | ------------------------------------------------------------------ |
| `formLabel`      | `string`        | The text displayed as the form's label at the top.                 |
| `submitBtnLabel` | `string`        | The text displayed on the submit button.                           |
| `inputs`         | `Array<Object>` | Array of input field configurations (e.g., name, email, phone).    |
| `select`         | `Object`        | Configuration for the dropdown field (e.g., options, placeholder). |
| `textArea`       | `Object`        | Configuration for the textarea field (e.g., name, label).          |
| `successSubmit`  | `string`        | Message displayed when the form submission is successful.          |
| `errorSubmit`    | `string`        | Message displayed when there is an error during submission.        |

- #### ContactSocials Component

The `ContactSocials` component renders a list of social media links with
corresponding icons. It is designed to be used in contact sections of a website,
providing quick access to social profiles.

| Prop    | Type   | Default     | Description                                                   |
| ------- | ------ | ----------- | ------------------------------------------------------------- |
| `links` | Array  | `undefined` | Required. An array of objects containing social link details. |
| `title` | String | `undefined` | Required. The title displayed above the list of social links. |

`links` Array Structure

Each item in the `links` array should have the following structure:

| Field           | Type   | Description                                                 |
| --------------- | ------ | ----------------------------------------------------------- |
| `label`         | String | The label displayed for the social link (e.g., "Facebook"). |
| `settings.href` | String | The URL for the social link.                                |

- #### DocumentsCategoryList

The `DocumentsCategoryList` component is designed to display a list of documents
categorized under a specific title. Each document is displayed using the
`DocumentCard` component. If no documents are provided, the component does not
render anything.

| Prop            | Default     | Description                                                                                |
| --------------- | ----------- | ------------------------------------------------------------------------------------------ |
| `categoryTitle` | `undefined` | **Required**. The title of the category displayed above the list of documents.             |
| `documents`     | `undefined` | **Required**. An array of document objects to be displayed in the list.                    |
| `fileLinks`     | `undefined` | **Required**. An object containing file link data passed to each `DocumentCard` component. |

- #### FooterBasement

A component that displays the footer's bottom section, including policy text,
copyright information, and links to the design and development credits. This
component adapts to different screen sizes by arranging content in a column
layout on smaller screens and switching to a row layout on larger screens.

| Prop         | Type                 | Default     | Description                                                                                    |
| ------------ | -------------------- | ----------- | ---------------------------------------------------------------------------------------------- |
| `data`       | `FooterBasementData` | `undefined` | **required**, an object containing `policy`, `designer`, and `developers` text content.        |
| `staticData` | `StaticFooterData`   | `undefined` | **required**, an object containing `organization`, `designUrl`, `developUrl`, and `policyUrl`. |
| `lang`       | `string`             | `undefined` | **required**, the language code to dynamically construct the policy link URL.                  |

- #### FooterSocialList

A component that displays a list of social media links with associated icons,
along with a call-to-action link. This component is responsive and adapts its
layout based on screen size.

| Prop        | Type                 | Default     | Description                                                                 |
| ----------- | -------------------- | ----------- | --------------------------------------------------------------------------- |
| `title`     | `string`             | `undefined` | **required**, the heading displayed above the social links.                 |
| `data`      | `FooterSocialItem[]` | `undefined` | **required**, an array of objects containing social media link information. |
| `linkTitle` | `string`             | `undefined` | **required**, the text for the call-to-action link.                         |
| `lang`      | `string`             | `undefined` | **required**, the language code to construct the contact page URL.          |

- #### MainNavList

A component that renders the main navigation of a site with embedded links

| Prop          | Default     | Description                                                                                                                                                           |
| ------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lang`        | `undefined` | required, `string`, current site language                                                                                                                             |
| `mainNav`     | `undefined` | required, `Array<{ name: string; href: string, embedded?: IMainNavEmbedded[] }>` - an array of objects containing `name` and `href` and `embedded` for each nav item. |
| `handleClose` | `undefined` | required, A callback function that is triggered to close the accordion menu. It does not take any parameters.                                                         |

- #### MediaList

The `MediaList` component is designed to display a list of media items in either
a "gallery" or "main" layout. Each media item is rendered using the `MediaCard`
component. If no items are available, a fallback message is displayed.

| Prop            | Default     | Description                                                                    |
| --------------- | ----------- | ------------------------------------------------------------------------------ |
| `items`         | `undefined` | **Required**. An array of media items to be displayed.                         |
| `type`          | `'gallery'` | The layout type of the media list. Options: `'gallery'` (default) or `'main'`. |
| `notFoundDescr` | `undefined` | An optional string description displayed when no items are available.          |

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

- #### PostSliderWrap

The `PostSliderWrap` component is a wrapper for a slider component designed to
display a collection of post-related images. It utilizes the `Slider` component
and renders each image using the `PostImageSlide` component.

| Prop        | Default     | Description                                                                    |
| ----------- | ----------- | ------------------------------------------------------------------------------ |
| `data`      | `undefined` | **Required**. An array of image objects containing `src` (URL) and `alt` text. |
| `className` | `undefined` | An optional CSS class string for additional customization of the component.    |

- #### DocumentsCategoryList

The `DocumentsCategoryList` component displays a categorized list of documents
with a title. Each document is rendered using the `DocumentCard` component, and
documents are sorted based on their `index` property before rendering.

| Prop            | Default     | Description                                                                               |
| --------------- | ----------- | ----------------------------------------------------------------------------------------- |
| `categoryTitle` | `undefined` | Required. A string representing the title of the document category.                       |
| `documents`     | `undefined` | Required. An array of document objects, each containing details like `title` and `index`. |
| `fileLinks`     | `undefined` | Optional. An array of file links associated with the documents.                           |

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

- #### ActivitiesCard

A component that displays a card with a numeric counter and descriptive text.
The counter is animated on larger screens and formatted as a static number on
smaller screens. This component is responsive and adapts its layout based on
screen size.

| Prop       | Type     | Default     | Description                                                    |
| ---------- | -------- | ----------- | -------------------------------------------------------------- |
| `quantity` | `number` | `undefined` | **required**, the numeric value to be displayed.               |
| `text`     | `string` | `undefined` | **required**, the descriptive text displayed below the number. |

- #### ## AdvisorCard

A component that displays an advisor's profile with their photo, name, location,
phone number, and a link to their profile page. The component is responsive and
adapts its layout for different screen sizes.

| Prop      | Type     | Default     | Description                                                  |
| --------- | -------- | ----------- | ------------------------------------------------------------ |
| `advisor` | `object` | `undefined` | **required**                                                 |
| `lang`    | `string` | `undefined` | **required**, the language code for generating profile URLs. |
| `link`    | `object` | `undefined` | **required**, contains `path` and `label` for profile links. |

`advisor` Object Structure

| Field   | Type   | Description                            |
| ------- | ------ | -------------------------------------- |
| `photo` | String | The URL of the advisor's photo.        |
| `alt`   | String | The alt text for the advisor's photo.  |
| `name`  | String | The advisor's full name.               |
| `city`  | String | The city where the advisor is located. |
| `phone` | String | The advisor's phone number.            |

- #### MCounter

The `MCounter` component is an animated counter that smoothly transitions
between numerical values when it enters the viewport. It uses the
`framer-motion` library for animations.

| Prop        | Default | Description                                                                               |
| ----------- | ------- | ----------------------------------------------------------------------------------------- |
| `value`     | `0`     | **Required**. The target numerical value for the counter.                                 |
| `direction` | `'up'`  | Determines the animation direction: `'up'` for counting up or `'down'` for counting down. |
| `className` | `null`  | An optional CSS class string for styling the counter.                                     |

- #### MWrap

The `MWrap` component is a wrapper that animates its children into view using
`framer-motion`. It provides a smooth transition from an off-screen position to
their final position on the page.

| Prop       | Default | Description                                                  |
| ---------- | ------- | ------------------------------------------------------------ |
| `children` | `null`  | **Required**. React nodes to be rendered inside the wrapper. |

- #### ButtonLink Component

The `ButtonLink` component is a versatile button and link component designed for
consistency and reusability in UI. It supports multiple styles, configurations,
and functionality while maintaining a clean API.

| Name         | Type          | Default         | Description                                                              |
| ------------ | ------------- | --------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------- | ----------- | ---------------------------------------------- |
| `children`   | `ReactNode`   | Required        | Content inside the button or link, such as text or icons.                |
| `typeStyle`  | `'primary'    | 'secondary'     | 'light'                                                                  | 'transparent'`                                                        | `'primary'` | Determines the style variant of the component. |
| `type`       | `'button'     | 'link'`         | Required                                                                 | Specifies if the component should render as a `<button>` or `<Link>`. |
| `settings`   | `LinkSettings | ButtonSettings` | Required                                                                 | Configuration for the action or navigation (depends on `type`).       |
| `disabled`   | `boolean`     | `false`         | Disables the button (only applicable if `type` is `'button'`).           |
| `icon`       | `boolean`     | `true`          | Toggles the display of the arrow icon.                                   |
| `teamCard`   | `boolean`     | `false`         | Modifies the icon rotation, used in special contexts (e.g., team cards). |
| `isExpanded` | `boolean`     | `false`         | Adjusts the icon rotation to indicate expanded or collapsed states.      |
| `className`  | `string`      | `''`            | Additional custom classes for styling the component.                     |

# Styles Variants

The `typeStyle` prop controls the visual style of the component:

| Variant       | Description                                                              |
| ------------- | ------------------------------------------------------------------------ |
| `primary`     | Dark accent background with hover/focus states for primary actions.      |
| `secondary`   | Lighter accent background with hover/focus states for secondary actions. |
| `light`       | Light text on a slate background for less prominent actions.             |
| `transparent` | Transparent button with text emphasis for minimal UI interactions.       |

- #### CategorySelect

The `CategorySelect` component provides a dropdown menu for selecting a category
of posts (e.g., news, articles, events). It uses React state, Next.js hooks, and
URL query parameters to synchronize the selected category with the URL, enabling
the category selection to persist across page reloads.

| Prop               | Type     | Default | Description                                                                                             |
| ------------------ | -------- | ------- | ------------------------------------------------------------------------------------------------------- |
| `selectPostByType` | `object` | —       | **Required.** Contains the title and options for post categories (`news`, `articles`, `events`, `all`). |

- #### CircleButton

A circular button component designed to display content within a round button
and handle click actions.

| Prop        | Default     | Description                                                                                      |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------ |
| `children`  | `undefined` | required, `ReactNode`, defines the content inside the button                                     |
| `action`    | `undefined` | required, `() => void`, function triggered when the button is clicked                            |
| `className` | `undefined` | optional, `string`, adds a custom CSS class to the CircleButton component for additional styling |

- #### DateStamp

The `DateStamp` component is a simple wrapper used to display a date or
timestamp in a styled `<p>` element. It is typically used to render text-based
date information with consistent styling.

| Prop       | Default     | Description                                                                               |
| ---------- | ----------- | ----------------------------------------------------------------------------------------- |
| `children` | `undefined` | Required. The content to be rendered inside the component, typically a date or timestamp. |

- #### DocumentCard

The `DocumentCard` component displays document information with options to view
and download a file. It includes styling, icons, and links for user interaction.

| Prop        | Default     | Description                                                                                   |
| ----------- | ----------- | --------------------------------------------------------------------------------------------- |
| `doc`       | `undefined` | Required. An object containing document details: `title` (string) and `fileUrl` (string).     |
| `fileLinks` | `undefined` | Required. An object containing labels for the links: `openFileLabel` and `downloadFileLabel`. |

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

- #### FormField

The `FormField` component renders an input field for forms, including
validation, error handling, and accessibility features. It is designed to be
flexible and customizable for various types of form inputs.

| Prop       | Type   | Default     | Description                                                                            |
| ---------- | ------ | ----------- | -------------------------------------------------------------------------------------- |
| `config`   | Object | `undefined` | **Required.** Configuration object containing field properties such as type and label. |
| `register` | Func   | `undefined` | **Required.** A function from `react-hook-form` for registering the input field.       |
| `errors`   | Object | `undefined` | **Optional.** An object from `react-hook-form` containing validation errors.           |
| `trigger`  | Func   | `undefined` | **Optional.** A function from `react-hook-form` to trigger field validation.           |

config Object Structure

| Field               | Type   | Description                                                           |
| ------------------- | ------ | --------------------------------------------------------------------- |
| `type`              | String | The type of the input (e.g., `text`, `email`, `tel`).                 |
| `label`             | String | The label displayed for the input field.                              |
| `name`              | String | The name of the field (used for `react-hook-form` registration).      |
| `placeholder`       | String | Placeholder text for the input field.                                 |
| `validationOptions` | Object | Validation options (e.g., `required`, `pattern`) for the input field. |

- #### FormSelect

The `FormSelect` component renders a custom select dropdown with enhanced
accessibility, validation, and interactivity. It is designed for seamless
integration into forms using `react-hook-form`.

| Prop       | Type     | Default     | Description                                                                       |
| ---------- | -------- | ----------- | --------------------------------------------------------------------------------- |
| `data`     | Object   | `undefined` | **Required.** Configuration object containing options, labels, and placeholders.  |
| `register` | Function | `undefined` | **Required.** A function from `react-hook-form` for registering the select field. |
| `setValue` | Function | `undefined` | **Required.** A function from `react-hook-form` to set the field value.           |
| `errors`   | Object   | `undefined` | **Optional.** An object from `react-hook-form` containing validation errors.      |
| `trigger`  | Function | `undefined` | **Optional.** A function from `react-hook-form` to trigger field validation.      |
| `required` | Boolean  | `true`      | **Optional.** Determines if the field is required. Default is `true`.             |

data Object Structure

| Field         | Type   | Description                                                                                  |
| ------------- | ------ | -------------------------------------------------------------------------------------------- |
| `name`        | String | Name of the field (used for registration).                                                   |
| `title`       | String | Label displayed for the select field.                                                        |
| `placeholder` | String | Placeholder text displayed when no option is selected.                                       |
| `options`     | Array  | List of options. Each option is an object with `value`, `label`, and optional `description`. |
| `description` | String | Fallback description displayed below the select field.                                       |
| `errorText`   | String | Error message displayed when validation fails.                                               |

- #### FormTextField Component

The `FormTextField` component renders a customizable multiline text input field
for forms, integrating validation and real-time character count functionality.
It is designed for use with `react-hook-form`.

| Prop       | Type     | Default     | Description                                                                            |
| ---------- | -------- | ----------- | -------------------------------------------------------------------------------------- |
| `config`   | Object   | `undefined` | **Required.** Configuration object containing field details like label and validation. |
| `register` | Function | `undefined` | **Required.** A function from `react-hook-form` to register the text field.            |
| `errors`   | Object   | `undefined` | **Optional.** An object from `react-hook-form` containing validation errors.           |
| `trigger`  | Function | `undefined` | **Optional.** A function from `react-hook-form` to trigger field validation.           |

- #### Gallery

Component for displaying image cards for sections

| Prop   | Default     | Description                                                                                                                     |
| ------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `data` | `undefined` | required, required, `Array<{ src: string; alt: string}>` - an array of objects containing `src` and `alt` for each target item. |

- #### GallerySearchInput

The `GallerySearchInput` component provides a search input for filtering content
in a gallery. It manages user input, updates the URL query parameters
dynamically, and synchronizes with the browser's navigation state.

| Prop          | Default     | Description                                         |
| ------------- | ----------- | --------------------------------------------------- |
| `placeholder` | `undefined` | Required. A string that sets the input placeholder. |

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

- #### Loader Component

The `Loader` component is a simple and customizable loading spinner built using
the `react-loader-spinner` library. It is ideal for indicating loading states in
your application.

| Prop          | Type    | Default | Description                                                           |
| ------------- | ------- | ------- | --------------------------------------------------------------------- |
| `color`       | String  | `grey`  | **Optional.** Defines the color of the loader's stroke.               |
| `size`        | Number  | `96`    | **Optional.** Specifies the width and height of the loader in pixels. |
| `strokeWidth` | Number  | `5`     | **Optional.** Sets the thickness of the loader's stroke.              |
| `visible`     | Boolean | `true`  | **Optional.** Controls whether the loader is visible or hidden.       |

- #### MediaCard Component

The `MediaCard` component is a responsive and interactive media link card. It
displays an image with a descriptive overlay, making it suitable for showcasing
links to external resources or media.

| Name       | Type     | Default  | Description                                             |
| ---------- | -------- | -------- | ------------------------------------------------------- |
| `imageUrl` | `string` | Required | The URL of the image to display in the card.            |
| `imageAlt` | `string` | Required | Alternative text for the image, used for accessibility. |
| `link`     | `string` | Required | The URL the card navigates to when clicked.             |

- #### NavEmbeddedLink

Component - main navigation nested link

| Prop          | Default     | Description                                                                                                   |
| ------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `data`        | `undefined` | required, `IMainNavEmbedded[]` - an array of objects for each nav item.                                       |
| `handleClose` | `undefined` | required, A callback function that is triggered to close the accordion menu. It does not take any parameters. |

- #### Pagination

The `Pagination` component provides navigation controls for paginated content.
It dynamically generates and renders page numbers while handling navigation
through query parameters.

| Prop          | Type     | Default | Description                                 |
| ------------- | -------- | ------- | ------------------------------------------- |
| `currentPage` | `number` | —       | Required. The currently active page.        |
| `totalPages`  | `number` | —       | Required. Total number of pages to display. |

- #### PartnersCard

Component card for the Partners section

| Prop   | Default     | Description                                      |
| ------ | ----------- | ------------------------------------------------ |
| `img`  | `undefined` | required, `string`, path to img                  |
| `name` | `undefined` | required, `string`, company name                 |
| `link` | `undefined` | required, `string`, link to an external resource |

- #### PostCard Component

The `PostCard` component is designed to display blog or gallery posts with
essential information, including an image (with a fallback), a title,
description, and metadata like the post date and label. It links to a detailed
page for each post, with a clean layout that adapts to various screen sizes.

| Name            | Type                   | Default  | Description                                                         |
| --------------- | ---------------------- | -------- | ------------------------------------------------------------------- | --------------------- |
| `post`          | `IPostBlogGalleryPage` | Required | An object containing the details of the post (image, title, etc.).  |
| `lang`          | `'uk'                  | 'en'`    | Required                                                            | Language of the page. |
| `readMoreLabel` | `string`               | Required | Text label for the "Read More" link.                                |
| `pageName`      | `string`               | Required | The name of the page for the post link (e.g., 'blog' or 'gallery'). |
| `labelTitle`    | `string`               | Optional | Custom label title displayed along with deadline (if applicable).   |

- #### Post Object

The `post` prop is an object with the following structure:

| Field      | Type     | Description                                                                                           |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `image`    | `string` | The URL of the post's preview image. If not provided, a default placeholder is displayed.             |
| `imageAlt` | `string` | Alternative text for the image.                                                                       |
| `label`    | `string` | The label or tag displayed over the image.                                                            |
| `title`    | `string` | The title of the post. Displayed as a clickable heading.                                              |
| `text`     | `string` | A brief description or excerpt of the post content.                                                   |
| `date`     | `string` | The post's publication date, formatted using the `formatDate` utility.                                |
| `postUrl`  | `string` | The unique URL slug for the post.                                                                     |
| `type`     | `string` | The type of the post (e.g., `'news'`, `'events'`, `'articles'`), passed to the `PostLabel` component. |

- #### PostCardCategorySelect Component

The `PostCardCategorySelect` component is used for rendering a category
selection dropdown that allows filtering posts by category. It also updates the
URL with the selected category.

| Field              | Type                | Description                                                                                                                                 |
| ------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `selectPostByType` | `ISelectPostByType` | The object containing options for filtering posts. It includes a `title` and an `options` array with `value` and `label` for each category. |
| `queryKey`         | `string`            | The query parameter key used to update the URL with the selected category value.                                                            |

- #### PostImageSlide

The `PostImageSlide` component displays an image with a responsive layout,
tailored for various screen sizes. The image is rendered using Next.js' `Image`
component, optimizing performance by providing proper width, height, and lazy
loading.

| Prop    | Type     | Default | Description                                                              |
| ------- | -------- | ------- | ------------------------------------------------------------------------ |
| `image` | `object` | —       | Required. An object containing `src` and `alt` properties for the image. |

- #### PostLabel

A versatile label component designed to display a tag or label with customizable
styles, such as indicating types of posts (e.g., "news", "events", "articles").

| Prop        | Default     | Description                                                                                                                                      |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`      | `undefined` | **Required**. A string indicating the type of the post (e.g., `'news'`, `'events'`, `'articles'`). The `type` determines the label's text color. |
| `children`  | `undefined` | **Required**. Content to be displayed within the label. Usually, this is the text of the label.                                                  |
| `typeStyle` | `'primary'` | Optional. Defines the label's style variant. Accepts `'primary'` or `'secondary'`. Affects background and position styles.                       |
| `className` | `undefined` | Optional. Additional CSS class names for further customization.                                                                                  |

- #### PostText

Description of the component and its purpose

| Prop   | Default | Description                    |
| ------ | ------- | ------------------------------ |
| `prop` | `value` | required/optional, description |

- #### PrivacyPolicyPortableText Component

The `PrivacyPolicyPortableText` component is used for rendering portable text
(formatted content) in a privacy policy section, using the `next-sanity`
library.

| Field   | Type                  | Description                                                                                                                                         |
| ------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value` | `PortableTextBlock[]` | An array of portable text blocks that represent the structured content of the privacy policy. Each block can be a heading, paragraph, or list item. |

- PortableTextBlock Object

The `value` prop contains an array of `PortableTextBlock` objects. These blocks
can have different types, such as `block`, `list`, or `marks`, which are
rendered in a specific way. Each block can have the following structure:

| Field      | Type              | Description                                               |
| ---------- | ----------------- | --------------------------------------------------------- |
| `children` | `React.ReactNode` | The content of the block (e.g., text or nested elements). |

- Block Components

The `PortableText` component is customized to render different types of blocks
with specific styles:

- **Headings**:
  - `h2`: Renders as a large heading with bold text and appropriate spacing.
  - `h3`: Renders as a smaller heading with bold text and appropriate spacing.
- **Paragraphs**:

  - `normal`: Renders as a standard paragraph with some margin and normal text.

- **Lists**:

  - `bullet`: Renders an unordered list with bullet points and padding.
  - `number`: Renders an ordered list with numbered points and padding.

- **List Items**:

  - `bullet`: Renders each list item without additional margin.
  - `number`: Renders each ordered list item without additional margin.

- **Marks**:

  - `strong`: Renders as bold text.
  - `em`: Renders as italicized text.
  - `underline`: Renders as underlined text.

- #### ProjectContent Component

The `ProjectContent` component is responsible for rendering a list of
project-related content, with customizable sections including titles, text, and
formatted portable text content.

| Field  | Type    | Description                                     |
| ------ | ------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `body` | `string | { title: string; text: PortableTextBlock[] }[]` | An optional array of content sections, where each section has a `title` and a `text` (formatted portable text). If `body` is a string, it's treated as a simple text block. |

**PortableTextBlock Object**

The `text` prop contains an array of `PortableTextBlock` objects. These blocks
represent various content types (e.g., headings, paragraphs, lists, quotes).
Each block can have the following structure:

| Field      | Type              | Description                                               |
| ---------- | ----------------- | --------------------------------------------------------- |
| `children` | `React.ReactNode` | The content of the block (e.g., text or nested elements). |

**Block Components**

The `PortableText` component is customized to render different types of blocks
with specific styles:

- **Headings**:
  - `h2`: Renders as a larger heading with bold text.
  - `h3`: Renders as a smaller heading with semi-bold text.
- **Paragraphs**:

  - `normal`: Renders as a standard paragraph with normal text.

- **Blockquote**:

  - `blockquote`: Renders a blockquote with a left border and italicized text.

- **Lists**:

  - `bullet`: Renders an unordered list with bullet points and padding.
  - `number`: Renders an ordered list with numbered items and padding.

- **List Items**:

  - `bullet`: Renders each unordered list item without additional margin.
  - `number`: Renders each ordered list item without additional margin.

- **Marks**:

  - `strong`: Renders as bold text.
  - `em`: Renders as italicized text.
  - `underline`: Renders as underlined text.
  - `link`: Renders a link with an optional icon and hover effects.

- #### ReadMoreBtn

The `ReadMoreBtn` component is a button that toggles the expanded state of a
card element, displaying different labels based on the expansion state. It is
used for showing more content within a card, such as detailed information or
actions.

| Field             | Type                   | Description                                                                                    |
| ----------------- | ---------------------- | ---------------------------------------------------------------------------------------------- |
| `readMoreLabel`   | `string`               | The label displayed on the button when the content is collapsed (e.g., "Read More").           |
| `className`       | `string` _(optional)_  | Additional CSS class(es) for custom styling of the button container.                           |
| `cardId`          | `number` _(optional)_  | The unique identifier of the card. Used to track the expansion state of the card.              |
| `type`            | `string` _(optional)_  | The type of the card (e.g., 'team'). Determines specific behavior (e.g., toggling expansion).  |
| `teamClosedLabel` | `string` _(optional)_  | The label displayed when the content is expanded (e.g., "Close").                              |
| `teamCard`        | `boolean` _(optional)_ | If `true`, it triggers specific actions related to team cards (like showing/hiding backdrops). |

**Component Behavior**

- **Expansion State**: The button toggles the expanded state of the card. If the
  card is expanded, it shows the `teamClosedLabel`; otherwise, it shows the
  `readMoreLabel`.
- **MutationObserver**: The component uses a `MutationObserver` to track changes
  to the `data-expanded` attribute on the card element, updating the button's
  state accordingly.
- **Card Element Interaction**: When clicked, the button toggles the
  `data-expanded` attribute on the card element and manages the visibility of a
  backdrop element related to the team card.

- #### ScrollToTopButton

A floating button that appears after the user scrolls down the page and enables
smooth scrolling back to the top when clicked. Useful for improving navigation
on long pages.

- #### Details:

The button becomes visible when the user scrolls more than 1000 pixels
vertically. Clicking the button triggers a smooth scroll to the top of the page.
Visibility is dynamically toggled using a combination of React state (isVisible)
and scroll event listeners.

- #### SearchInput

A component for entering search queries on a website. It has a separate state
for desktop devices, where a button appears that opens the search field when
clicked.

| Prop          | Default     | Description                                                        |
| ------------- | ----------- | ------------------------------------------------------------------ |
| `placeholder` | `undefined` | Required, `string`, sets the placeholder text for the input field. |
| `desktop`     | `undefined` | Optional, `boolean`, enables desktop mode with a button trigger.   |
| `lang`        | `undefined` | Required, `string`, determines the language for the search URL.    |
| `searchPage`  | `false`     | Optional, `boolean`, ensures visibility on large screens (`xl`).   |
| `className`   | `undefined` | Optional, `string`, additional CSS classes for styling.            |

- #### SelectByDate

The `SelectByDate` component is a dropdown menu used for sorting items by date,
providing the user with options to filter by "newest" or "oldest." It utilizes
React state and Next.js hooks for managing URL search parameters and rendering
the appropriate sort option.

| Prop               | Type     | Default | Description                                                                 |
| ------------------ | -------- | ------- | --------------------------------------------------------------------------- |
| `selectSortByDate` | `object` | —       | **Required.** Contains the title and options (`old` and `new`) for sorting. |

- #### Slider

| Prop             | Default     | Description                                                                                               |
| ---------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `slideComponent` | -           | required, `React.FC<any>`, It`s the component that will be rendered as side.                              |
| `slidesData`     | -           | required, `Record<string, any>[]`, It is a array with slide`s objects                                     |
| `section`        | -           | required, `cases`, `reviews`, `partners`, `advantages`, name of the section where slider will be rendered |
| `wrapClassName`  | `undefined` | optional, `string`, adds custom css class to the Swiper component.                                        |
| `slideClassName` | `undefined` | optional, `string`, adds custom css class to the SlideComponent component.                                |

- #### SliderButton

A button component designed for slider navigation, allowing users to navigate to
the previous or next slide with visual indicators.

| Prop              | Default     | Description                                                                                                              |
| ----------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| `ariaLabel`       | `undefined` | **Required**. A string used for the `aria-label` attribute to improve accessibility by describing the button's function. |
| `customClassName` | `undefined` | Optional. A string of additional CSS class names for customizing the button's appearance.                                |
| `direction`       | `undefined` | **Required**. A string indicating the button's direction, either `'prev'` or `'next'`.                                   |

- #### TargetCard

Component card for the Target section

| Prop   | Default     | Description              |
| ------ | ----------- | ------------------------ |
| `text` | `undefined` | required, `string`, text |

- #### TeamCard

A component for displaying team members, including their name, position,
description, photo, and a link to their Facebook profile.

| Prop              | Default     | Description                                                              |
| ----------------- | ----------- | ------------------------------------------------------------------------ |
| `teamMember`      | `undefined` | Required, `object`, contains team member details (name, position, etc.). |
| `readMoreLabel`   | `undefined` | Required, `string`, label for the "Read More" button.                    |
| `isExpanded`      | `false`     | Optional, `boolean`, determines whether the card is expanded.            |
| `teamClosedLabel` | `undefined` | Optional, `string`, label for closing the expanded state.                |
| `className`       | `undefined` | Optional, `string`, additional CSS classes for styling.                  |
|                   |

**Component Behavior**

- **Expansion State**: The card toggles between expanded and collapsed states.
  The button text changes based on whether the description is expanded or not.
- **Image & Social Link**: Displays the team member's photo, along with a social
  media icon (e.g., Facebook) that links to their profile.
- **Description**: Displays the team member's name, position, and a description
  with a maximum of 7 lines of text. The "Read More" button expands the
  description if the content exceeds this limit.

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
