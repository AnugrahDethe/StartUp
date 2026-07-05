/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030305',
        primary: '#6366F1',
        accent: '#06B6D4',
        card: 'rgba(255, 255, 255, 0.02)',
        cardBorder: 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(3, 3, 5, 0) 50%)',
        'conic-gradient': 'conic-gradient(from 180deg, transparent, rgba(99,102,241,0.3), transparent)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'reverse-spin': 'reverse-spin 15s linear infinite',
        'gradient-x': 'gradient-x 8s linear infinite',
        'gradient-shift': 'gradient-shift 12s ease infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
