// tailwindconfig.jsx
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // Agrega el siguiente bloque solo en producción para purificar CSS y eliminar clases no utilizadas
    process.env.NODE_ENV === "production" &&
      require("@fullhuman/postcss-purgecss")({
        content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      }),
  ],
};
