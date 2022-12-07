/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  daisyui: {
    themes: [
      {
        light: {
          primary: "#fff",
          secondary: "#bae6fd",
          accent: "#374151", // Navbar backGround Color
          neutral: "#37CDBE", // Navbar text
          "base-100": "#ffffff",
          info: "#0ea5e9",
          success: "#000000", // backGround color
          warning: "#1B1821", // button color
          error: "#dc2626",
        },
      },
      {
        dark: {
          primary: "#374151",
          secondary: "#c7d2fe",
          accent: "#000",
          neutral: "#ffffff",
          "base-100": "#1F2937",
          info: "#3ABFF8",
          success: "#1BBB70",
          warning: "#fcfafa",
          error: "#be123c",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
