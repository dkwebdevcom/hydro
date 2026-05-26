/** @type {import('tailwindcss').config} */
module.exports = {
  content: ['./hugo_stats.json', './themes/hydro/layouts/**/*.html', './content/**/*.md'],
  theme: {
    extend: {
      colors: {
        primary: '#0057b8',
        secondary: '#c2410c',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}