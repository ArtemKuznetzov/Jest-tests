import {createContext, FC, ReactNode, useState} from "react";
import {Theme} from "providers/types";

export const ThemeContext = createContext<{theme: Theme, toggleTheme: () => void}>
({theme: Theme.LIGHT, toggleTheme: () => {}})

type ThemeProviderProps = {
    selectedTheme: Theme
    children?: ReactNode
}
export const ThemeProvider: FC<ThemeProviderProps> = ({children, selectedTheme = Theme.LIGHT}) => {
    const [theme, setTheme] = useState<Theme>(selectedTheme)

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}</ThemeContext.Provider>
    )
}