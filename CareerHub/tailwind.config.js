/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "left-blue-5": "rgba(126, 144, 254, 0.05)", // 5% opacity
        "left-blue-10": "rgba(126, 144, 254, 0.10)", // 10% opacity
        "right-purple-5": "rgba(152, 115, 255, 0.05)", // 5% opacity
        "right-purple-10": "rgba(152, 115, 255, 0.10)", // 10% opacity
      },
      backgroundImage: {
        "gradient-5":
          "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)",
        "gradient-10":
          "linear-gradient(90deg, rgba(126, 144, 254, 0.10) 0%, rgba(152, 115, 255, 0.10) 100%)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
