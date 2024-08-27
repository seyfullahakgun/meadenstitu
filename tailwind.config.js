const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        "landing-bg": "url('/media/images/landing-bg.png')",
        "landing-bg-1": "url('/media/images/landing-bg1.png')",
        "landing-bg-2": "url('/media/images/landing-bg2.png')",
      },
      textShadow: {
        sm: "1px 1px 2px black",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        xl: "4px 4px 8px rgba(0, 0, 0, 0.5)",
      },
      colors: {
        primary: "#0C4842",
        secondary: "#C5AE9D",
        chesnut: "#92322B",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-sm": {
          textShadow: "1px 1px 2px black",
        },
        ".text-shadow-md": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-xl": {
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
        },
      });
    },
  ],
};
