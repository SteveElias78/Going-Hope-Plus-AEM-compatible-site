import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
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
        // Custom color palette
        coral: {
          DEFAULT: "#FA7921",
          50: "#FEE8DB",
          100: "#FDD7C0",
          200: "#FCB68A",
          300: "#FB9554",
          400: "#FA7921",
          500: "#E05D07",
          600: "#AA4605",
          700: "#742F04",
          800: "#3E1902",
          900: "#080300",
        },
        amber: {
          DEFAULT: "#FE9920",
          50: "#FFF0DE",
          100: "#FFE4C2",
          200: "#FFCD8A",
          300: "#FEB653",
          400: "#FE9920",
          500: "#E57C01",
          600: "#AD5F01",
          700: "#764100",
          800: "#3E2200",
          900: "#070400",
        },
        olive: {
          DEFAULT: "#B9A44C",
          50: "#F0EDE0",
          100: "#E6E1CA",
          200: "#D3C9A0",
          300: "#C6B976",
          400: "#B9A44C",
          500: "#968539",
          600: "#72652B",
          700: "#4E451D",
          800: "#29240F",
          900: "#050401",
        },
        forest: {
          DEFAULT: "#566E3D",
          50: "#E4E9DF",
          100: "#D2DBCA",
          200: "#AEBFA0",
          300: "#8AA376",
          400: "#566E3D",
          500: "#425431",
          600: "#324024",
          700: "#212B18",
          800: "#11170C",
          900: "#000000",
        },
        navy: {
          DEFAULT: "#0C4767",
          50: "#D8E9F3",
          100: "#BFDAEB",
          200: "#8CBDDA",
          300: "#59A0C9",
          400: "#2683B8",
          500: "#0C4767",
          600: "#09354E",
          700: "#062435",
          800: "#03121C",
          900: "#000103",
        },
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
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

