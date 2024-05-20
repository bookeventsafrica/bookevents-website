import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      2078: "2078px",
      "3xl": "3072px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: {
        100: "#e2ceff",
        200: "#CAA8F5",
        300: "#BB8CEA",
        400: "#A372CE",
        500: "#915CB8",
        600: "#8146A4",
        700: "#75408E",
        800: "#653479",
      },
      secondary: {
        100: "#FCF8DF",
        200: "#FDF4C9",
        300: "#FFF4B6",
        400: "#FFF0A2",
        500: "#FFE965",
        600: "#FBE017",
      },
      tertiary: {
        100: "#FFEBFA",
        200: "#FFDDF8",
        300: "#FFCDF3",
        400: "#FFBBEE",
        500: "#E8B9DD",
        600: "#DDB2CE",
      },
      red: colors.red,
      black: colors.black,
      green: colors.green
    },
    container: {},
    content: {
      none: 'none'
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      help: 'help',
      'not-allowed': 'not-allowed'
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    extend: {
      backgroundImage: {
        'about-img': "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),url('/img/about-us.png')",
        'graduation-party': "url('/img/graduation-party.png')",
        'hero-home': "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('/img/home.avif')",
        'hero-discovery': "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('/img/discovery.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
