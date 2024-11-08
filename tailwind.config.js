/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #4fb968 30%, #00b2a9 90%)",
      },
      fontSize: {
        "3.6xl": "3.6rem",
        "4.1xl": "2.6rem",
        "5.5xl":"3.5rem"
      },
      fontWeight:{
        "extra":"300",
      },
      width:{
        "1/7":"65%",
      }
    },
  },
  plugins: [],
};
