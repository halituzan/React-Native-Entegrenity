/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      // animation: {
      //   move: "move 1.5s ease-in-out infinite",
      //   "ad-0.1": "animation-delay: 0.1s;",
      //   "ad-0.2": "animation-delay: 0.2s;",
      //   "ad-0.3": "animation-delay: 0.3s;",
      //   "ad-0.4": "animation-delay: 0.4s;",
      //   "ad-0.5": "animation-delay: 0.5s;",
      //   "ad-0.6": "animation-delay: 0.6s;",
      //   "ad-0.7": "animation-delay: 0.7s;",
      //   "ad-0.8": "animation-delay: 0.8s;",
      //   "ad-0.9": "animation-delay: 0.9s;",
      //   "ad-1": "animation-delay: 1s;",
      //   "ad-1.1": "animation-delay: 1.1s;",
      //   "ad-1.2": "animation-delay: 1.2s;",
      //   "ad-1.3": "animation-delay: 1.3s;",
      //   "ad-1.4": "animation-delay: 1.4s;",
      // },
      // keyframes: {
      //   wiggle: {
      //     "0%, 100%": { transform: "rotate(-3deg)" },
      //     "50%": { transform: "rotate(3deg)" },
      //   },
      // },
    },
  },
  plugins: [],
};

// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
