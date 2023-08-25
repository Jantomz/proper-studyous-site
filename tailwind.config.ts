import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        veryLight: "#d9d9d9",
        offsetCyan: "#1D938C",
        darkGreen: "#6B9080",
        darkGreenTrans: "rgba(107, 144, 128,0.8)",
        greenish: "#A4C3B2",
        greenishTrans: "rgba(164, 195, 178, 0.8)",
        minty: "#CCE3DE",
        mintWhite: "#EAF4F4",
        basWhite: "#F6FFF8",
        darkestGreen: "#507364",
        darkestGreenTrans: "rgb(80, 115, 100, 0.8)",
        midDarkGreen: "#6B9080",
        midDarkGreenTrans: "rgba(107, 144, 128, 0.8)",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
