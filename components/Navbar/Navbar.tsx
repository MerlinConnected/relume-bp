'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import classNames from 'classnames'

import { useAppContext } from '@/context'

import Container from '@/components/Container/Container'
import Button from '@/components/Button/Button'

import styles from './Navbar.module.scss'

function Navbar(): React.ReactElement {
    const { isMenuOpen, setIsMenuOpen } = useAppContext()

    function openDropdown(e: React.MouseEvent<HTMLAnchorElement>): void {
        const dropdown = e.currentTarget.parentNode as HTMLElement
        const subMenu = e.currentTarget.nextElementSibling as HTMLElement

        dropdown.classList.toggle(styles.isActive)

        if (subMenu) {
            subMenu.offsetHeight === 0
                ? (subMenu.style.maxHeight = `${subMenu.scrollHeight}px`)
                : (subMenu.style.maxHeight = '0')
        }
    }

    return (
        <div className={classNames(styles.navbar, isMenuOpen && styles.isActive)}>
            <Container>
                <div className={styles.grid}>
                    <Link href="/">
                        <Image className={styles.logo} src="/images/logo.svg" alt="logo" width={63} height={27} />
                    </Link>

                    <div
                        className={styles.icon}
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen)
                        }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <nav className={styles.nav}>
                        <ul className={styles.menu}>
                            <li>
                                <Link href="#">Link one</Link>
                            </li>
                            <li>
                                <Link href="#">Link two</Link>
                            </li>
                            <li>
                                <Link href="#">Link three</Link>
                            </li>
                            <li className={styles.dropdown}>
                                <Link href="#" onClick={openDropdown}>
                                    Link Four
                                    <Image src="/icons/chevron-down.svg" alt="icon" width={20} height={20} />
                                </Link>
                                <ul className={styles.submenu}>
                                    <li>
                                        <Link href="#">Link five</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Link six</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Link seven</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <div className={styles.buttons}>
                            <Link href="#">
                                <Button type="primary">Button</Button>
                            </Link>
                            <Link href="#">
                                <Button type="secondary">Button</Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            </Container>
        </div>
    )
}

export default Navbar
