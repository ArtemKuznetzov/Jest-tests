import type {JSX} from 'react'
import cn from 'clsx'
import style from './Title.module.scss'
import {FC, ReactNode} from "react";

type TitleProps = {
    children: string
    level?: number,
    className?: string,
}

const Title: FC<TitleProps> = ({level = 2, className = '', children}) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements

    return (
        <Tag className={cn(style.title, className)}>{children}</Tag>
    );
};

export { Title }