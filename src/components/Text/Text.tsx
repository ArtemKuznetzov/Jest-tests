import React, {FC} from 'react';
import style from './Text.module.scss'
import cn from 'clsx'

type TextProps = {
    children: string
    className?: string
    isError?: boolean
    isSuccess?: boolean
}

const Text: FC<TextProps> = ({children, className, isError, isSuccess}) => {
    return (
        <p className={cn(style.text, className, {
            [style.error]: isError,
            [style.success]: isSuccess
        })}>
            {children}
        </p>
    );
};

export { Text }