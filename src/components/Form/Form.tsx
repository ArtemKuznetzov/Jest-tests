import React from 'react'
import cn from 'clsx'
import style from './Form.module.scss'
import {FC, FormEvent, ReactNode, SyntheticEvent} from "react";

type FormProps = {
    onSubmit: (data: any) => void
    onSuccess?: (data: any) => void
    onError?: (err: unknown) => void
    children?: ReactNode
    className?: string
}

const Form: FC<FormProps> = ({onSubmit, onSuccess, onError, children, className}) => {
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const formData = new FormData(e.target)
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
        className={cn(style.form, className)}
        onSubmit={handleSubmit}
        autoComplete='off'
        >
            {children}
        </form>
    )
}

export { Form }