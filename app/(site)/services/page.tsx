import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="w-full py-10 md:py-16">
      <div className="container px-4 md:px-6 space-y-12">
        <header className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight">Services</h1>
          <p className="mt-3 text-muted-foreground">
            Delivering quality procurement solutions with ISO 9001 certified excellence.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>General Order Supply</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Image
                src={"/placeholder.svg?height=160&width=320&query=office%20and%20industrial%20supplies"}
                alt="General Order Supply"
                width={640}
                height={320}
                className="w-full h-40 object-cover rounded-md"
              />
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Office supplies and equipment</li>
                <li>Industrial tools and machinery</li>
                <li>Electrical & electronic components</li>
                <li>Construction tools & equipment</li>
                <li>Safety/Personal Protective Equipment (PPE)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Importation Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Image
                src={"/placeholder.svg?height=160&width=320&query=import%20procurement%20and%20quality%20control"}
                alt="Importation Services"
                width={640}
                height={320}
                className="w-full h-40 object-cover rounded-md"
              />
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Product sourcing and procurement</li>
                <li>Quality control and assurance</li>
                <li>Customs clearance and documentation</li>
                <li>Logistics and transportation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Local Purchase Solutions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Image
                src={"/placeholder.svg?height=160&width=320&query=local%20sourcing%20and%20urgent%20delivery"}
                alt="Local Purchase Solutions"
                width={640}
                height={320}
                className="w-full h-40 object-cover rounded-md"
              />
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Swift sourcing & delivery</li>
                <li>Competitive local pricing</li>
                <li>Urgent requirement fulfillment</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Industries We Serve</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border p-5">
              <h3 className="font-semibold">Power Plant Industry</h3>
              <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Valves, pumps, compressors</li>
                <li>Steel products and alloys</li>
                <li>Workshop tools and chemicals</li>
              </ul>
            </div>
            <div className="rounded-lg border p-5">
              <h3 className="font-semibold">Oil & Gas Industry</h3>
              <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Precision measuring instruments</li>
                <li>Valves, gaskets, pipe fittings</li>
                <li>Drilling equipment components</li>
              </ul>
            </div>
            <div className="rounded-lg border p-5">
              <h3 className="font-semibold">Aviation Industry</h3>
              <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Airport runway lighting systems</li>
                <li>Chiller parts</li>
                <li>Firefighting equipment</li>
                <li>Baggage handling system parts</li>
              </ul>
            </div>
            <div className="rounded-lg border p-5">
              <h3 className="font-semibold">Telecommunication</h3>
              <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Telecom cables and accessories</li>
                <li>Line and post materials</li>
                <li>Connection cabinets and boxes</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
