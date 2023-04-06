/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'bg-image': "url('public/bg-image-1.webp')"
    },
  },
  plugins: [],
}

