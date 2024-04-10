import {useContext} from "react";
import {ThemeContext} from "providers/themeProvider";

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useTheme needs context!')
    }

    return context
}