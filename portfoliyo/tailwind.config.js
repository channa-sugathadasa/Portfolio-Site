/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(148, 163, 184, 0.14), 0 20px 45px rgba(15, 23, 42, 0.45)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.14) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};
