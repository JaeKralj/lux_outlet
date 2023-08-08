/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-30deg': 'linear-gradient(30deg, var(--tw-gradient-stops))',
        'all-women': "url('/images/women.jpg')",
      },
      colors: {
        background: {
          DEFAULT: '#F3F3F3',
          100: '#FFB800',
          200: '#FF7A00',
          300: '#EAA92A',
        },
        primary: {
          DEFAULT: '#464646',
          100: '#A4A4A4',
          200: '#ACACAC',
          300: '#C4C4C4',
          400: '#626262',
        },
        green: '#03A600',
      },
    },
  },
  plugins: [],
}
