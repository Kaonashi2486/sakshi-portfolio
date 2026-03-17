/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#080810',
        surface: '#0f0f1a',
        card: '#13131f',
        border: '#1e1e2e',
        purple: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        orange: {
          400: '#fb923c',
          500: '#f97316',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'grain': 'grain 0.5s steps(2) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(1deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '20%': { transform: 'translate(3%, 2%)' },
          '30%': { transform: 'translate(-1%, 4%)' },
          '40%': { transform: 'translate(4%, -1%)' },
          '50%': { transform: 'translate(-3%, 2%)' },
          '60%': { transform: 'translate(2%, 3%)' },
          '70%': { transform: 'translate(-4%, -2%)' },
          '80%': { transform: 'translate(3%, -3%)' },
          '90%': { transform: 'translate(-2%, 1%)' },
        }
      }
    },
  },
  plugins: [],
}
