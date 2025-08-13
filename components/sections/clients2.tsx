"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/animated-section";

const organizations = [
    "DP Navy",
    "Heavy Mechanical Complex (HMC), Taxila",
    "Karachi Electric (K-Electric)",
    "Karachi Port Trust (KPT)",
    "National Database and Registration Authority (NADRA)",
    "National Telecommunication Authority (NTC)",
    "Oil and Gas Development Company Limited (OGDCL)",
    "Pakistan Airports Authority (PAA) (Civil Aviation Authority (CAA))",
    "Pak-American Fertilizers Limited (aka Agritech)",
    "Pak-Arab Refinery Company Limited (PARCO)",
    "Pakistan International Airlines (PIA)",
    "Pakistan Machine Tools Factory Pvt Ltd.",
    "Pakistan National Shipping Corporation (PNSC)",
    "Pakistan Ordnance Factories (POF)",
    "Pakistan Petroleum Limited (PPL)",
    "Pakistan Railway, Carriage Factory, Rawalpindi",
    "Pakistan State Oil (PSO)",
    "Pakistan Telecommunication Company Limited (PTCL)",
    "Pakistan Television Corporation Limited",
    "Peoples Steel Mills Limited (PSM)",
    "Ramada Hotel, Islamabad",
    "State Bank of Pakistan Banking Services Corporation",
    "State Life Insurance Corporation of Pakistan",
    "Swat Institute of Nuclear Medicine Oncology & Radiotherapy (SINOR)",
    "Sui Northern Gas Pipelines Limited (SNGPL)",
    "Sui Southern Gas Company Limited (SSGC)",
];

export default function BlueThemeOrgList() {
    return (
        <AnimatedSection id="clients" className="m-0">
            <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 px-8 sm:px-14 md:px-28 rounded-3xl shadow-2xl max-w-5xl mx-auto overflow-hidden">
                {/* Background blur overlay */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-blue-900 to-blue-700 opacity-30 rounded-3xl blur-3xl -z-10"
                />

                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl font-extrabold mb-10 text-center tracking-widest drop-shadow-xl"
                >
                    Proudly Serving Government & Industry Organizations
                    <span className="block mx-auto mt-3 w-32 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 shadow-lg" />
                </motion.h2>

                <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.12 } },
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg font-semibold leading-relaxed max-h-[600px] overflow-y-auto pr-2 custom-scrollbar"
                >
                    {organizations.map((org, i) => (
                        <motion.li
                            key={i}
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            whileHover={{ scale: 1.05, boxShadow: "0 12px 25px rgba(14, 165, 233, 0.6)" }}
                            className="flex items-center gap-3 bg-blue-800/90 hover:bg-blue-700/95 transition-all rounded-lg px-5 py-3 cursor-default shadow-md select-none"
                        >
                            <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                            {org}
                        </motion.li>
                    ))}
                </motion.ul>

            </section>
        </AnimatedSection>
    );
}
