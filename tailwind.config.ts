import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    "./mdx-components.tsx",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#21C55D',
              foreground: '#FFFFFF',
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#0BDC58',
              foreground: '#FFFFFF',
            },
          },
        },
      },
    }),
  ],
};
export default config;
