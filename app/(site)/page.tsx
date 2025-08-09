import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PackageSearch, ShieldCheck, Truck, Wrench } from 'lucide-react'
import Hero from "@/components/hero"
import QuickFacts from "@/components/quick-facts"
import AboutPage from "./about/page"

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickFacts />
      <AboutPage />
      <section className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight">What We Do</h2>
            <p className="text-muted-foreground mt-2">
              Comprehensive procurement solutions across industries.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-blue-100 hover:shadow-md transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PackageSearch className="h-5 w-5 text-blue-600" />
                  General Order Supply
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Image
                  src={"/gos.jpg?height=140&width=280&query=office%20supplies%20and%20equipment%20flatlay"}
                  alt="General Order Supply"
                  width={560}
                  height={280}
                  className="w-full h-36 object-cover rounded-md"
                />
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
                <Image
                  src={"/impexp.jpeg?height=140&width=280&query=global%20sourcing%20and%20quality%20assurance"}
                  alt="Importation Services"
                  width={560}
                  height={280}
                  className="w-full h-36 object-cover rounded-md"
                />
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
                <Image
                  src={"/logdel.jpeg?height=140&width=280&query=freight%20logistics%20and%20transportation"}
                  alt="Logistics & Delivery"
                  width={560}
                  height={280}
                  className="w-full h-36 object-cover rounded-md"
                />
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
                <Image
                  src={"/locpurc.webp?height=140&width=280&query=local%20procurement%20and%20urgent%20fulfillment"}
                  alt="Local Purchase Solutions"
                  width={560}
                  height={280}
                  className="w-full h-36 object-cover rounded-md"
                />
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Swift sourcing & delivery</li>
                  <li>Competitive local pricing</li>
                  <li>Urgent requirement fulfillment</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Badge className="bg-blue-50 text-blue-700 border border-blue-100">ISO 9001:2008 Certified</Badge>
            <Badge variant="outline">Serving Govt. & Private Sectors</Badge>
            <Badge variant="outline">Offices in Karachi & Rawalpindi</Badge>
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button className="bg-blue-600 hover:bg-blue-700">Explore Services</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Current Projects</h2>
            <p className="text-muted-foreground mt-2">
              Highlighting active engagements across our client portfolio.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border bg-white p-4 space-y-3">
                <Image
                  src={"/placeholder.svg?height=160&width=320&query=industrial%20project%20site%20photo"}
                  alt="Project"
                  width={640}
                  height={320}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="font-semibold">Ongoing Project #{i + 1}</h3>
                <p className="text-sm text-muted-foreground">
                  Supply and logistics for critical infrastructure components.
                </p>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-100 text-blue-800" variant="secondary">Ongoing</Badge>
                  <span className="text-xs text-muted-foreground">Updated weekly</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/projects">
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">ISO 9001:2008 Certified Excellence</h2>
            <p className="text-muted-foreground">
              Our quality management systems ensure consistent, reliable outcomes for every engagement — from sourcing and
              procurement to delivery and after-sales support.
            </p>
            <div className="flex gap-3">
              <Link href="/certifications">
                <Button className="bg-blue-600 hover:bg-blue-700">View Certifications</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={"/placeholder.svg?height=360&width=540&query=ISO%209001%20certification%20badge%20and%20documents"}
              width={540}
              height={360}
              alt="ISO Certification"
              className="w-full rounded-xl border"
            />
          </div>
        </div>
      </section>
    </>
  )
}
