"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "./anim/use-reduced-motion"

gsap.registerPlugin(ScrollTrigger)

export default function ScrollProgress() {
    const barRef = useRef<HTMLDivElement | null>(null)
    const reduce = useReducedMotion()

    useEffect(() => {
        if (!barRef.current || reduce) return
        gsap.set(barRef.current, { scaleX: 0 })
        const st = ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: (self) => {
                gsap.to(barRef.current, { scaleX: self.progress, overwrite: true, duration: 0.15, ease: "power2.out" })
            },
        })
        return () => st.kill()
    }, [reduce])

    return (
        <div
            ref={barRef}
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600"
            style={{ transform: "scaleX(0)" }}
        />
    )
}
