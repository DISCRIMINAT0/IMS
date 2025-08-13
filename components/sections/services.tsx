"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/animated-section";
import AnimatedText from "@/components/animated-text";
import Reveal from "@/components/reveal";
import StaggerOnView from "@/components/stagger-on-view";
import OptimizedImage from "@/components/OptimizedImage";
import {
    PackageSearch,
    ShieldCheck,
    Truck,
    Wrench,
    Factory,
    Fuel,
    Plane,
    Radio,
} from "lucide-react";

// ✅ Reusable consistent container
function SectionContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    );
}

export default function ServicesSection() {
    const whatWeDoUnderline = useRef<HTMLDivElement>(null);
    const industriesUnderline = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.set([whatWeDoUnderline.current, industriesUnderline.current], {
            scaleX: 0,
            transformOrigin: "left center",
        });

        const tl = gsap.timeline({
            defaults: { duration: 1, ease: "power3.out" },
        });
        if (whatWeDoUnderline.current) tl.to(whatWeDoUnderline.current, { scaleX: 1 });
        if (industriesUnderline.current)
            tl.to(industriesUnderline.current, { scaleX: 1 }, ">0.3");
    }, []);

    return (
        <AnimatedSection id="services" className="m-0">
            {/* --- What We Do --- */}
            <SectionContainer>
                <div className="mb-8 text-center relative max-w-3xl mx-auto">
                    <div className="relative inline-block">
                        <AnimatedText
                            as="h2"
                            text="What We Do"
                            split="chars"
                            preset="elegant"
                            className="relative font-extrabold tracking-tight px-4 bg-white text-2xl sm:text-3xl text-gray-900"
                        />
                        <div
                            ref={whatWeDoUnderline}
                            className="absolute left-0 right-0 bottom-0 h-[2px] bg-blue-600 -z-10"
                        ></div>
                    </div>

                    <AnimatedText
                        as="p"
                        text="Comprehensive procurement solutions across industries."
                        split="words"
                        preset="words-fly-in"
                        className="text-muted-foreground mt-4 sm:mt-6 max-w-xl mx-auto text-sm sm:text-base"
                    />
                </div>

                {/* Services Cards */}
                <StaggerOnView effect="fade-zoom" amount={0.08} y={20}>
                    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: PackageSearch,
                                title: "General Order Supply",
                                img: "/gos.jpg",
                                blur: "/blur/gos.jpg",
                                items: [
                                    "Office supplies & equipment",
                                    "Industrial tools & machinery",
                                    "Electrical & electronic components",
                                ],
                            },
                            {
                                icon: ShieldCheck,
                                title: "Importation Services",
                                img: "/impexp.jpeg",
                                blur: "/blur/impexp.jpeg",
                                items: [
                                    "Product sourcing & procurement",
                                    "Quality control & assurance",
                                    "Customs clearance & documentation",
                                ],
                            },
                            {
                                icon: Truck,
                                title: "Logistics & Delivery",
                                img: "/logdel.jpeg",
                                blur: "/blur/logdel.jpeg",
                                items: [
                                    "Nationwide distribution",
                                    "Vendor coordination",
                                    "On-time delivery",
                                ],
                            },
                            {
                                icon: Wrench,
                                title: "Local Purchase Solutions",
                                img: "/locpurc.webp",
                                blur: "/blur/locpurc.webp",
                                items: [
                                    "Swift sourcing & delivery",
                                    "Competitive local pricing",
                                    "Urgent requirement fulfillment",
                                ],
                            },
                        ].map((service, i) => (
                            <Card
                                key={i}
                                className="border-blue-100 hover:shadow-md transition"
                            >
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                                        <service.icon className="h-5 w-5 text-blue-600" />
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Reveal>
                                        <OptimizedImage
                                            src={service.img}
                                            alt={service.title}
                                            width={560}
                                            height={280}
                                            blurDataURL={service.blur}
                                            className="w-full h-32 sm:h-36 object-cover rounded-md"
                                        />
                                    </Reveal>
                                    <ul className="list-disc pl-5 text-xs sm:text-sm text-muted-foreground space-y-1">
                                        {service.items.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </StaggerOnView>


                {/* Badges */}
                <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
                    <Badge variant="outline" className="text-xs sm:text-sm">
                        Serving Govt. & Private Sectors
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                        Offices in Karachi & Rawalpindi
                    </Badge>
                </div>
            </SectionContainer>

            {/* --- Industries We Serve --- */}
            <div className="mt-12 bg-gray-50">
                <SectionContainer>
                    <div className="mb-8 text-center relative max-w-3xl mx-auto">
                        <div className="relative inline-block">
                            <AnimatedText
                                as="h3"
                                text="Industries We Serve"
                                split="chars"
                                preset="elegant"
                                underline={false}
                                className="relative font-extrabold tracking-tight px-4 bg-white text-2xl sm:text-3xl text-gray-900 z-10"
                            />
                            <div
                                ref={industriesUnderline}
                                className="absolute left-0 right-0 bottom-0 h-1.5 bg-blue-600 rounded-md -z-10"
                            ></div>
                        </div>

                        <AnimatedText
                            as="p"
                            text="Tailored solutions across critical infrastructure sectors."
                            split="words"
                            preset="words-fly-in"
                            className="text-gray-600 mt-4 sm:mt-6 max-w-xl mx-auto text-sm sm:text-base"
                        />
                    </div>

                    <StaggerOnView effect="tilt" amount={0.06} y={16}>
                        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    icon: Factory,
                                    title: "Power Plant Industry",
                                    items: [
                                        "Valves, pumps, compressors",
                                        "Steel products and alloys",
                                        "Workshop tools and chemicals",
                                    ],
                                },
                                {
                                    icon: Fuel,
                                    title: "Oil & Gas Industry",
                                    items: [
                                        "Precision measuring instruments",
                                        "Valves, gaskets, pipe fittings",
                                        "Drilling equipment components",
                                    ],
                                },
                                {
                                    icon: Plane,
                                    title: "Aviation Industry",
                                    items: [
                                        "Airport runway lighting systems",
                                        "Chiller parts",
                                        "Firefighting equipment",
                                        "Baggage handling system parts",
                                    ],
                                },
                                {
                                    icon: Radio,
                                    title: "Telecommunication",
                                    items: [
                                        "Telecom cables and accessories",
                                        "Line and post materials",
                                        "Connection cabinets and boxes",
                                    ],
                                },
                            ].map((industry, i) => (
                                <Card key={i}>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                                            <industry.icon className="h-5 w-5 text-blue-600" />
                                            {industry.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc pl-5 text-xs sm:text-sm text-muted-foreground space-y-1">
                                            {industry.items.map((item, j) => (
                                                <li key={j}>{item}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </StaggerOnView>
                </SectionContainer>
            </div>
        </AnimatedSection>
    );
}
