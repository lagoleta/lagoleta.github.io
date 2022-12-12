/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*{html,js}',
    './index.html',
    './mi-icon-v2/para-icons-v2-webfont.woff2',
  ],
  theme: {
    extend: {},
    color: {
      transparent : 'transparent',
      current : 'currentColor',
      blowcard : '#bdbdc7ff',
      'silver': '#ecebff',
    },
    fontFamily: {
      icons: ['para-icons-v2-webfont'],
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
