import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        md: '42px',
        xl: '40px',
      },
    },
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)'],
      },
      lineHeight: {
        normal: '1.15',
      },
      colors: {
        textPrimary: '#051D35',
        textSecondary: '#000000',
        textAccent: '#003399',
        textSlate: '#666666',
        textLight: '#ffffff',

        bgLight: '#ffffff',
        bgSlate: '#EAEDF4',
        bgDark: '#051D35',
        bgLightSlate: '#F5F7FA',
        bgAccentLight: '#039',
        bgAccentDark: '#062365',
        bgIconEyeDark: '#424666',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
