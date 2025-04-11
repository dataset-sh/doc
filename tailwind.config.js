const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["'Noto Sans', sans-serif"],
        serif: ["'Lora', serif"],
        reasons: ["'Zen Maru Gothic', serif"],
        silkscreen: ["'Silkscreen', sans-serif"],
        lilitaOne: ["'Lilita One', sans-serif"],
        notoSans: ["'Noto Sans', sans-serif"],
        lora: ["'Lora', serif"],
        kode: ["'Kode Mono', monospace"],
        rocksalt: ["'Rock Salt', cursive"],
        inter: ["'Inter', sans-serif"],
      },
    },
  },
  plugins: [],
};
