import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Blood red palette - deep crimson with dark undertones
        blood: {
          50: '#fcd8d8',
          100: '#f7aeae',
          200: '#f08080',
          300: '#e85454',
          400: '#d62a2a',
          500: '#b80000',
          600: '#8f0000',
          700: '#6b0000',
          800: '#4d0000',
          900: '#330000',
          950: '#1f0000',
        },
        primary: {
          50: '#fcd8d8',
          100: '#f7aeae',
          200: '#f08080',
          300: '#e85454',
          400: '#d62a2a',
          500: '#b80000',
          600: '#8f0000',
          700: '#6b0000',
          800: '#4d0000',
          900: '#330000',
          950: '#1f0000',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(184, 0, 0, 0.15), rgba(51, 0, 0, 0.1))',
        'glass-shine': 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.06) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 8s linear infinite',
        'gradient-rotate': 'gradient-rotate 4s ease infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(184, 0, 0, 0.5), 0 0 10px rgba(184, 0, 0, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(184, 0, 0, 0.8), 0 0 30px rgba(184, 0, 0, 0.5)' },
        },
        'gradient-rotate': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
