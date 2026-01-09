'use client'

import { useTheme } from './ThemeProvider'

// Simple SVG icons
const MoonIcon = () => (
  <svg className="w-4 h-4 text-pickletrack-black" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const SunIcon = () => (
  <svg className="w-4 h-4 text-pickletrack-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-white/10 border border-white/20 transition-all duration-300 hover:scale-105 hover:border-white/40"
      aria-label={`Cambiar a modo ${resolvedTheme === 'dark' ? 'claro' : 'oscuro'}`}
      title={`Modo actual: ${resolvedTheme === 'dark' ? 'oscuro' : 'claro'}`}
    >
      <div
        className={`absolute top-1 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
          resolvedTheme === 'dark'
            ? 'left-1 bg-pickletrack-lime'
            : 'left-7 bg-pickletrack-gold'
        }`}
      >
        {resolvedTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
      </div>
    </button>
  )
}
