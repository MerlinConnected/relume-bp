import React from 'react'

import classNames from 'classnames'

import styles from './Container.module.scss'

function Container({
    children,
    size,
}: {
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg' | 'full'
}): React.ReactElement {
    return (
        <div
            className={classNames(styles.container, {
                [styles['container-sm']]: size === 'sm',
                [styles['container-md']]: size === 'md',
                [styles['container-lg']]: size === 'lg',
                [styles['container-full']]: size === 'full',
            })}
        >
            {children}
        </div>
    )
}

export default Container
