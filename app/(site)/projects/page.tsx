"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import baseProjects from "@/data/projects"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const statusClasses: Record<string, string> = {
    Ongoing: "bg-blue-100 text-blue-800",
    Completed: "bg-green-100 text-green-800",
    Planned: "bg-amber-100 text-amber-800",
    Available: "bg-purple-100 text-purple-800",
  }

  return (
    <section className="w-full py-10 md:py-16">
      <div className="container px-4 md:px-6">
        {/* Title & Description */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Current Projects</h1>
          <p className="mt-3 text-muted-foreground">
            Shaping the Future, One Vision at a Time
          </p>
          <p className="mt-4 text-muted-foreground">
            At <span className="font-semibold">International Marketing Services</span>, every project is a step toward
            innovation and growth. From <span className="font-semibold">tech-driven solutions</span> to
            <span className="font-semibold"> strategic global partnerships</span>, our work reflects our commitment to
            excellence, sustainability, and lasting impact. Browse our current projects to see how we’re making ideas
            happen — today and for the future.
          </p>
        </div>


        {/* Cards */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {baseProjects.map((p) => (
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
                    className={`${statusClasses[p.status] || "bg-gray-100 text-gray-800"} px-3 py-1 text-sm font-medium`}
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
    </section>
  )
}
