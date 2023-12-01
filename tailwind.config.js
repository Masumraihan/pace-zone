/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:"class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "primary":"#330E83",
        "secondary":"#0049B6",
        "danger":"#DD2A62",
        "warm-dark":"#FFB749",
        "warm-light":'#F9F871',
        "cyan-light":"#00E2C4",
        "sky":"#0074D3"
      }
    },
  },
  plugins: [],
}
