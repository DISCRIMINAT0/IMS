// /app/projects/page.tsx
"use client";

import { PROJECTS, STATUS } from "@/components/sections/projects";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import OptimizedImage from "@/components/OptimizedImage";
import { useRouter } from "next/navigation";

export default function ProjectsGridPage() {
    const router = useRouter();
    return (
        <section className="py-12 pt-30 container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-8">
                All Projects
            </h1>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {PROJECTS.map((p) => (
                    <Card
                        key={p.id}
                        className="bg-white shadow-md hover:shadow-xl transition-all duration-300 border"
                    >
                        <div className="overflow-hidden h-48">
                            <OptimizedImage
                                src={p.image || "/placeholder.svg"}
                                alt={p.title}
                                width={640}
                                height={320}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold">{p.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">{p.summary}</p>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">
                                    {p.client}
                                </Badge>
                                <Badge
                                    className={`${(STATUS as any)[p.status] || "bg-gray-100 text-gray-800"} px-3 py-1 text-xs font-medium`}
                                >
                                    {p.status}
                                </Badge>
                            </div>
                        </CardContent>
                        <CardFooter />
                    </Card>
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <button
                    onClick={() => router.back()} // ✅ goes to previous page
                    className="px-10 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md
  hover:bg-blue-400 transition focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    ← Back
                </button>
            </div>
        </section>
    );
}
