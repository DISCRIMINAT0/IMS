"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AnimatedSection from "@/components/animated-section"

const STATUS = {
    Ongoing: "bg-blue-100 text-blue-800",
    Completed: "bg-green-100 text-green-800",
    Planned: "bg-amber-100 text-amber-800",
    Available: "bg-purple-100 text-purple-800",
}
const PROJECTS = [
    {
        id: "d1",
        title: "AFL (Airfield Runway Lights) Lamps",
        client: "ATG AIRPORTS, UK",
        status: "Available",
        summary: "Supply of Airfield Runway Lights lamps sourced from ATG AIRPORTS, UK.",
        image: "/project/afl.jpeg"
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
    const underlineRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1, y: 0, duration: 1.2, // slower fade in
                stagger: 0.05,
            }
        )
        tl.fromTo(
            underlineRef.current,
            { width: 0 },
            {
                width: "14rem", duration: 1.2, // slower fade in
                stagger: 0.05,
            },
            "-=0.5"
        )
    }, [])

    return (
        <AnimatedSection id="projects">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2
                        ref={titleRef}
                        className="text-3xl md:text-4xl font-bold tracking-tight relative inline-block text-blue-600"
                    >
                        Current Projects

                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        At <span className="font-semibold">International Marketing Services</span>, every project is a step toward
                        innovation and growth. From <span className="font-semibold">tech-driven solutions</span> to
                        <span className="font-semibold"> strategic global partnerships</span>, our work reflects our commitment to
                        excellence, sustainability, and lasting impact. Browse our current projects to see how we’re making ideas
                        happen — today and for the future.
                    </p>
                </div>

                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
                    {PROJECTS.map((p) => (
                        <Card
                            key={p.id}
                            className="overflow-hidden w-full max-w-sm transition-transform transform hover:scale-105 hover:shadow-lg"
                        >
                            <div className="overflow-hidden">
                                <Image
                                    src={p.image || "/placeholder.svg"}
                                    alt={p.title}
                                    width={640}
                                    height={320}
                                    className="w-full h-40 object-cover rounded-t-md"
                                />
                            </div>
                            <CardHeader className="text-center">
                                <CardTitle className="text-lg font-semibold">{p.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 text-center">
                                <p className="text-sm text-muted-foreground">{p.summary}</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                                        {p.client}
                                    </Badge>
                                    <Badge
                                        className={`${(STATUS as any)[p.status] || "bg-gray-100 text-gray-800"} px-3 py-1 text-sm font-medium`}
                                    >
                                        {p.status}
                                    </Badge>
                                </div>
                            </CardContent>
                            <CardFooter className="justify-center" />
                        </Card>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    )
}