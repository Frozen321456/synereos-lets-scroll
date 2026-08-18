import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#0b0d12',
        surface: '#12151d',
        'surface-2': '#171b25',
        line: 'rgba(237,239,243,0.09)',
        'line-strong': 'rgba(237,239,243,0.16)',
        ink: '#edeff3',
        'ink-dim': '#8b92a3',
        'ink-faint': '#565d6e',
        signal: '#7cffc4',
        'signal-dim': 'rgba(124,255,196,0.35)',
        ember: '#ff6b4a',
        'glass-bg': 'rgba(23,27,37,0.55)',
        'glass-bg-soft': 'rgba(23,27,37,0.35)',
        'glass-border': 'rgba(237,239,243,0.12)',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Hanken Grotesk', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(.16,.8,.28,1) forwards',
        pulse: 'pulse 2.6s ease-in-out infinite',
        'orb-float': 'orbFloat 22s ease-in-out infinite',
        cue: 'cue 1.8s ease-in-out infinite',
        preload: 'preload 1.1s ease-in-out infinite',
        float: 'float 20s ease-in-out infinite',
        drift: 'drift 20s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.55', transform: 'scale(0.78)' },
        },
        orbFloat: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.4' },
          '25%': { transform: 'translate(30px, -20px) scale(1.05)', opacity: '0.6' },
          '50%': { transform: 'translate(-20px, 30px) scale(0.95)', opacity: '0.5' },
          '75%': { transform: 'translate(15px, 25px) scale(1.02)', opacity: '0.55' },
        },
        cue: {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '40%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(17px)' },
        },
        preload: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(350%)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.4' },
          '25%': { transform: 'translate(30px, -20px) scale(1.05)', opacity: '0.6' },
          '50%': { transform: 'translate(-20px, 30px) scale(0.95)', opacity: '0.5' },
          '75%': { transform: 'translate(15px, 25px) scale(1.02)', opacity: '0.55' },
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        'void-glow': 'radial-gradient(680px 480px at 82% -6%, rgba(124,255,196,0.10), transparent 60%), radial-gradient(560px 420px at 6% 18%, rgba(255,107,74,0.06), transparent 60%)',
        'sky-grad': 'linear-gradient(178deg, color-mix(in srgb, #7cffc4 5%, #0b0d12) 0%, #0b0d12 55%, color-mix(in srgb, #7cffc4 3%, #0b0d12) 100%)',
        'sky-glow': 'radial-gradient(60% 42% at 74% 16%, rgba(124,255,196,0.12), transparent 70%), radial-gradient(46% 34% at 50% 50%, rgba(124,255,196,0.06), transparent 70%)',
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
      transitionTimingFunction: {
        'ease': 'cubic-bezier(.16,.8,.28,1)',
        'ease-out': 'cubic-bezier(.16,1,.3,1)',
      },
    },
  },
  plugins: [],
}
export default config