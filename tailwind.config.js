/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Tes couleurs personnalisées
        foreground: "var(--foreground)",
      },
      // Ajout des personnalisations supplémentaires (facultatif)
      animation: {
        floatUp: "floatUp 5s ease-in infinite",
      },
      keyframes: {
        floatUp: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-100vh)" },
        },
      },
    },
  },
  plugins: [],
};
