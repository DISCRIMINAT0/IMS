import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import clients from "@/data/clients"

export default function ClientsPage() {
  return (
    <section className="w-full py-12 md:py-20 bg-blue-900">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <header className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Our Esteemed Clients
          </h1>
          <p className="mt-3 text-blue-300 text-lg">
            Trusted by leading organizations across Pakistan.
          </p>
        </header>

        {/* Featured Clients */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.slice(0, 4).map((c) => (
            <Card
              key={c.name}
              className="bg-white text-blue-900 shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg"
            >
              <CardHeader className="flex items-center space-x-3">
                <CardTitle className="text-base font-semibold">
                  {c.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-blue-800">
                  {c.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Client List */}
        <div className="mt-14">
          <Card className="bg-white text-blue-900 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Full Client List
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-sm text-blue-800">
                {clients.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-center space-x-2 border-b border-blue-200 pb-1"
                  >
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{c.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
