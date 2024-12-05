module.exports = {
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'oklch(var(--color-primary-50))',
          100: 'oklch(var(--color-primary-100))',
          200: 'oklch(var(--color-primary-200))',
          300: 'oklch(var(--color-primary-300))',
          400: 'oklch(var(--color-primary-400))',
          500: 'oklch(var(--color-primary-500))',
          600: 'oklch(var(--color-primary-600))',
          700: 'oklch(var(--color-primary-700))',
          800: 'oklch(var(--color-primary-800))',
          900: 'oklch(var(--color-primary-900))',
          950: 'oklch(var(--color-primary-950))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary2: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          hover: 'hsl(var(--primary-hover))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
