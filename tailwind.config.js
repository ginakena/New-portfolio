/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#EEF0EF",
        paperDim: "#E4E7E5",
        ink: "#14161A",
        inkSoft: "#3A3D44",
        muted: "#6B6F76",
        line: "#D2D5D6",
        accent: "#2B4C7E",
        accentSoft: "#4A6798",
        amber: "#C97A2B",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
