/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '360px',
      'xs': '430px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
  "light-blue": "#0099CC",
  "dark-blue": "#003366",
  "header-color": "#333333",
  "sad-yellow": "#FFC107",
  "happy-yellow": "#FF9800",
  "happy-yellow-hover": "#F57C00",
  "dark-gray": "#212121",
  "medium-gray": "#616161",
  "orange": "#FF5722",
  "light-gray": "#F5F5F5"
}
    },
  },
  plugins: [],
}

