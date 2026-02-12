"use client"

import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext({ currentTheme: 1, switchTheme: () => {} })

export const useTheme = () => {
  const context = useContext(ThemeContext)
  return context
}

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(1)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const switchTheme = () => {
    setCurrentTheme(prev => {
      if (prev === 1) return 3;
      if (prev === 3) return 4;
      return 1;
    });
  }

  return (
    <ThemeContext.Provider value={{ currentTheme: isClient ? currentTheme : 1, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}