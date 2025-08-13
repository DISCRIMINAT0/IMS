"use client"; // needed if you are using hooks in Next.js app router

import { useEffect, useRef, useState } from "react";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

import HeroSection from "@/components/sections/hero";
import QuickFacts from "@/components/sections/quick-facts";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services";
import ClientsSection from "@/components/sections/clients";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import CertificationsSection from "@/components/sections/certifications";
import BlueThemeOrgList from "@/components/sections/clients2";

// Hook to check if element is in viewport
function useOnScreen(ref: React.RefObject<Element>, threshold = 0.5) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref, threshold]);

    return isIntersecting;
}

// Wrapper for triggering animations on enter and leave
function SectionWrapper({
    children,
    onEnter,
    onLeave,
}: {
    children: React.ReactNode;
    onEnter: () => void;
    onLeave: () => void;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            onEnter();
        } else {
            onLeave();
        }
    }, [isVisible, onEnter, onLeave]);

    return (
        <div
            ref={ref}

        >
            {children}
        </div>
    );
}

export default function Page() {
    const reloadSection = (sectionName: string) => {
        console.log(`Animation/Reload triggered for ${sectionName}`);
        // ✅ Place your animation start or data reload logic here
    };

    const resetSection = (sectionName: string) => {
        console.log(`Reset triggered for ${sectionName}`);
        // ✅ Place your animation reset logic here
    };

    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <SiteHeader />

            <SectionWrapper
                onEnter={() => reloadSection("Hero")}
                onLeave={() => resetSection("Hero")}
            >
                <HeroSection />
            </SectionWrapper>



            <SectionWrapper
                onEnter={() => reloadSection("About")}
                onLeave={() => resetSection("About")}
            >
                <AboutSection />
            </SectionWrapper>

            <SectionWrapper
                onEnter={() => reloadSection("Services")}
                onLeave={() => resetSection("Services")}
            >
                <ServicesSection />
            </SectionWrapper>



            <SectionWrapper
                onEnter={() => reloadSection("Services")}
                onLeave={() => resetSection("Services")}
            >
                <BlueThemeOrgList />
            </SectionWrapper>


            <SectionWrapper
                onEnter={() => reloadSection("Projects")}
                onLeave={() => resetSection("Projects")}
            >
                <ProjectsSection />
            </SectionWrapper>

            <SectionWrapper
                onEnter={() => reloadSection("Clients")}
                onLeave={() => resetSection("Clients")}
            >
                <ClientsSection />
            </SectionWrapper>

            <SectionWrapper
                onEnter={() => reloadSection("Contact")}
                onLeave={() => resetSection("Contact")}
            >
                <ContactSection />
            </SectionWrapper>

            <SectionWrapper
                onEnter={() => reloadSection("Contact")}
                onLeave={() => resetSection("Contact")}
            >
                <CertificationsSection />
            </SectionWrapper>



            <SiteFooter />
        </main>
    );
}

