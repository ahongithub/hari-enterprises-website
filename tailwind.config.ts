import type { Config } from 'tailwindcss';

/**
 * Design system for Hari Enterprises.
 * Palette derived from the company logo (furnace red "Hari" + engineering navy
 * "ENTERPRISES") and the refractory/thermal subject world.
 *  - ink      : deep engineering navy — primary brand + text
 *  - ember    : disciplined furnace red — accent / primary CTA (used sparingly)
 *  - firebrick: warm ochre — secondary warmth, thermal cue
 *  - steel    : cool graphite greys — neutrals, borders, the logo's "grating" lines
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#12233d',
          900: '#0c1a2e',
          800: '#12233d',
          700: '#1c3453',
          600: '#2b4769',
        },
        ember: {
          DEFAULT: '#c8322b',
          600: '#b12a24',
          700: '#93211c',
        },
        firebrick: {
          DEFAULT: '#c46a3a',
          light: '#e8a86f',
        },
        steel: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#dce0e7',
          300: '#c2c9d4',
          400: '#98a2b3',
          500: '#6b7688',
          600: '#4d5768',
          700: '#3a4353',
          800: '#252c39',
          900: '#161b24',
        },
        paper: '#fbfbf9',
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.08em' }],
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(18,35,61,0.04), 0 8px 24px -12px rgba(18,35,61,0.14)',
        'card-hover': '0 2px 4px rgba(18,35,61,0.06), 0 18px 40px -16px rgba(18,35,61,0.22)',
        ring: '0 0 0 1px rgba(18,35,61,0.08)',
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
