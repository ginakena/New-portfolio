/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#efa45907",
        paperDim: "#f8f6f3",
        ink: "#2d4678",
        inkSoft: "#043ab9",
        muted: "#427de3",
        line: "#2783a1",
        accent: "#246edd",
        accentSoft: "#1867ed",
        amber: "#f3eee9",
      },
      fontFamily: {
        display: ["'Caacupé One'", "sans-serif"],
        body: ["'Josefin Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
