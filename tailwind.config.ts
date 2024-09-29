import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1c1c1c',
        'placeholder': 'rgba(0,0,0,0.2)'
      },
      borderWidth: {
        1: "1px"
      }
    },
  },
  plugins: [],
};
export default config;
