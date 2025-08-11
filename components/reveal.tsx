"use client"

import type { ReactNode } from "react"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "@/components/anim/use-reduced-motion"

gsap.registerPlugin(ScrollTrigger)

export default function Reveal({
    children,
    className = "",
    radius = "rounded-md",
    duration = 0.8,
    delay = 0,
}: {
    children: ReactNode
    className?: string
    radius?: string
    duration?: number
    delay?: number
}) {
    const wrapRef = useRef<HTMLDivElement | null>(null)
    const innerRef = useRef<HTMLDivElement | null>(null)
    const reduce = useReducedMotion()

    useLayoutEffect(() => {
        if (!wrapRef.current || !innerRef.current) return

        if (reduce) {
            innerRef.current.style.clipPath = "inset(0% 0% 0% 0%)"
            innerRef.current.style.opacity = "1"
            innerRef.current.style.transform = "scale(1)"
            return
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(
                innerRef.current,
                { clipPath: "inset(0% 0% 100% 0%)", opacity: 0.6, scale: 1.02, filter: "blur(3px)" },
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    ease: "power3.out",
                    duration,
                    delay,
                    scrollTrigger: {
                        trigger: wrapRef.current,
                        start: "top 85%",
                        once: true,
                    },
                },
            )
        })

        return () => ctx.revert()
    }, [duration, delay, reduce])

    return (
        <div ref={wrapRef} className={`overflow-hidden ${radius} ${className}`}>
            <div ref={innerRef}>{children}</div>
        </div>
    )
}
