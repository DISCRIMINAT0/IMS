"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/animated-section";
import AnimatedText from "@/components/animated-text";

import { useRouter } from "next/navigation"



gsap.registerPlugin(ScrollTrigger);



const DATA = [
    { item: "Stainless Steel Plate grade 430", category: "Metal" },
    { item: "Instrument Cable", category: "Electonics" },
    { item: "Compressor Chiller", category: "HVAC" },
    { item: "Combination Power Receptacle", category: "Electonics" },
    { item: "Helium Gas Cylinder", category: "Gases" },
    { item: "Laser Engraving Machine", category: "Industrial" },
    { item: "Gloves", category: "PPE" },
    { item: "Valve and Purifier", category: "Hardware" },
    { item: "Ducted PP Fume Hood", category: "Pharma/Laboratory" },
    { item: "Rozette OPEX", category: "Electonics" },
    { item: "AFL Lamps", category: "Airport" },
    { item: "Tool Kit", category: "Hardware" },
    { item: "Chiller Installation and Testing", category: "HVAC" },
    { item: "Tyre Tubes and Flapper", category: "Rubber Goods" },
    { item: "Bag Filter", category: "Airport" },
    { item: "Hydraulic Metal Shearing Machine", category: "Industrial" },
    { item: "Gloves", category: "PPE" },
    { item: "Portable Crack Measurement Microscope", category: "Instrument" },
    { item: "Tractor Spare Parts", category: "Hardware" },
    { item: "Refrigerator", category: "Household Item" },
    { item: "Pump Head for Precision Tubing L/S Easy-Load", category: "Pharma/Laboratory" },
    { item: "Safety Shoes", category: "PPE" },
    { item: "Passenger Boarding Bridges", category: "Airport" },
    { item: "Chemical Storage Cabinet", category: "Pharma/Laboratory" },
    { item: "Furniture Item for Officers Mess", category: "Household Item" },
    { item: "Carbon Steel Gate Valve", category: "Hardware" },
    { item: "Oshkosh Striker Spare Parts", category: "Airport" },
    { item: "IC", category: "Electonics" },
    { item: "Air Conditioner", category: "HVAC" },
    { item: "Microcontroller Chip", category: "Electonics" },
    { item: "Range Finder", category: "Instrument" },
    { item: "Air Conditioner", category: "HVAC" },
    { item: "Carrier Board (with CPU) & Docking Board", category: "Airport" },
    { item: "Bed Sheet", category: "Household Item" },
    { item: "Toilet Paper", category: "Household Item" },
    { item: "Tripod", category: "Hardware" },
    { item: "Panel Filters for Computer Room Air Conditioning", category: "Airport" },
    { item: "Trolley 10x7 sft with complete Hydraulic Loading", category: "Airport" },
    { item: "Bag Filter", category: "Airport" },
    { item: "Lathe Machine", category: "Industrial" },
    { item: "Portable Welding Machine", category: "Industrial" },
    { item: "Welding Rods", category: "Instrument" },
    { item: "Silicon and Joint Filling Materials", category: "Chemicals" },
    { item: "Auto Quick Saw", category: "Hardware" },
    { item: "Dehumidifier", category: "Hardware" },
    { item: "MS Pipes and Fittings for Chilled Water", category: "Metal" },
    { item: "AFLS LED Lights for Primary Runway", category: "Airport" },
    { item: "Clover Lapping Compounds", category: "Chemicals" },
    { item: "Critical Spares for Maintenance of York (Chiller)", category: "Airport" },
    { item: "Office Furniture for Additional Directors", category: "Household Item" },
    { item: "Equipment’s for CATI Cricket Ground", category: "Hardware" },
    { item: "Hydraulic Oil & Hydraulic Oil-Filters 10 Micron", category: "Lubricants" },
    { item: "PVC Box", category: "Electonics" },
    { item: "Counter Chairs", category: "Household Item" },
    { item: "Mess Articles (Dining & Serving)", category: "Household Item" },
    { item: "DENCO Precision AC Unit", category: "HVAC" },
    { item: "Public Address System", category: "Airport" },
    { item: "Gym Items", category: "Household Item" },
    { item: "Battery Bank for Scrubber", category: "Airport" },
    { item: "Vending Machine", category: "Commercial" },
    { item: "Coffee Machine", category: "Commercial" },
    { item: "York Chiller Parts", category: "Airport" },
    { item: "Photostat Paper Reams", category: "Stationary" },
    { item: "Outdoor Stadium Chairs", category: "" },
    { item: "Smart LED TV", category: "Household Item" },
    { item: "Oil and Air Filters", category: "Lubricants" },
];
export default function Clients() {
    const router = useRouter()
    const pathname = usePathname();

    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(5);

    const categories = [
        "All",
        ...Array.from(
            new Set(
                DATA.map((d) =>
                    d.category.trim() === "" ? "Uncategorized" : d.category
                )
            )
        ).sort(),
    ];

    const filteredItems =
        selectedCategory === "All"
            ? DATA
            : DATA.filter((d) =>
                selectedCategory === "Uncategorized"
                    ? d.category.trim() === ""
                    : d.category === selectedCategory
            );

    const visibleItems = filteredItems.slice(0, visibleCount);

    // GSAP scroll animations for header and cards
    useEffect(() => {
        const ctx = gsap.context(() => {
            if (headerRef.current) {
                gsap.from(headerRef.current.children, {
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                    duration: 0.8,
                    y: 20,
                    opacity: 0,
                    ease: "power3.out",
                    stagger: 0.08,
                });
            }

            if (cardsRef.current) {
                gsap.from(cardsRef.current.children, {
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                    duration: 0.5,
                    opacity: 0,
                    y: 15,
                    ease: "power2.out",
                    stagger: 0.05,
                });
            }
        });

        return () => ctx.revert();
    }, [selectedCategory, visibleCount]);

    // Hover animations
    useEffect(() => {
        if (!cardsRef.current) return;
        const cards = Array.from(cardsRef.current.children) as HTMLElement[];

        const hoverTweens = cards.map((el) =>
            gsap.to(el, {
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(77,141,255,0.35)",
                duration: 0.25,
                paused: true,
                ease: "power1.out",
            })
        );

        const enterHandlers = hoverTweens.map((tween) => () => tween.play());
        const leaveHandlers = hoverTweens.map((tween) => () => tween.reverse());

        cards.forEach((el, i) => {
            el.addEventListener("mouseenter", enterHandlers[i]);
            el.addEventListener("mouseleave", leaveHandlers[i]);
        });

        return () => {
            cards.forEach((el, i) => {
                el.removeEventListener("mouseenter", enterHandlers[i]);
                el.removeEventListener("mouseleave", leaveHandlers[i]);
            });
        };
    }, [visibleItems]);

    // Scroll smoothly to #category-items on route/hash change with offset for fixed header
    useEffect(() => {
        if (typeof window === "undefined") return;
        if (window.location.hash === "#category-items") {
            const el = document.getElementById("category-items");
            if (el) {
                setTimeout(() => {
                    const yOffset = -80; // Adjust this to your fixed header height if any
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }, 300); // 300ms delay to ensure element is rendered and animated
            }
        }
    }, [pathname]);

    function onCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedCategory(e.target.value);
        setVisibleCount(5);
    }

    return (
        <AnimatedSection
            id=""
            className="bg-gradient-to-b from-[#1a237e] via-[#283593] to-[#3949ab] text-white py-14 scroll-mt-24"
            aria-label="Our product categories"
        >
            <div className="container px-6 max-w-7xl mx-auto">
                {/* Header */}
                <div
                    ref={headerRef}
                    className="text-center max-w-3xl mx-auto mb-10"
                    aria-label="Product Categories Header"
                >
                    <AnimatedText
                        as="h2"
                        text="Our Product Categories"
                        split="words"
                        className="text-4xl font-extrabold tracking-tight drop-shadow-lg"
                    />
                    <p className="mt-3 text-blue-200 text-lg max-w-xl mx-auto">
                        Browse our wide range of products by category.
                    </p>


                </div>

                {/* Dropdown */}
                <div className="max-w-xs mx-auto mb-12">
                    <select
                        value={selectedCategory}
                        onChange={onCategoryChange}
                        aria-label="Filter items by category"
                        className="w-full px-5 py-3 rounded-lg border border-transparent
              bg-white/10 backdrop-blur-md text-white font-semibold shadow-md
              transition focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat} className="text-black">
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Cards */}
                <div
                    ref={cardsRef}
                    className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    aria-label="Filtered items"
                >
                    {visibleItems.map(({ item, category }) => (
                        <Card
                            key={item + category}
                            className="bg-white/10 backdrop-blur-lg text-white rounded-xl shadow-lg cursor-pointer
                border border-white/20 hover:border-blue-300
                transition-transform transform"
                            tabIndex={0}
                            style={{ fontFeatureSettings: "'liga' off" }}
                        >
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold tracking-wide">
                                    {item}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 border border-blue-300 text-blue-100">
                                    {category || "Uncategorized"}
                                </span>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Show More Button */}
                {visibleCount < filteredItems.length && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => router.push("/categories")}
                            className="px-10 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md
  hover:bg-blue-400 transition focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            Show More
                        </button>
                    </div>
                )}

                <p className="mt-4 text-blue-200 text-lg max-w-xl mx-auto  text-center">
                    Moreover we deal in other items too and participate in Tender and&nbsp;respond&nbsp;to&nbsp;RFQ (Request for Quotation)
                </p>
            </div>
        </AnimatedSection>
    );
}
