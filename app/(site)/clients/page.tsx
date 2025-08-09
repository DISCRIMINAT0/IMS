import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import clients from "@/data/clients"

export default function ClientsPage() {
  return (
    <section className="w-full py-10 md:py-16">
      <div className="container px-4 md:px-6">
        <header className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight">Our Esteemed Clients</h1>
          <p className="mt-3 text-muted-foreground">
            Trusted by leading organizations across Pakistan.
          </p>
        </header>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.slice(0, 9).map((c) => (
            <Card key={c.name}>
              <CardHeader>
                <CardTitle className="text-base">{c.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{c.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Full Client List</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-muted-foreground">
                {clients.map((c) => (
                  <li key={c.name}>• {c.name}</li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-4">
                {'For the complete list, refer to the official document (page 13) or contact us for details.'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
