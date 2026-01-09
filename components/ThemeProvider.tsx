'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'
type ResolvedTheme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system')
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('dark')
  const [mounted, setMounted] = useState(false)

  // Initial mount - read from localStorage or use system
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('pickletrack-theme') as Theme | null

    if (savedTheme && ['dark', 'light', 'system'].includes(savedTheme)) {
      setThemeState(savedTheme)
      if (savedTheme === 'system') {
        setResolvedTheme(getSystemTheme())
      } else {
        setResolvedTheme(savedTheme)
      }
    } else {
      // No saved preference - use system
      setThemeState('system')
      setResolvedTheme(getSystemTheme())
    }
  }, [])

  // Listen to system theme changes
  useEffect(() => {
    if (!mounted) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if theme is set to 'system'
      if (theme === 'system') {
        setResolvedTheme(e.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [mounted, theme])

  // Apply theme to DOM
  useEffect(() => {
    if (!mounted) return

    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(resolvedTheme)
  }, [resolvedTheme, mounted])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('pickletrack-theme', newTheme)

    if (newTheme === 'system') {
      setResolvedTheme(getSystemTheme())
    } else {
      setResolvedTheme(newTheme)
    }
  }

  const toggleTheme = () => {
    // Toggle between dark and light (skip system in toggle)
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  // Prevent flash of wrong theme
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    // Return default values during SSR
    return {
      theme: 'system' as Theme,
      resolvedTheme: 'dark' as ResolvedTheme,
      setTheme: () => {},
      toggleTheme: () => {}
    }
  }
  return context
}
