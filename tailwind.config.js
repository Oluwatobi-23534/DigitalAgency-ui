/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: ["Poppins", "sans-serif"],
    },
    colors: {
      primary: "#663399",
      light: "#F1F5F9",
      service: "#455A64",
      brand: "#213737",
      letter: "#FFFFFF",
      secondary: "#050808",
      tertiary: "#7A288A",
      complex: '#0e1818',
      slate: "#718096",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: "3rem"
      },
    }
  },
  plugins: [

  ],
};
