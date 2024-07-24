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
      letter: "#FFFFFF",
      secondary: "#212121",
      tertiary: "#7A288A",
      complex: '#222222',
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
