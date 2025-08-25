// /app/projects/page.tsx
"use client";

import { PROJECTS, STATUS } from "@/components/sections/projects";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import OptimizedImage from "@/components/OptimizedImage";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ProjectsGridPage() {
    const router = useRouter();

    return (
        <section className="py-12 pt-30 container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-12"
            >
                All Projects
            </motion.h1>

            {/* Projects Grid */}
            <motion.div
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.15 },
                    },
                }}
            >
                {PROJECTS.map((p) => (
                    <motion.div
                        key={p.id}
                        variants={{
                            hidden: { opacity: 0, scale: 0.9, y: 30 },
                            visible: { opacity: 1, scale: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Card className="bg-white shadow-md hover:shadow-2xl transition-all duration-500 border rounded-2xl overflow-hidden h-full flex flex-col">
                            {/* Image */}
                            <div className="overflow-hidden h-48">
                                <OptimizedImage
                                    src={p.image || "/placeholder.svg"}
                                    alt={p.title}
                                    width={640}
                                    height={320}
                                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                                />
                            </div>

                            {/* Header */}
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-gray-900">
                                    {p.title}
                                </CardTitle>
                            </CardHeader>

                            {/* Content */}
                            <CardContent className="space-y-3 flex-grow">
                                <p className="text-sm text-muted-foreground line-clamp-4">
                                    {p.summary}
                                </p>
                                <div className="flex flex-wrap gap-2">
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

                            {/* Footer (sticks bottom) */}
                            <CardFooter className="mt-auto" />
                        </Card>
                    </motion.div>
                ))}
            </motion.div>

            {/* Back Button */}
            <motion.div
                className="flex justify-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <motion.button
                    onClick={() => router.back()}
                    whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(59,130,246,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md
                    hover:bg-blue-400 transition focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    ← Back
                </motion.button>
            </motion.div>
        </section>
    );
}
