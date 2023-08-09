/** @type {import('tailwindcss').Config} */
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
      '32': '2rem',
      '40': '2.5rem',
      '60': '3.75rem'
    },
    colors: {
      white: '#FFFFFF'
    }
  },
  plugins: [],
}

