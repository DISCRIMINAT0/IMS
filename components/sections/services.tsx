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
import { PackageSearch, ShieldCheck, Truck, Wrench, Factory, Fuel, Plane, Radio } from "lucide-react";

export default function ServicesSection() {
    const whatWeDoUnderline = useRef<HTMLDivElement>(null);
    const industriesUnderline = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initialize scaleX to 0 with origin left center for both underlines
        gsap.set([whatWeDoUnderline.current, industriesUnderline.current], {
            scaleX: 0,
            transformOrigin: "left center",
        });

        // Animate the underlines sequentially with smooth ease
        const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
        if (whatWeDoUnderline.current) {
            tl.to(whatWeDoUnderline.current, { scaleX: 1 });
        }
        if (industriesUnderline.current) {
            tl.to(industriesUnderline.current, { scaleX: 1 }, ">0.3");
        }
    }, []);

    return (
        <AnimatedSection id="services">
            <div className="container px-4 md:px-6">
                {/* What We Do */}
                <div className="mb-8 text-center relative max-w-3xl mx-auto">
                    <AnimatedText
                        as="h2"
                        text="What We Do"
                        split="chars"
                        preset="elegant"
                        className="relative inline-block font-extrabold tracking-tight px-4 bg-white text-3xl text-gray-900"
                    />
                    {/* Underline with ref */}
                    <div
                        ref={whatWeDoUnderline}
                        className="absolute top-1/2 left-0 right-0 h-[2px] bg-blue-600 -z-10"
                        style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
                    ></div>

                    <AnimatedText
                        as="p"
                        text="Comprehensive procurement solutions across industries."
                        split="words"
                        preset="words-fly-in"
                        className="text-muted-foreground mt-6 max-w-xl mx-auto"
                    />
                </div>

                {/* Services Cards */}
                <StaggerOnView effect="fade-zoom" amount={0.08} y={20}>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <Card className="border-blue-100 hover:shadow-md transition">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <PackageSearch className="h-5 w-5 text-blue-600" />
                                    General Order Supply
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Reveal>
                                    <Image
                                        src={"/gos.jpg?height=140&width=280&query=office%20supplies%20and%20equipment%20flatlay"}
                                        alt="General Order Supply"
                                        width={560}
                                        height={280}
                                        className="w-full h-36 object-cover rounded-md"
                                    />
                                </Reveal>
                                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                    <li>Office supplies & equipment</li>
                                    <li>Industrial tools & machinery</li>
                                    <li>Electrical & electronic components</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-blue-100 hover:shadow-md transition">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                                    Importation Services
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Reveal>
                                    <Image
                                        src={"/impexp.jpeg?height=140&width=280&query=global%20sourcing%20and%20quality%20assurance"}
                                        alt="Importation Services"
                                        width={560}
                                        height={280}
                                        className="w-full h-36 object-cover rounded-md"
                                    />
                                </Reveal>
                                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                    <li>Product sourcing & procurement</li>
                                    <li>Quality control & assurance</li>
                                    <li>Customs clearance & documentation</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-blue-100 hover:shadow-md transition">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Truck className="h-5 w-5 text-blue-600" />
                                    Logistics & Delivery
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Reveal>
                                    <Image
                                        src={"/logdel.jpeg?height=140&width=280&query=freight%20logistics%20and%20transportation"}
                                        alt="Logistics & Delivery"
                                        width={560}
                                        height={280}
                                        className="w-full h-36 object-cover rounded-md"
                                    />
                                </Reveal>
                                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                    <li>Nationwide distribution</li>
                                    <li>Vendor coordination</li>
                                    <li>On-time delivery</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-blue-100 hover:shadow-md transition">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Wrench className="h-5 w-5 text-blue-600" />
                                    Local Purchase Solutions
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Reveal>
                                    <Image
                                        src={"/locpurc.webp?height=140&width=280&query=local%20procurement%20and%20urgent%20fulfillment"}
                                        alt="Local Purchase Solutions"
                                        width={560}
                                        height={280}
                                        className="w-full h-36 object-cover rounded-md"
                                    />
                                </Reveal>
                                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                    <li>Swift sourcing & delivery</li>
                                    <li>Competitive local pricing</li>
                                    <li>Urgent requirement fulfillment</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </StaggerOnView>

                <div className="mt-10 flex flex-wrap justify-center gap-3">
                    <Badge className="bg-blue-50 text-blue-700 border border-blue-100">ISO 9001:2008 Certified</Badge>
                    <Badge variant="outline">Serving Govt. & Private Sectors</Badge>
                    <Badge variant="outline">Offices in Karachi & Rawalpindi</Badge>
                </div>
            </div>

            {/* Industries We Serve Section */}
            <div className="mt-12 bg-gray-50">
                <div className="container px-4 md:px-6 py-10">
                    <div className="mb-8 text-center relative max-w-3xl mx-auto">
                        <AnimatedText
                            as="h3"
                            text="Industries We Serve"
                            split="chars"
                            preset="elegant"
                            underline={false} // disable underline from AnimatedText
                            className="relative inline-block font-extrabold tracking-tight px-4 bg-white text-3xl text-gray-900 z-10"
                        />
                        {/* Underline with ref */}
                        <div
                            ref={industriesUnderline}
                            className="absolute left-0 right-0 bottom-0 h-1.5 bg-blue-600 rounded-md -z-10 max-w-3xl mx-auto"
                            style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
                        ></div>

                        <AnimatedText
                            as="p"
                            text="Tailored solutions across critical infrastructure sectors."
                            split="words"
                            preset="words-fly-in"
                            className="text-gray-600 mt-6 max-w-xl mx-auto"
                        />
                    </div>

                    <StaggerOnView effect="tilt" amount={0.06} y={16}>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Factory className="h-5 w-5 text-blue-600" /> Power Plant Industry
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                        <li>Valves, pumps, compressors</li>
                                        <li>Steel products and alloys</li>
                                        <li>Workshop tools and chemicals</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Fuel className="h-5 w-5 text-blue-600" /> Oil & Gas Industry
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                        <li>Precision measuring instruments</li>
                                        <li>Valves, gaskets, pipe fittings</li>
                                        <li>Drilling equipment components</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Plane className="h-5 w-5 text-blue-600" /> Aviation Industry
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                        <li>Airport runway lighting systems</li>
                                        <li>Chiller parts</li>
                                        <li>Firefighting equipment</li>
                                        <li>Baggage handling system parts</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Radio className="h-5 w-5 text-blue-600" /> Telecommunication
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                        <li>Telecom cables and accessories</li>
                                        <li>Line and post materials</li>
                                        <li>Connection cabinets and boxes</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </StaggerOnView>
                </div>
            </div>
        </AnimatedSection>
    );
}
