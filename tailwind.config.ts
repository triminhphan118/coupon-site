import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'var(--font-jost)',
        secondary: 'var(--font-manrope)',
      },
      colors: {
        primary: '#131316',
        secondary: '#E85C0D',
        grayDarkest: '#131315',
        grayDarker: '#222126',
        borderGray: '#eeeef0',
        borderDark: '#212123',
        grayColor: '#f7f7f7',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
