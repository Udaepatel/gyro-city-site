const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Gyro City brand colors (oklch for perceptual uniformity)
        'gyro-navy': 'oklch(0.45 0.15 240)',
        'gyro-navy-hover': 'oklch(0.55 0.15 240)',
        'gyro-gold': 'oklch(0.65 0.12 80)',
        'gyro-gold-hover': 'oklch(0.75 0.12 80)',
        'gyro-terracotta': 'oklch(0.55 0.18 25)',
        'gyro-cream': 'oklch(0.97 0.01 70)',
        'gyro-surface': 'oklch(0.98 0 0)',
        'gyro-border': 'oklch(0.90 0 0)',
        'gyro-text': 'oklch(0.20 0 0)',
        'gyro-text-secondary': 'oklch(0.45 0 0)',
        'gyro-text-light': 'oklch(0.95 0 0)',
        'gyro-bg-dark': 'oklch(0.20 0.02 240)',
        
        // Original theme colors (for compatibility)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-playfair)", "var(--font-heading)", ...fontFamily.serif],
        playfair: ["var(--font-playfair)", ...fontFamily.serif],
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'marquee-slow': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333%)' }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: 'marquee 20s linear infinite',
        'marquee-slow': 'marquee-slow 40s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
