const sharedConfig = require('tailwind-config/tailwind.config.js')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedConfig],
  content: ['./src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '0.5rem',
      screens: {
        sm: '640px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        heading: ['var(--font-heading)', ...fontFamily.sans]
      },
      height: {
        13: '3.25rem' // 52px
      }
    }
  }
}
