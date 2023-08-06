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
          200: '#ff00ff',
          300: '#bd58e7',
          400: '#8e64d9',
          500: '#c13de3',
          600: '#590d90',
        },
        azul: {
          300: '#90caf1',
          400: '#628cc7',
          500: '#6bc5f3',
          600: '#009de0',
        },
        cinza: {
          600: '#575757',
        },
      }
    },
  },
  plugins: [],
}
