module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#FF4FCE',
          blue: '#00F0FF',
          green: '#39FF14',
          yellow: '#FFF700',
          purple: '#A259FF',
          bg: '#18181B',
          accent: '#FF00A8',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
