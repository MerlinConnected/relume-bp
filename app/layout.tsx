import React from 'react'
import { Inter } from 'next/font/google'

import { AppWrapper } from '@/context'

import Scroll from '@/components/Scroll'
import Grid from '@/components/Grid/Grid'
import Navbar from '@/components/Navbar/Navbar'

import '../styles/index.scss'

const inter = Inter({ subsets: ['latin'] })

function RootLayout({ children }: { children: React.ReactNode }): React.ReactElement {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppWrapper>
                    <Scroll>
                        <Grid columns={12} />

                        <Navbar />

                        <main>{children}</main>
                    </Scroll>
                </AppWrapper>
            </body>
        </html>
    )
}

export default RootLayout
