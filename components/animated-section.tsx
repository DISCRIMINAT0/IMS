"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedSection({
    id = "",
    className = "",
    children = null,
}: {
    id?: string
    className?: string
    children?: React.ReactNode
}) {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!ref.current) return
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ref.current,
                { y: 24, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top 80%",
                    },
                },
            )
        }, ref)
        return () => ctx.revert()
    }, [])

    return (
        <section
            id={id}
            ref={ref}
            className={`scroll-mt-24 py-12 md:py-20 ${className}`}
            data-section={id}
            aria-label={id ? `${id} section` : undefined}
        >
            {children}
        </section>
    )
}
