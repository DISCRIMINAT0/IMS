"use client";

import OptimizedImage from "@/components/OptimizedImage";
import AnimatedSection from "@/components/animated-section";

const CERTIFICATIONS = [
    "/certifications/cert1.jpg",
    "/certifications/cert2.jpg",
    "/certifications/cert3.jpg",
    "/certifications/cert4.jpg",
    "/certifications/cert5.jpg",
    "/certifications/cert6.jpg",
    "/certifications/cert7.jpg",
    "/certifications/cert8.jpg",
];

export default function CertificationsSection() {
    return (
        <AnimatedSection
            id="certifications"
            className="bg-gray-50 py-8 sm:py-10 md:py-14"
        >
            <div className="mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-slate-800">
                    Certifications
                </h2>

                {/* Grid of Certifications */}
                <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 place-items-center">
                    {CERTIFICATIONS.map((src, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <OptimizedImage
                                src={src}
                                alt={`Certification ${index + 1}`}
                                width={300}
                                height={200}
                                blurDataURL={`/certifications/blur/cert${index + 1}.jpg`}
                                className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </section>
            </div>
        </AnimatedSection>
    );
}
