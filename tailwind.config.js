/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  daisyui: {
    themes: [
      {
        light: {
          primary: "#e5e7eb",
          secondary: "#bae6fd",
          accent: "#999fa8", // Navbar backGround Color
          neutral: "#37CDBE", // Navbar text
          "base-100": "#ffffff",
          info: "#0ea5e9",
          success: "#d1d5db", // backGround color
          warning: "#1B1821", // button color
          error: "red",
        },
      },
      {
        dark: {
          primary: "#374151",
          secondary: "#c7d2fe",
          accent: "#d1d5db",
          neutral: "#ffffff",
          "base-100": "#1F2937",
          // info: "#4a4b4c",
          success: "#4b5563",
          warning: "#fcfafa",
          error: "red",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
