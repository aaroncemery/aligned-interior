/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['var(--font-cinzel)'],
        belleAurore: ['var(--font-belle-aurore)'],
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
