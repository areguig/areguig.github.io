/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08080a',
          900: '#0e0e11',
          850: '#131317',
          800: '#1a1a1f',
          700: '#26262d',
          600: '#3a3a44',
        },
        bone: {
          DEFAULT: '#ecebe6',
          dim: '#a3a29b',
          mute: '#8a8981',
        },
        volt: {
          DEFAULT: '#d4ff3f',
          dim: '#a6c932',
        },
        ember: '#ff7a45',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        pulse_dot: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,255,63,0.5)' },
          '50%': { boxShadow: '0 0 0 6px rgba(212,255,63,0)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        blink: 'blink 1s step-end infinite',
        pulse_dot: 'pulse_dot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
