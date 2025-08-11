"use client"

import type React from "react"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "./anim/use-reduced-motion"

gsap.registerPlugin(ScrollTrigger)

type Effect = "lift" | "fade-zoom" | "tilt"

export default function StaggerOnView({
    children,
    childSelector,
    amount = 0.08,
    y = 18,
    className = "",
    effect = "lift",
}: {
    children: React.ReactNode
    childSelector?: string
    amount?: number
    y?: number
    className?: string
    effect?: Effect
}) {
    const ref = useRef<HTMLDivElement | null>(null)
    const reduce = useReducedMotion()

    useLayoutEffect(() => {
        if (!ref.current || reduce) return
        const container = ref.current
        const targets = childSelector
            ? Array.from(container.querySelectorAll<HTMLElement>(childSelector))
            : (Array.from(container.children) as HTMLElement[])

        const ctx = gsap.context(() => {
            const base: gsap.TweenVars = { opacity: 0, y }
            const to: gsap.TweenVars = {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                stagger: amount,
                scrollTrigger: { trigger: container, start: "top 85%" },
            }

            if (effect === "fade-zoom") {
                base.scale = 0.96
                to.scale = 1
            } else if (effect === "tilt") {
                base.rotateX = 8
                base.transformOrigin = "top center"
                to.rotateX = 0
            }

            gsap.fromTo(targets, base, to)
        }, container)

        return () => ctx.revert()
    }, [amount, y, childSelector, reduce, effect])

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
}
