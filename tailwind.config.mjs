/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        premium: {
          primary: '#FA602E',
          secondary: '#387798',
          background: '#F8FAFB',
          text: '#2C3E50',
          soft: '#E8F1F3',
          offwhite: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(143, 35, 46, 0.2), 0 0 10px rgba(143, 35, 46, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(143, 35, 46, 0.6), 0 0 30px rgba(143, 35, 46, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}
