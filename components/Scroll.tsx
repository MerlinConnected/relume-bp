'use client'

import React from 'react'
import { useEffect, useRef } from 'react'

import { ReactLenis } from 'lenis/react'
import { gsap } from 'gsap'

function Scroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<any>(null)

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000)
        }

        gsap.ticker.add(update)

        return () => {
            gsap.ticker.remove(update)
        }
    })

    return (
        <ReactLenis root ref={lenisRef} autoRaf={false}>
            {children}
        </ReactLenis>
    )
}

export default Scroll
