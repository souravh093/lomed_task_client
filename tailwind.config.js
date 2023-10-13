/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0076CE",
      },
      backgroundImage: {
        "gradient-blur":
          "linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%)",
      },
      blur: {
        "blur-250": "250px",
      },
    },
  },
  plugins: [],
};
