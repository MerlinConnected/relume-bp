import React from 'react'

import classNames from 'classnames'

import styles from './Button.module.scss'

function Button({
    type = 'primary',
    disabled = false,
    children,
    ...props
}: {
    type?: 'primary' | 'secondary'
    disabled?: boolean
    children: React.ReactNode
    [key: string]: any
}): React.ReactElement {
    return (
        <button className={classNames(styles.button, styles[type])} disabled={disabled} {...props}>
            {children}
        </button>
    )
}

export default Button
