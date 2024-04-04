import style from './Input.module.scss'
import {FC, useId} from "react";
import cn from 'clsx'

type InputProps = {
    onChange: () => void
    value?: string
    name?: string
    label?: string
    placeholder?: string
    type?: string
    containerClassName?: string
    inputClassName?: string
}

const Input: FC<InputProps> = ({
    type = 'text',
    name,
    value,
    onChange,
    placeholder = '',
    label,
    containerClassName,
    inputClassName
               }) => {
    const id = useId()

    return (
        <div className={cn(style.formControl, containerClassName)}>
            {label && (
                <label className={style.label} htmlFor={id} data-testid={'input-label'}>
                    {label}
                </label>
            )}

            <input
            id={id}
            className={cn(style.input, inputClassName)}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
             />
        </div>
    );
};

export { Input }