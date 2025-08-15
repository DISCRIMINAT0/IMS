"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AnimatedSection from "@/components/animated-section"
import OptimizedImage from "@/components/OptimizedImage";
import Link from "next/link";

export const STATUS = {
    Ongoing: "bg-blue-100 text-blue-800",
    Completed: "bg-green-100 text-green-800",
    Planned: "bg-amber-100 text-amber-800",
    Available: "bg-purple-100 text-purple-800",
}

export const PROJECTS = [
    {
        id: "d1",
        title: "AFL (Airfield Runway Lights) Lamps",
        client: "ATG AIRPORTS, UK",
        status: "Available",
        summary: "Supply of Airfield Runway Lights lamps sourced from ATG AIRPORTS, UK.",
        image: "/project/afl.jpeg",

    },
    {
        id: "d2",
        title: "CCR (Constant Current Regulators)",
        client: "ATG AIRPORTS, UK",
        status: "Available",
        summary: "Provision of CCR units for airfield lighting systems from ATG AIRPORTS, UK.",
        image: "/project/ccr.jpg"
    },
    {
        id: "d3",
        title: "Spares for ADBSagegate A-VDGS Type T1",
        client: "ADBSAFEGATE, UAE",
        status: "Available",
        summary: "Supply of spare parts for ADBSagegate A-VDGS Type T1 from ADBSAFEGATE, UAE.",
        image: "/project/avds.jpg"
    },
    {
        id: "d4",
        title: "AFL Cable & Isolation Transformer",
        client: "EFLA OY, FINLAND",
        status: "Available",
        summary: "Airfield lighting cables and isolation transformers from EFLA OY, Finland.",
        image: "/project/cable.avif"
    },
    {
        id: "d5",
        title: "Airfield Runway Lights",
        client: "NARVA",
        status: "Available",
        summary: "Runway lighting solutions from NARVA.",
        image: "/project/runlig.jpg"
    },
    {
        id: "d6",
        title: "FIDS (Flight Information Display System)",
        client: "Turkey",
        status: "Available",
        summary: "Flight information display systems sourced from Turkey.",
        image: "/project/fids.png"
    },
    {
        id: "d7",
        title: "Screens for Display Information",
        client: "China",
        status: "Available",
        summary: "Information display screens sourced from China.",
        image: "/project/screen.jpg"
    },
    {
        id: "d8",
        title: "Airfield Runway Lights",
        client: "OSRAM",
        status: "Available",
        summary: "High-quality airfield runway lights from OSRAM.",
        image: "/project/runl1.webp"
    },
    {
        id: "d9",
        title: "Parts for YORK Centrifugal Chiller",
        client: "Johnson Controls Inc",
        status: "Available",
        summary: "Spare parts for YORK centrifugal chiller from Johnson Controls Inc.",
        image: "/project/cfg.jpeg"
    },
    {
        id: "d10",
        title: "Bag Filters",
        client: "AAF INTERNATIONAL",
        status: "Available",
        summary: "Bag filters for industrial and HVAC applications from AAF INTERNATIONAL.",
        image: "/project/bagfilter.jpeg"
    },
    {
        id: "d11",
        title: "Panel Filters",
        client: "AAF INTERNATIONAL",
        status: "Available",
        summary: "Panel filters for various filtration systems from AAF INTERNATIONAL.",
        image: "/project/panel.jpeg"
    },
    {
        id: "d12",
        title: "Parts for KARCHER Ride-on-Scrubber",
        client: "KARCHER",
        status: "Available",
        summary: "Spare parts for KARCHER ride-on scrubbers.",
        image: "/project/ridescrub.jpg"
    },
    {
        id: "d13",
        title: "Tour Guide System",
        client: "WILLIAMS AV",
        status: "Available",
        summary: "Tour guide communication systems from WILLIAMS AV.",
        image: "/project/tgui.jpg"
    },
] as const

export default function ProjectsSection() {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    // GSAP Animation for Title
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2 }
        )
    }, [])

    // Scroll functions
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
        }
    }

    // 🔑 Keyboard Arrow Key Support
    useEffect(() => {
        const container = scrollContainerRef.current
        if (!container) return

        const handleKeyDown = (e: KeyboardEvent) => {
            // Only trigger if user is not typing in an input/textarea
            const activeElement = document.activeElement
            const isInput = ["INPUT", "TEXTAREA"].includes(activeElement?.tagName || "")

            if (isInput) return // Don't interfere with typing

            if (e.key === "ArrowLeft") {
                e.preventDefault()
                scrollLeft()
            } else if (e.key === "ArrowRight") {
                e.preventDefault()
                scrollRight()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    return (
        <AnimatedSection id="projects" className="m-0 py-12">
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
                    <h2
                        ref={titleRef}
                        className="text-3xl md:text-4xl font-bold tracking-tight text-blue-600"
                    >
                        Current Projects
                    </h2>

                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        At{" "}
                        <span className="font-semibold">International Marketing Services</span>, every project is a step toward
                        innovation and growth. From{" "}
                        <span className="font-semibold">tech-driven solutions</span> to{" "}
                        <span className="font-semibold">strategic global partnerships</span>, our work reflects our commitment to
                        excellence, sustainability, and lasting impact. Browse our current projects to see how we’re making ideas
                        happen — today and for the future.
                    </p>
                </div>

                {/* Scrollable Projects with Arrows */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Left Arrow Button */}
                    <button
                        onClick={scrollLeft}
                        className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform hover:scale-105"
                        aria-label="Scroll left"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Scroll Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-6"
                        style={{ scrollPadding: "1rem" }}
                    >
                        {PROJECTS.map((p) => (
                            <Card
                                key={p.id}
                                className="flex-shrink-0 w-72 sm:w-80 lg:w-96 snap-center bg-white shadow-md hover:shadow-xl transition-all duration-300 border"
                            >
                                <div className="overflow-hidden h-40">
                                    <OptimizedImage
                                        src={p.image || "/placeholder.svg"}
                                        alt={p.title}
                                        width={640}
                                        height={320}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-base sm:text-lg font-semibold line-clamp-1">
                                        {p.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        {p.summary}
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        <Badge
                                            variant="secondary"
                                            className="px-3 py-1 text-xs font-medium"
                                        >
                                            {p.client}
                                        </Badge>
                                        <Badge
                                            className={`${(STATUS as any)[p.status] || "bg-gray-100 text-gray-800"} px-3 py-1 text-xs font-medium`}
                                        >
                                            {p.status}
                                        </Badge>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-center" />
                            </Card>
                        ))}


                    </div>

                    {/* Right Arrow Button */}
                    <button
                        onClick={scrollRight}
                        className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform hover:scale-105"
                        aria-label="Scroll right"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <Link
                    href="/projects"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-400 transition"
                >
                    View All Projects
                </Link>
            </div>

            {/* Custom Scrollbar (Optional) */}
            <style jsx>{`
                ::-webkit-scrollbar {
                    height: 8px;
                }
                ::-webkit-scrollbar-track {
                    background: transparent;
                }
                ::-webkit-scrollbar-thumb {
                    background-color: rgba(155, 155, 155, 0.4);
                    border-radius: 6px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background-color: rgba(155, 155, 155, 0.7);
                }
            `}</style>
        </AnimatedSection>
    )
}