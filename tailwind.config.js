/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EADDD8', // Beige Nude / Rose Poudré
        secondary: '#5D4037', // Marron Terre / Chocolat
        cream: '#FDFBF7', // Fond de page global
        anthracite: '#333333', // Texte
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        'blob': '40% 60% 70% 30% / 40% 50% 60% 50%',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'DM Sans', 'sans-serif'],
        handwriting: ['Dancing Script', 'cursive'],
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
