import React from 'react';
import {useTheme} from "providers/useTheme";
import cn from "clsx";
import styles from './ToggleTheme.module.scss'
import {Theme} from "providers/types";

export const ToggleTheme = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <button
            className={cn(styles.toggle, theme === 'dark' && styles.dark)}
            onClick={toggleTheme}
            data-testid="toggle-theme"
        >
            {theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT} mode
        </button>
    );
};