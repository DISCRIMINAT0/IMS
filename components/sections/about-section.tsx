import Image from "next/image"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"
import StaggerOnView from "@/components/stagger-on-view"
import Reveal from "@/components/reveal"
import { CalendarDays, Award, Landmark, MapPin, Truck, CheckCircle2 } from "lucide-react"
import OptimizedImage from "@/components/OptimizedImage";

const POINTS = [
    "Extensive global supplier network",
    "Seasoned procurement professionals",
    "Rigorous quality control measures",
    "Customer-centric service approach",
    "Agile local purchase solutions",
]

const SNAPSHOT = [
    { icon: CalendarDays, text: "Founded: 1985" },
    { icon: Landmark, text: "Govt & Private Sector Supplier" },
    { icon: MapPin, text: "Offices in Karachi & Rawalpindi" },
    { icon: Truck, text: "Nationwide Coverage" },
]

export default function AboutSection() {
    return (
        <AnimatedSection
            id="about"
            className="bg-gradient-to-b from-white via-blue-50/30 to-white pt-0 m-0"
        >
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16 mt-0">
                    <AnimatedText
                        as="h2"
                        text="Our Company"
                        split="chars"
                        preset="elegant"
                        underline
                        className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-0"
                    />
                    <AnimatedText
                        as="p"
                        text="International Marketing Services is a premier importer and General Order Supplier, delivering exceptional products and services to diverse clientele. Since 1985, we&apos;ve been Pakistan&apos;s top supplier to government and semi-government agencies nationwide."
                        split="words"
                        preset="words-fly-in"
                        className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed"
                    />
                </div>

                <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] items-start">
                    {/* Leadership Card */}
                    <div className="space-y-10">
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
                            <AnimatedText
                                as="h3"
                                text="Our Leadership"
                                split="chars"
                                preset="zoom-soft"
                                underline
                                className="text-xl md:text-2xl font-semibold text-gray-900 mb-5 text-center mt-0"
                            />
                            <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start text-center lg:text-left">
                                <Reveal radius="rounded-full">
                                    <OptimizedImage
                                        src="/caa2.png?height=140&width=140"
                                        alt="CEO Portrait"
                                        width={140}
                                        height={140}
                                        className="rounded-full"
                                        priority
                                    />
                                </Reveal>
                                <div>
                                    <AnimatedText
                                        as="p"
                                        text="Saifuddin Anayat Hussain – Chief Executive Officer"
                                        split="chars"
                                        preset="elegant"
                                        className="font-semibold text-lg text-gray-900 mt-0"
                                        duration={0.7}
                                        stagger={0.015}
                                    />
                                    <AnimatedText
                                        as="p"
                                        text="With 40+ years in procurement and supply chain management, our CEO brings visionary leadership and hands-on expertise in international supplier negotiations and operational excellence."
                                        split="words"
                                        preset="words-fly-in"
                                        className="text-sm text-gray-600 mt-2 leading-relaxed"
                                        duration={0.7}
                                        stagger={0.03}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Competitive Edge */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 md:p-8 rounded-2xl shadow-lg">
                            <AnimatedText
                                as="h3"
                                text="Our Competitive Edge"
                                split="chars"
                                preset="elegant"
                                underline
                                className="text-2xl md:text-3xl font-bold text-white mb-6 text-center mt-0"
                            />
                            <StaggerOnView effect="tilt" amount={0.06} y={18}>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {POINTS.map((point) => (
                                        <div
                                            key={point}
                                            className="flex items-center gap-3 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition"
                                        >
                                            <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0" />
                                            <span className="text-white text-base font-medium">
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </StaggerOnView>
                        </div>
                    </div>

                    {/* Quick Snapshot */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
                        <AnimatedText
                            as="h4"
                            text="Quick Snapshot"
                            split="chars"
                            preset="elegant"
                            underline
                            className="text-xl md:text-2xl font-bold text-gray-900 mb-5 text-center mt-0"
                        />
                        <StaggerOnView effect="fade-zoom" amount={0.06} y={16}>
                            <div className="space-y-4">
                                {SNAPSHOT.map((item) => (
                                    <div
                                        key={item.text}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition"
                                    >
                                        <item.icon className="h-6 w-6 text-blue-600" />
                                        <span className="text-gray-700 font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </StaggerOnView>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    )
}
