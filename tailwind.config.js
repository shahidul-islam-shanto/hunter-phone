/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      fontVina: ["Vina Sans", "sans-serif"],
      fontManrope: ["Manrope", "sans-serif"],
      grotesk: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#0D6EFD0D",
        secondary1: "#ffffff",
        nu10: "#0D6EFD",
        nu20: "#0D6EFD0D",
        nu30: "#000000",
        nu40: "#100F0F0D",
        nu50: "#CFCFCF",
        nu60: "#49a84c",
        nu70: "#f6bb02",
        nu80: "#49a84c",
        nu90: "#49a84c"
      },
      screens: {
        xs: "380px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1296px",
        "3xl": "1600px",
        "4xl": "1700px",
        "5xl": "1940px",
      },
      keyframes: {
        scale: {
          "0%, 40%, 100%": { transform: "scaleY(0.05)" },
          "20%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        scale: "scale 0.9s ease-in-out infinite",
      },
    },
  },
  // plugins: plugins,
};
