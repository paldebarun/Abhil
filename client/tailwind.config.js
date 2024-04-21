/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
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
        slideBottom: `slideBottom 1s ease forwards`,
      },

      colors: {
        primary_color: "#2A4359",
        secondary_color: "#D9A441",
        background_color: "#F2F2F2",
        text_color1: "#858585",
      },
      screens: {
        xs:"475px",
      }

    },
  },
  plugins: [],
};
