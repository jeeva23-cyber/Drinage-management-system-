/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#101615',
          subtle: '#0B0F0E',
          card: '#141C18',
        },
        surface: {
          elevated: '#18211D',
          secondary: '#202B25',
          border: '#35443B',
          divider: '#35443B',
        },
        copper: {
          DEFAULT: '#C17A45',
          light: '#D99462',
          dark: '#8C532B',
          glow: 'rgba(193, 122, 69, 0.25)',
        },
        amber: {
          safety: '#E9B949',
          dim: 'rgba(233, 185, 73, 0.15)',
        },
        teal: {
          signal: '#45B8A0',
          dim: 'rgba(69, 184, 160, 0.15)',
        },
        mist: {
          DEFAULT: '#DCE3DC',
          bright: '#F0F5F0',
        },
        muted: {
          green: '#96A59B',
          dark: '#68786E',
        },
        alert: {
          red: '#B94C42',
          dim: 'rgba(185, 76, 66, 0.15)',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'system-ui', 'sans-serif'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'hatch-pattern': 'repeating-linear-gradient(45deg, rgba(53, 68, 59, 0.25), rgba(53, 68, 59, 0.25) 6px, transparent 6px, transparent 12px)',
        'hatch-copper': 'repeating-linear-gradient(45deg, rgba(193, 122, 69, 0.15), rgba(193, 122, 69, 0.15) 6px, transparent 6px, transparent 12px)',
        'engineering-grid': 'linear-gradient(to right, rgba(53, 68, 59, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(53, 68, 59, 0.3) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-size': '24px 24px',
      },
    },
  },
  plugins: [],
}
