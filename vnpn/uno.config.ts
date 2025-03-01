import { defineConfig } from 'unocss'
import { presetUno, presetIcons, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle'
      }
    }),
    presetTypography()
  ],
  shortcuts: {
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md transition-colors duration-200',
    'btn-primary': 'bg-blue-500 text-white hover:bg-blue-700',
    'btn-secondary': 'bg-gray-500 text-white hover:bg-gray-700',
    'input': 'px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500',
    'card': 'bg-white rounded-lg shadow-md p-4',
  },
  theme: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      }
    }
  }
})
