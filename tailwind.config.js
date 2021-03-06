/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: "media",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  options: {
    safelist: {
      standard: [/^bg-/, /^text-/],
    },
  },
  theme: {
    colors: {
      white: "#FFFFFF",
      gray: "#999999",
      darkblue: "#050D28",
      nand: {
        lighter: "#52B8CA",
        default: "#008899",
        dark: "#005B6B"
      },
      ReD: "#950008",
      iRed: "#BA160C",
      Twitter: "#1B9DF0",
      YouTube: "#FF0000",
      Facebook: "#1877F2",
      Instagramm: "#C13584",
      Steam: '#2A475E',
      SoundCloud: '#FF4400',
      Spotify: '#1DB954',
      Github: '#424242',
      Discord: '#5865F2',

      test: "#FF4F00",
    },
  },
  extend: {
    fontFamily: {
    }
  },
  plugins: [
    require('prettier-plugin-tailwindcss')
  ],
};
