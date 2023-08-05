/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        roxo: {
          300: '#bd58e7',
          400: '#8e64d9',
          600: '#590d90',
        },
        azul: {
          400: '#628cc7',
        },
        cinza: {
          600: '#575757',
        },
      }
    },
  },
  plugins: [],
}
