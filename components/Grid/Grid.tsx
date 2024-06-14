'use client'

import React from 'react'
import { useState, useEffect } from 'react'

import classNames from 'classnames'

import styles from './Grid.module.scss'

function Grid({ columns }: { columns: number }): React.ReactElement {
    const [gridClass, setGridClass] = useState(localStorage.getItem('gridClass'))

    useEffect(() => {
        function handleKeyPress(event: KeyboardEvent) {
            if (event.key === 'g') {
                if (gridClass === 'null' || !gridClass) {
                    setGridClass(styles.grid1)
                } else {
                    setGridClass(null)
                }
            }
        }

        document.addEventListener('keydown', handleKeyPress)

        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [gridClass])

    useEffect(() => {
        localStorage.setItem('gridClass', gridClass ?? 'null')
    }, [gridClass])

    return (
        <div className={classNames(styles.grid, gridClass)}>
            {Array.from({ length: columns }, (_, index) => (
                <span key={index} className={styles.col}></span>
            ))}
        </div>
    )
}

export default Grid
