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

        slideup: {
          from: {
            transform: `translateY(30px)`,
            opacity: 0,
          },

          to: {
            transform: `translateY(0px)`,
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
        slideright: `slideright 1.5s ease forwards`,
        slideup: `slideup 1.5s ease forwards`,
        slideBottom: `slideBottom 1s ease forwards`,
      },

      colors: {
        primary_color: "#2A4359",
        secondary_color: "#ffb901",
        background_color: "#F2F2F2",
        text_color1: "#858585",
      },

      backgroundImage: {
        pageHeader_background:
          "url(`https://gtkit.rometheme.pro/genical/wp-content/uploads/sites/18/2023/02/mental-health-support-holding-hands-and-group-coun-3QDQQDVa.jpg`)",
      },
    },
  },
  plugins: [],
};
