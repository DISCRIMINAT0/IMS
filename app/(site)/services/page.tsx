import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PackageSearch, ShieldCheck, Truck, Wrench, Factory, Fuel, Plane, Radio } from 'lucide-react'
import { Badge } from "@/components/ui/badge"


export default function ServicesPage() {
  return (
    <main>
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





        </div>
      </section>

      <section id="industries" data-section="industries" className="w-full py-12 md:py-20 bg-gray-50 scroll-mt-24">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Industries We Serve</h2>
            <p className="text-muted-foreground mt-2">Tailored solutions across critical infrastructure sectors.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Factory className="h-5 w-5 text-blue-600" /> Power Plant Industry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Valves, pumps, compressors</li>
                  <li>Steel products and alloys</li>
                  <li>Workshop tools and chemicals</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Fuel className="h-5 w-5 text-blue-600" /> Oil & Gas Industry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Precision measuring instruments</li>
                  <li>Valves, gaskets, pipe fittings</li>
                  <li>Drilling equipment components</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="h-5 w-5 text-blue-600" /> Aviation Industry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Airport runway lighting systems</li>
                  <li>Chiller parts</li>
                  <li>Firefighting equipment</li>
                  <li>Baggage handling system parts</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Radio className="h-5 w-5 text-blue-600" /> Telecommunication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Telecom cables and accessories</li>
                  <li>Line and post materials</li>
                  <li>Connection cabinets and boxes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


    </main>
  );
}

