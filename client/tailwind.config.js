/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideright: {
          from: {
            transform: `translateX(-100px)`,
            opacity: 0,
          },

          to: {
            transform: `translateX(0px)`,
            opacity: 1,
          },
        },

        slideBottom: {
          from: {
            transform: `translateY(-50px)`,
            opacity: 0,
          },

          to: {
            transform: `translateY(0px)`,
            opacity: 1,
          },
        },
      },

      animation: {
        slideright: `slideright 1s ease forwards`,
        slideBottom: `slideBottom 1s ease forwards`,
      },

      colors: {
        primary_color: "#2A4359",
        secondary_color: "#ffb901",
      },
    },
  },
  plugins: [],
};
