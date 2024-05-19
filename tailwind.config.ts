import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gvonz: ['titlefont', "monospacce"],
        syoog: ['syoog', "sans-serif"],
      },
      backgroundImage: {
        'faqback': "url('/Images/bg.png')",
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
};
export default config;
