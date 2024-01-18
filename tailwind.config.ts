import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
} satisfies Config