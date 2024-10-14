/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
