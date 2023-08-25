import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        veryLight: "#d9d9d9",
        offsetCyan: "#1D938C",
        darkGreen: "#6B9080",
        greenish: "#A4C3B2",
        minty: "#CCE3DE",
        mintWhite: "#EAF4F4",
        basWhite: "#F6FFF8",
      },
    },
  },
  plugins: [],
} satisfies Config;
