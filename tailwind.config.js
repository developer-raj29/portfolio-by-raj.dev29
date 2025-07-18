/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        maxContent: "1280px",
        maxContentTab: "650px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      colors: {
        blue: {
          50: "#EBF0FF",
          100: "#D1DEFF",
          200: "#A3BDFF",
          300: "#759CFF",
          400: "#477BFF",
          500: "#1B5BFF",
          600: "#0040E0",
          700: "#0030A8",
          800: "#002070",
          900: "#001038",
          950: "#00091F",
        },
        indigo: {
          50: "#EEE5FF",
          100: "#E0D1FF",
          200: "#BD9EFF",
          300: "#9D70FF",
          400: "#7E42FF",
          500: "#5D11FF",
          600: "#4500DB",
          700: "#3400A3",
          800: "#22006B",
          900: "#120038",
          950: "#060111",
        },
        charcoal: {
          50: "#FFFFFF",
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#BFBFBF",
          400: "#A6A6A6",
          500: "#8C8C8C",
          600: "#737373",
          700: "#595959",
          800: "#404040",
          900: "#262626",
          950: "#1A1A1A",
        },
        chilledGray: {
          50: "#F2F3F7",
          100: "#E9EAF1",
          200: "#D3D5E4",
          300: "#BABCD4",
          400: "#A4A7C6",
          500: "#8E92B9",
          600: "#656B9F",
          700: "#4A4F78",
          800: "#333652",
          900: "#191B29",
          950: "#0C0C13",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
