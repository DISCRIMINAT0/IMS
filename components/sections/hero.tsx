"use client";

import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { useCallback, useLayoutEffect, useRef } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ParallaxShapes from "@/components/parallax-shapes";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";
import QuickFacts from "./quick-facts";
import OptimizedImage from "@/components/OptimizedImage";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// ✅ Reusable container for consistent spacing
function SectionContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    );
}

export default function HeroSection() {
    const scrollToCenter = useCallback((id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const header = document.getElementById("site-header");
        const headerH = header ? header.offsetHeight : 64;
        const targetY =
            window.scrollY +
            rect.top -
            (window.innerHeight - rect.height) / 2 +
            headerH * 0.25;
        gsap.to(window, { duration: 0.8, ease: "power2.out", scrollTo: targetY });
    }, []);

    const headingRef = useRef<HTMLHeadingElement>(null);
    const taglineRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#home",
                    start: "top 80%",
                    once: true,
                },
            });

            tl.from(taglineRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.6,
                ease: "power2.out",
            })
                .from(
                    headingRef.current?.querySelectorAll("span") || [],
                    {
                        opacity: 0,
                        x: -30,
                        stagger: 0.05,
                        ease: "power3.out",
                    },
                    "-=0.2"
                )
                .from(
                    descRef.current,
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.6,
                        ease: "power2.out",
                    },
                    "-=0.3"
                )
                .from(
                    buttonsRef.current?.children || [],
                    {
                        opacity: 1,
                        y: 10,
                        stagger: 0.15,
                        ease: "power2.out",
                    },
                    "-=0.5"
                )
                .from(
                    imageRef.current,
                    {
                        opacity: 0,
                        scale: 0.9,
                        duration: 0.6,
                        ease: "power2.out",
                    },
                    "-=0.4"
                );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            className="relative scroll-mt-[96px] pt-20 md:pt-24 pb-8 md:pb-20 bg-gradient-to-b from-blue-50 via-white to-white"
        >
            <SectionContainer>
                <div className="grid items-center justify-items-center gap-8 lg:gap-16 lg:grid-cols-2">
                    {/* Left Column */}
                    <div className="max-w-xl text-center lg:text-left">
                        <div
                            ref={taglineRef}
                            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1 text-xs md:text-sm font-semibold text-blue-700 shadow-sm"
                        >
                            Premier Importers & General Order Suppliers Since 1985
                        </div>

                        <h1
                            ref={headingRef}
                            className="mt-5 text-[clamp(1.8rem,4vw,3.5rem)] font-extrabold tracking-tight text-slate-900 leading-tight"
                        >
                            {"Delivering quality procurement solutions across industries"
                                .split(" ")
                                .map((word, i) => (
                                    <span
                                        key={i}
                                        className="inline-block whitespace-nowrap mr-2"
                                    >
                                        {word}
                                    </span>
                                ))}
                        </h1>

                        <p
                            ref={descRef}
                            className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0"
                        >
                            excellence for government and private sector organizations.
                        </p>

                        <div
                            ref={buttonsRef}
                            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
                        >
                            <Button
                                className="bg-blue-600 hover:bg-blue-700 px-6 py-4 text-sm md:text-base font-medium shadow-lg"
                                onClick={() => scrollToCenter("contact")}
                            >
                                Request Quote
                            </Button>
                            <Button
                                variant="outline"
                                className="border-blue-200 text-blue-700 hover:bg-blue-50 px-6 py-4 text-sm md:text-base font-medium"
                                onClick={() => scrollToCenter("services")}
                            >
                                Our Services <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div ref={imageRef} className="flex justify-center relative">
                        <OptimizedImage
                            src="/hero.jpg"
                            alt="Engineering and Technical Equipment"
                            width={500}
                            height={400}
                            className="rounded-xl shadow-2xl w-full max-w-sm md:max-w-lg h-auto"
                            priority
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-8 w-8 text-green-500" />
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm md:text-base">
                                        Quality Assured
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            <ParallaxShapes />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -bottom-16 h-32 bg-gradient-to-b from-transparent to-white"
            />

            <div className="mb-[100px]" />

            <QuickFacts />
        </section>
    );
}
