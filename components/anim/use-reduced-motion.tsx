"use client"

import { useEffect, useState } from "react"

export function useReducedMotion(defaultValue = false) {
    const [prefersReduced, setPrefersReduced] = useState(defaultValue)

    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
        const update = () => setPrefersReduced(mq.matches)
        update()
        mq.addEventListener("change", update)
        return () => mq.removeEventListener("change", update)
    }, [])

    return prefersReduced
}
