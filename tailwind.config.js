/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"], // add this line],
  theme: {
    extend: {
      blur: {
        'maximo': '200px', // Agregar un valor personalizado
      }
    },
  },
  plugins: [
    require("tailwindcss-motion"),
    require("flowbite/plugin"), // add this line
  ],
};
