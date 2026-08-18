/**
 * Synereos Design System Tokens
 * Luxury-minimal + computational precision
 * Apple × Linear × Vercel × Research Lab
 */

export const tokens = {
  // Color System
  colors: {
    // Core
    void: '#0b0d12',
    surface: '#12151d',
    'surface-2': '#171b25',
    surface3: '#1e222e',
    
    // Lines
    line: 'rgba(237,239,243,0.09)',
    'line-strong': 'rgba(237,239,243,0.16)',
    'line-subtle': 'rgba(237,239,243,0.05)',
    
    // Text
    ink: '#edeff3',
    'ink-dim': '#8b92a3',
    'ink-faint': '#565d6e',
    
    // Accents
    signal: '#7cffc4',
    'signal-dim': 'rgba(124,255,196,0.35)',
    'signal-strong': '#00e6a0',
    ember: '#ff6b4a',
    'ember-dim': 'rgba(255,107,74,0.35)',
    amber: '#fbbf24',
    'amber-dim': 'rgba(251,191,36,0.35)',
    
    // Glass
    'glass-bg': 'rgba(23,27,37,0.55)',
    'glass-bg-soft': 'rgba(23,27,37,0.35)',
    'glass-bg-strong': 'rgba(23,27,37,0.75)',
    'glass-border': 'rgba(237,239,243,0.12)',
    'glass-border-strong': 'rgba(237,239,243,0.20)',
    'glass-blur': '18px',
    'glass-blur-strong': '30px',
  },
  
  // Typography
  typography: {
    display: '"Fraunces", serif',
    body: '"Hanken Grotesk", sans-serif',
    mono: '"IBM Plex Mono", monospace',
    ui: '"Hanken Grotesk", sans-serif',
    
    // Scale
    sizes: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem',    // 72px
      '8xl': '6rem',      // 96px
      '9xl': '8rem',      // 128px
    },
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      tight: 1.02,
      snug: 1.375,
      normal: 1.6,
      relaxed: 1.7,
      loose: 1.8,
    },
    letterSpacing: {
      tight: '-0.03em',
      normal: '0',
      wide: '.02em',
      wider: '.1em',
      widest: '.25em',
    },
  },
  
  // Spacing
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
  },
  
  // Border Radius
  radii: {
    none: '0',
    sm: '0.25rem',    // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    none: 'none',
    xs: '0 1px 2px rgba(0,0,0,0.3)',
    sm: '0 2px 4px rgba(0,0,0,0.35)',
    md: '0 4px 12px rgba(0,0,0,0.4)',
    lg: '0 8px 24px rgba(0,0,0,0.45)',
    xl: '0 16px 48px rgba(0,0,0,0.5)',
    '2xl': '0 24px 64px rgba(0,0,0,0.55)',
    inner: 'inset 0 2px 4px rgba(0,0,0,0.3)',
    glow: '0 0 32px rgba(124,255,196,0.15)',
    'glow-strong': '0 0 64px rgba(124,255,196,0.25)',
    'ember-glow': '0 0 32px rgba(255,107,74,0.15)',
    'amber-glow': '0 0 32px rgba(251,191,36,0.15)',
  },
  
  // Z-index
  zIndex: {
    hide: -1,
    base: 0,
    dropdown: 100,
    sticky: 200,
    modal: 300,
    popover: 400,
    tooltip: 500,
    toast: 600,
    loader: 999,
  },
  
  // Breakpoints
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Transitions
  transitions: {
    fast: '150ms cubic-bezier(.16,.8,.28,1)',
    normal: '250ms cubic-bezier(.16,.8,.28,1)',
    slow: '350ms cubic-bezier(.16,.8,.28,1)',
    slower: '500ms cubic-bezier(.16,.8,.28,1)',
    spring: '500ms cubic-bezier(.34,1.56,.64,1)',
  },
  
  // Easing
  easing: {
    ease: 'cubic-bezier(.16,.8,.28,1)',
    'ease-out': 'cubic-bezier(.16,1,.3,1)',
    'ease-in': 'cubic-bezier(.36,0,.66,-.56)',
    'ease-in-out': 'cubic-bezier(.42,0,.58,1)',
    spring: 'cubic-bezier(.34,1.56,.64,1)',
  },
  
  // Animation Durations
  durations: {
    instant: '0ms',
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    slower: '500ms',
    slowest: '700ms',
  },
  
  // Container
  container: {
    maxWidth: '1180px',
    padding: 'clamp(20px,5vw,64px)',
  },
  
  // Grid
  grid: {
    columns: 12,
    gap: '1.5rem',
  },
  
  // Motion
  motion: {
    reduced: {
      duration: '0.001ms',
      transition: '0.001ms',
    },
    default: {
      duration: '500ms',
      ease: 'cubic-bezier(.16,.8,.28,1)',
    },
  },
} as const;

export type Tokens = typeof tokens;