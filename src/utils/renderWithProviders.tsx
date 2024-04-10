import {ThemeProvider} from "providers/themeProvider";
import { ReactNode} from "react";
import {render, renderHook, RenderHookResult} from '@testing-library/react'
import {Theme} from "providers/types";

type RenderWithProvidersType = (ui: any, context?: Partial<{theme: 'light | dark', toggleTheme: () => void}>) => void
type RenderHookWithProvidersType = (hook: any, context?: Partial<{theme: Theme, toggleTheme: () => void}>) => RenderHookResult<any, any>

const getWrapper = (theme: Theme) => ({children}: {children?: ReactNode}) => {
    // @ts-ignore
    return <ThemeProvider selectedTheme={theme}>{children}</ThemeProvider>
}

export const renderWithProviders: RenderWithProvidersType = (
    ui,
    {theme = Theme.LIGHT , ...options} = {}
) => {
    const Wrapper = getWrapper(theme)

    render(ui, {wrapper: Wrapper, ...options})
}

export const renderHookWithProviders: RenderHookWithProvidersType = (
    hook,
    { theme , ...options } = {},
) => {
    const Wrapper = getWrapper(theme);

    return renderHook(hook, {wrapper: Wrapper, ...options});
}