"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "./anim/use-reduced-motion"

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxShapes() {
    const ref = useRef<HTMLDivElement | null>(null)
    const reduce = useReducedMotion()

    useLayoutEffect(() => {
        if (!ref.current || reduce) return
        const ctx = gsap.context(() => {
            const s1 = ref.current!.querySelector<HTMLElement>("[data-s1]")
            const s2 = ref.current!.querySelector<HTMLElement>("[data-s2]")
            const s3 = ref.current!.querySelector<HTMLElement>("[data-s3]")

            if (s1)
                gsap.to(s1, {
                    yPercent: 10,
                    ease: "none",
                    scrollTrigger: { trigger: ref.current, start: "top bottom", scrub: true },
                })
            if (s2)
                gsap.to(s2, {
                    yPercent: -8,
                    ease: "none",
                    scrollTrigger: { trigger: ref.current, start: "top bottom", scrub: true },
                })
            if (s3)
                gsap.to(s3, {
                    yPercent: 6,
                    ease: "none",
                    scrollTrigger: { trigger: ref.current, start: "top bottom", scrub: true },
                })
        }, ref)

        return () => ctx.revert()
    }, [reduce])

    return (
        <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div data-s1 className="absolute -top-10 -left-16 h-44 w-44 rounded-full bg-blue-400/20 blur-2xl" />
            <div data-s2 className="absolute top-10 right-10 h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl" />
            <div
                data-s3
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
            />
        </div>
    )
}
