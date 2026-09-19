/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#1E9E4A",
          greenDark: "#15803D",
          greenSoft: "#E8F6EC",
          greenBorder: "#CDEBD6",
          emerald: "#00B368",
          ink: "#0F1B2D",
          muted: "#5B6B7B",
          bgLight: "#F4F7F6",
          night: "#0B1A2B",
          nightLight: "#1B2B40",
          red: "#E5484D",
          redSoft: "#FDECEC",
          blue: "#2563EB",
          blueSoft: "#EAF0FD",
          border: "#E3E9E6",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'btn': '0 10px 24px rgba(30, 158, 74, 0.28)',
        'btn-hover': '0 14px 28px rgba(30, 158, 74, 0.35)',
        'card': '0 18px 40px rgba(15, 27, 45, 0.08)',
        'card-hover': '0 24px 50px rgba(15, 27, 45, 0.12)',
        'phone': '0 30px 60px rgba(15, 27, 45, 0.28)',
        'note': '0 20px 40px rgba(15, 27, 45, 0.2)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
