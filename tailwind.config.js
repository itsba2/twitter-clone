module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    extend: {
      width: {
        600: '600px',
      },
      colors: {
        primary: {
          base: 'rgb(29, 155, 240)',
          dark: 'rgb(26, 140, 216)',
          light: 'rgb(232, 245, 253)',
        },
        secondary: {
          black: 'rgb(15, 20, 25)',
          darkGray: 'rgb(83, 100, 113)',
          lightGray: 'rgb(170, 184, 194)',
          xLightGray: 'rgb(231, 231, 232)',
          xxLightGray: 'rgb(239, 243, 244)',
          white: 'rgb(255, 255, 255)',
        },
      },
    },
  },
  plugins: [],
};
