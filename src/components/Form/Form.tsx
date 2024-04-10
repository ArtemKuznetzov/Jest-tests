import React from 'react'
import cn from 'clsx'
import style from './Form.module.scss'
import {FC, FormEvent, ReactNode, SyntheticEvent} from "react";
import {useTheme} from "providers/useTheme";

type FormProps = {
    onSubmit: (data: Record<string, File | string>) => void
    onSuccess?: (data: Record<string, File | string>) => void
    onError?: (err: unknown) => void
    children?: ReactNode
    className?: string
}

const Form: FC<FormProps> = ({onSubmit, onSuccess, onError, children, className}) => {
    const {theme} = useTheme()
    const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData)

        try {
            await onSubmit(data)
            onSuccess && onSuccess(data)
        } catch (err) {
            onError && onError(err)
        }

    }
    return (
        <form
        className={cn(style.form, className, theme === 'dark' && style.dark)}
        onSubmit={handleSubmit}
        autoComplete='off'
        role="form"
        >
            {children}
        </form>
    )
}

export { Form }