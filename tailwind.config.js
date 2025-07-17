module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // blue-600 - Trust-building blue
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
        },
        secondary: {
          DEFAULT: "#64748B", // slate-500 - Sophisticated slate
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
        },
        accent: {
          DEFAULT: "#0EA5E9", // sky-500 - Bright sky blue
          100: "#E0F2FE", // sky-100
          500: "#0EA5E9", // sky-500
          600: "#0284C7", // sky-600
        },
        background: "#FAFAFA", // neutral-50 - Warm off-white
        surface: "#FFFFFF", // white - Pure white
        text: {
          primary: "#1E293B", // slate-800 - Deep charcoal
          secondary: "#64748B", // slate-500 - Muted slate
        },
        success: {
          DEFAULT: "#10B981", // emerald-500 - Fresh emerald
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500 - Warm amber
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
        },
        error: {
          DEFAULT: "#EF4444", // red-500 - Clear red
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      },
      boxShadow: {
        'message': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'floating': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'subtle': '0 1px 2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'message': '8px',
        'button': '6px',
      },
      animation: {
        'pulse-recording': 'pulse-recording 1.5s ease-in-out infinite',
        'scale-in': 'scale-in 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'pulse-recording': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}