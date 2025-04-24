module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-4d-4cac": "var(--bg-4d-4cac)",
        "bg-60-3ae-5": "var(--bg-60-3ae-5)",
        "bg-818-1a-5": "var(--bg-818-1a-5)",
        "bg-f5f5fa": "var(--bg-f5f5fa)",
        "bgf-6f-6f-6": "var(--bgf-6f-6f-6)",
        "outline-ececf2": "var(--outline-ececf2)",
        "outline-ffffff": "var(--outline-ffffff)",
        "tags-badges-40e1fa-10": "var(--tags-badges-40e1fa-10)",
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
      fontFamily: {
        "buttons-label-14px": "var(--buttons-label-14px-font-family)",
        "header-h5": "var(--header-h5-font-family)",
        "icons-18px": "var(--icons-18px-font-family)",
        "text-12px-bold": "var(--text-12px-bold-font-family)",
        "text-12px-regular": "var(--text-12px-regular-font-family)",
        "text-14px-bold": "var(--text-14px-bold-font-family)",
        "text-14px-regular": "var(--text-14px-regular-font-family)",
        "text-16px-regular": "var(--text-16px-regular-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
