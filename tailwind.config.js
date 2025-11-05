/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f0ff",
          100: "#cce0ff",
          200: "#99c2ff",
          300: "#66a3ff",
          400: "#3385ff",
          500: "#007aff",
          600: "#0066d1",
          700: "#004ea0",
          800: "#003a78",
          900: "#002a57",
        },
        secondary: {
          50: "#f0f0ff",
          100: "#e0e0ff",
          200: "#c2c2ff",
          300: "#a3a3ff",
          400: "#8585ff",
          500: "#6666ff",
          600: "#5050d1",
          700: "#4040a0",
          800: "#303078",
          900: "#202057",
        },
        dark: {
          background: {
            DEFAULT: "#111827",
          },
          title: {
            DEFAULT: "#f3f4f6",
          },
          text: {
            DEFAULT: "#e5e7eb",
          },
          border: {
            DEFAULT: "#4b5563",
          },
        },
        light: {
          background: {
            DEFAULT: "#ffffff",
          },
          title: {
            DEFAULT: "#111827",
          },
          text: {
            DEFAULT: "#1f2937",
          },
          border: {
            DEFAULT: "#d1d5db",
          },
        },
      },
    },
  },
  plugins: [],
};
