import React from 'react'

import Container from '@/components/Container/Container'

import styles from './Header001.module.scss'

function Header001(): React.ReactElement {
    return (
        <section className={styles.section}>
            <Container>
                <div className={styles.grid}>
                    <h1>Lorem ipsum dolor sit amet</h1>
                </div>
            </Container>
        </section>
    )
}

export default Header001
