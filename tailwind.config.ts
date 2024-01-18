import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    platte: {
      bd: ['#000000', '#ffffff'],
    },
    extend: {
      colors: {
        py: "rgb(var(--py-rgb))",
        sy: "rgb(var(--sy-rgb))",
        cl: "rgb(var(--cl-rgb))",
        bd: "rgb(var(--bd-rgb))",
        "mxy": "red"
      },
      backlgroundColor: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  darkMode: "class",
  plugins: [
    // plugin(function ({ addUtilities }) {
    //   addUtilities({
    //     '.phone': {
    //       'backlground': 'red',
    //     }
    //   })
    // })
  ],
}
export default config
