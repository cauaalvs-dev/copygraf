import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1a56db',
          dark: '#1145b7',
          light: '#ebf0fd',
        },
      },
    },
  },
  plugins: [],
}

export default config