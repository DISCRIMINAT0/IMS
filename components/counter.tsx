"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "./anim/use-reduced-motion"

gsap.registerPlugin(ScrollTrigger)

export default function Counter({
    to = 40,
    duration = 1,
    suffix = "",
    className = "",
}: {
    to?: number
    duration?: number
    suffix?: string
    className?: string
}) {
    const ref = useRef<HTMLSpanElement | null>(null)
    const reduce = useReducedMotion()

    useLayoutEffect(() => {
        if (!ref.current) return
        if (reduce) {
            ref.current.textContent = `${to}${suffix}`
            return
        }

        const el = ref.current
        const obj = { val: 0 }
        const st = ScrollTrigger.create({
            trigger: el,
            start: "top 90%",
            once: true,
            onEnter: () => {
                gsap.to(obj, {
                    val: to,
                    duration,
                    ease: "power1.out",
                    onUpdate: () => {
                        el.textContent = `${Math.round(obj.val)}${suffix}`
                    },
                })
            },
        })
        return () => st.kill()
    }, [to, duration, suffix, reduce])

    return (
        <span ref={ref} className={className}>
            {"0" + suffix}
        </span>
    )
}
