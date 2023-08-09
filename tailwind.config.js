/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  screens: {
    'sm': '600px',
    'md': '768px',
    'lg': '1100px',
    'xl': '1280px',
    '2xl': '1536px',
  },
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'normal': 400,
        'medium': 500
      }
    },
    fontSize: {
      '6': '0.375rem',
      '10': '0.625rem',
      '12': '0.75rem',
      '14': '0.875rem',
      '16': '1rem',
      '18': '1.125rem',
      '20': '1.25rem',
      '22': '1.375rem',
      '24': '1.5rem',
      '25': '1.563rem',
      '28': '1.75rem',
      '30': '1.875rem',
      '32': '2rem',
      '40': '2.5rem',
      '60': '3.75rem'
    },
    colors: {
      white: '#FFFFFF',
      grey: '#D0D5DD',
      gray_50: '#F9FAFB',
      gray_500: '#667085',
      gray_700: '#344054',
      gray_100: '#F2F4F7',
      gray_200: '#EAECF0',
      gray_300: '#D0D5DD',
      gray_900: '#101828',
      primary_50: '#F9F5FF',
      primary_700: '#6941C6',
      primary_800: '#53389E',
      primary_300: '#D6BBFB',
      primary_600: '#7F56D9',
      primary_500: '#9E77ED',
      gray_600: '#475467'
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none'
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        }
      })
    })
  ],
}

