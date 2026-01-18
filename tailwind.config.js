/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Alias Semânticos
        brand: {
          DEFAULT: 'var(--color-brand-500)', // Lime-500 #DFFE35
          dark: 'var(--color-brand-600)',
        },
        neutral: {
          0: 'var(--color-neutral-0)', // #FFFFFF
          100: 'var(--color-neutral-100)', // #F9FAFB
          200: 'var(--color-neutral-200)',
          900: 'var(--color-neutral-900)',
          1000: 'var(--color-neutral-1000)',
        },
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'], // Assumindo Google Fonts
      },
      borderRadius: {
        '3xl': '24px', // baseada em shape/24
        '4xl': '32px', // baseada em shape/32
      },
      spacing: {
        // Mapeando scales do tokens.md caso precise de específicos
        // Tailwind padrão já cobre bem (4, 8, 16, 32...)
      }
    },
  },
  plugins: [],
}
