import { useState, createContext, useContext, ReactNode, useEffect } from "react"
import { themes } from "./themes"

type Theme = 'light' | 'dark'

type ThemeContextType = {
    currentTheme: Theme
    toggleTheme: () => void
}

type ThemeContextProviderProps = {
    children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextType)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [currentTheme, setCurrentTheme] = useState('dark' as Theme)

    useEffect(() => {
        setCSSVariables(themes.primaryColors)
        setCSSVariables(themes[currentTheme])
    }, [])

    function toggleTheme() {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
        setCSSVariables(themes[currentTheme === 'light' ? 'dark' : 'light'])
    }

    function setCSSVariables(object: Object) {
        const root = document.documentElement.style

        Object.entries(object).forEach(entry => {
            root.setProperty(`--${entry[0]}`, entry[1])
        })
    }

    return (
        <ThemeContext.Provider value={{currentTheme, toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}