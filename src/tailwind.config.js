module.exports = {
  theme: {
    extend: {
      width: { '15': '3.75rem' },
      height: { '15': '3.75rem' },
      margin: { '15': '3.75rem' },
      padding: { '15': '3.75rem' },
      gridTemplateRows: {
        '9': 'repeat(9, minmax(0, 1fr))',
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
