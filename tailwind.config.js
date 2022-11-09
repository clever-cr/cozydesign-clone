/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#223240",
        secondary: "#d4ac8e",
        brown: "#b55730",
        light: "#e4ded5",
        lighter: "#DACDC0",
        lightbrown: "#c47d57",
        darkgreen: "#2d4850",
        pink: "#d90f54",
        lightblue: "#1da1f2",
        darkblue: "#2977c9",
        darkestblue: "#4267b2",
        darkpink: "#e4405f",
        red: "#c4302b",
        dark: "#16313a",
      },
      fontFamily: {
        super: "Fraunces72ptsupersoft, sans-serif",
        fraunc: "Fraunces144ptsupersoft, sans-serif",
        Geomanist: "Geomanist, sans-serif",
      },
    },
  },
  plugins: [],
};
