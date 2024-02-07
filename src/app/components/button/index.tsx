import React, { forwardRef } from 'react'

import { cls } from '../../utils/index'


interface ButtonClass {
    base: string,
    disabled: string,
    pill: string,
    size: Record<any, string>,
    variant: Record<any, string>
}


const classes: ButtonClass = {
    base: 'focus:outline-none transition ease-in-out duration-300',
    disabled: 'opacity-50 cursor-not-allowed',
    pill: 'rounded-full',
    size: {
        small: 'px-2 py-1 text-sm',
        normal: 'px-4 py-2',
        large: 'px-8 py-3 text-lg'
    },
    variant: {
        primary: 'bg-primary-800 text-white',
        danger: 'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white',
        secondary: 'bg-secondary-600 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white'
    }
}

function Button(
    {
        children,
        type = 'button',
        className,
        variant = 'primary',
        size = 'normal',
        pill,
        disabled = false,
        ...props
    }: any, ref: React.ForwardedRef<any>
) {

    return <button
        ref={ref}
        disabled={disabled}
        type={type}
        className={cls(`
                ${classes.base}
                ${classes.size[size]}
                ${classes.variant[variant]}
                ${pill && classes.pill}
                ${disabled && classes.disabled}
                ${className}
            `)}
        {...props}
    >
        {children}
    </button>
}

export default forwardRef(Button)