import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF9F7',
        'dark-gray': '#1C1C1A',
        'mid-gray': '#6B6B6B',
        'rose-gold': '#C9956A',
        'light-rice': '#F0EAE0',
        'border-light': '#E5E0D8',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        'noto-serif-tc': ['Noto Serif TC', 'serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '44px' }],
        '5xl': ['48px', { lineHeight: '52px' }],
        '6xl': ['60px', { lineHeight: '64px' }],
      },
    },
  },
  plugins: [],
}

export default config
