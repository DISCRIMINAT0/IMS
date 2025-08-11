"use client"

import type { ComponentProps, ElementType } from "react"
import React, { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "@/components/anim/use-reduced-motion"

gsap.registerPlugin(ScrollTrigger)

type Preset =
    | "elegant" // skew+blur rise
    | "words-fly-in" // words from below with slight scale
    | "zoom-soft" // subtle scale + fade

type AnimatedTextProps<T extends ElementType> = {
    as?: T
    text: string
    split?: "chars" | "words"
    preset?: Preset
    duration?: number
    delay?: number
    stagger?: number
    fromY?: number
    className?: string
    underline?: boolean
    triggerOnView?: boolean
} & Omit<ComponentProps<T>, "as" | "children">

export default function AnimatedText<T extends ElementType = "h2">({
    as,
    text,
    split = "chars",
    preset = "elegant",
    duration = 0.9,
    delay = 0,
    stagger = 0.02,
    fromY = 24,
    className = "",
    underline = false,
    triggerOnView = true,
    ...rest
}: AnimatedTextProps<T>) {
    const Tag = (as || "h2") as ElementType
    const rootRef = useRef<HTMLElement | null>(null)
    const reduce = useReducedMotion()

    useLayoutEffect(() => {
        if (!rootRef.current) return

        const q = gsap.utils.selector(rootRef)
        const atoms = q("[data-atom]") as HTMLElement[]
        const underlineEl = q("[data-underline]")[0] as HTMLElement | undefined

        if (reduce) {
            atoms.forEach((a) => {
                a.style.opacity = "1"
                a.style.transform = "translateY(0) skewY(0deg) scale(1)"
                a.style.filter = "blur(0)"
            })
            if (underlineEl) {
                underlineEl.style.transform = "scaleX(1)"
            }
            return
        }

        const ctx = gsap.context(() => {
            const base: gsap.TweenVars = { opacity: 0, y: fromY }
            const end: gsap.TweenVars = {
                opacity: 1,
                y: 0,
                duration,
                delay,
                stagger,
                ease: "expo.out",
                ...(triggerOnView
                    ? {
                        scrollTrigger: {
                            trigger: rootRef.current,
                            start: "top 85%",
                            once: true,
                        },
                    }
                    : {}),
            }

            if (preset === "elegant") {
                base.skewY = 6
                base.filter = "blur(6px)"
                end.skewY = 0
                end.filter = "blur(0px)"
            } else if (preset === "words-fly-in") {
                base.y = fromY + 8
                base.scale = 0.98
                end.scale = 1
            } else if (preset === "zoom-soft") {
                base.y = fromY - 6
                base.scale = 0.96
                end.scale = 1
                end.ease = "power3.out"
            }

            gsap.fromTo(atoms, base, end)

            if (underlineEl) {
                gsap.fromTo(
                    underlineEl,
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        delay: delay + Math.min(0.2, atoms.length * stagger * 0.6),
                        ...(triggerOnView
                            ? {
                                scrollTrigger: {
                                    trigger: rootRef.current,
                                    start: "top 85%",
                                    once: true,
                                },
                            }
                            : {}),
                    },
                )
            }
        }, rootRef)

        return () => ctx.revert()
    }, [duration, delay, stagger, fromY, triggerOnView, preset, reduce])

    const renderContent = () => {
        if (split === "words") {
            const words = text.split(" ")
            return words.map((w, i) => (
                <React.Fragment key={`${w}-${i}`}>
                    <span
                        data-atom
                        className="inline-block will-change-transform"
                        style={{ whiteSpace: "pre" }} // keeps the word intact, allows wrapping at spaces
                    >
                        {w}
                    </span>
                    {i < words.length - 1 ? " " : null}
                </React.Fragment>
            ))
        }

        return Array.from(text).map((ch, i) => (
            <span
                key={`${ch}-${i}`}
                data-atom
                className="inline-block will-change-transform"
                style={{ whiteSpace: ch === " " ? "pre" : "normal" }}
            >
                {ch}
            </span>
        ))
    }



    return (
        <Tag ref={rootRef as any} className={`relative ${className}`} {...(rest as any)}>
            {renderContent()}
            {underline ? (
                <span
                    data-underline
                    className="absolute left-0 -bottom-1 h-[2px] w-full origin-left bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"
                    style={{ transform: "scaleX(0)" }}
                    aria-hidden="true"
                />
            ) : null}
        </Tag>
    )
}
