/* eslint-disable */
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    tailwindcss('src/tailwind.config.js'),
    process.env.NODE_ENV === 'production' &&
      purgecss({
        content: ['./src/**/*.js'],
        css: ['./src/**/*.css'],
      }),
  ],
};
