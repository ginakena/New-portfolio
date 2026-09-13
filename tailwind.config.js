/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#d6f0cf",
        paperDim: "#FBE6C2",
        ink: "#ec7777",
        inkSoft: "#EAE2D6",
        muted: "#99b8ee",
        line: "#dee4e6",
        accent: "#b9d1f5",
        accentSoft: "#8f99ac",
        amber: "#f3eee90e",
      },
      fontFamily: {
        display: ["'Caacupé One'", "sans-serif"],
        body: ["'Josefin Sans'", "sans-serif"],
        mono: ["'Playfair Display'", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
