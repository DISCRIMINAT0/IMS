"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import baseProjects from "@/data/projects"
import { Badge } from "@/components/ui/badge"

type Project = {
  id: string
  title: string
  client: string
  status: "Ongoing" | "Completed" | "Planned"
  summary: string
}

export default function ProjectsPage() {
  const [localProjects, setLocalProjects] = useState<Project[]>([])
  const projects = useMemo(
    () => [...baseProjects, ...localProjects],
    [localProjects]
  )
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("ims.projects")
    if (saved) {
      setLocalProjects(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("ims.projects", JSON.stringify(localProjects))
  }, [localProjects])

  function addProject(formData: FormData) {
    const title = String(formData.get("title") || "").trim()
    const client = String(formData.get("client") || "").trim()
    const status = (String(formData.get("status") || "Ongoing") as Project["status"])
    const summary = String(formData.get("summary") || "").trim()
    if (!title) return
    const newProject: Project = {
      id: `${Date.now()}`,
      title,
      client,
      status,
      summary,
    }
    setLocalProjects((prev) => [newProject, ...prev])
    setShowForm(false)
  }

  return (
    <section className="w-full py-10 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Current Projects</h1>
            <p className="mt-3 text-muted-foreground">
              A snapshot of ongoing, completed, and planned engagements.
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setShowForm((s) => !s)}>
            {showForm ? "Close" : "Add Project"}
          </Button>
        </div>

        {showForm && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-base">New Project</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action={(fd) => addProject(fd)}
                className="grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.currentTarget as HTMLFormElement
                  const fd = new FormData(form)
                  addProject(fd)
                  form.reset()
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" name="title" placeholder="e.g., Supply of Valves for XYZ Plant" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="client">Client</Label>
                  <Input id="client" name="client" placeholder="e.g., K-Electric" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <select
                    id="status"
                    name="status"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                    defaultValue="Ongoing"
                  >
                    <option>Ongoing</option>
                    <option>Completed</option>
                    <option>Planned</option>
                  </select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="summary">Summary</Label>
                  <Textarea id="summary" name="summary" placeholder="Short description..." />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Save Project</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.id} className="overflow-hidden">
              <Image
                src={"/placeholder.svg?height=160&width=320&query=industrial%20equipment%20and%20site%20work"}
                alt={p.title}
                width={640}
                height={320}
                className="w-full h-40 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">{p.summary}</p>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{p.client}</Badge>
                  <Badge className={p.status === "Ongoing" ? "bg-blue-100 text-blue-800" : p.status === "Completed" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}>
                    {p.status}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
