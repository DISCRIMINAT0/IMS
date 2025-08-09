import { Mail, MapPin, Phone } from 'lucide-react'
import QuoteForm from "@/components/quote-form"

export default function ContactPage() {
  return (
    <section className="w-full py-10 md:py-16">
      <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
          <p className="mt-3 text-muted-foreground">
            Reach out for quotes, inquiries, or partnership opportunities.
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <h2 className="font-semibold">Head Office (Karachi)</h2>
              <p className="text-sm text-muted-foreground mt-1 flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-blue-600" />
                A-149, Block C, North Nazimabad, Karachi-74700
              </p>
              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" /> +92 321 2565152
              </p>
            </div>

            <div>
              <h2 className="font-semibold">Corporate Office (Karachi)</h2>
              <p className="text-sm text-muted-foreground mt-1 flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-blue-600" />
                {'Office # 418, Industrial Town Plaza, SR-3/20, Serai Quarters, Sharah-e-Liaquat, Karachi-74000'}
              </p>
            </div>

            <div>
              <h2 className="font-semibold">Rawalpindi Branch</h2>
              <p className="text-sm text-muted-foreground mt-1 flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-blue-600" />
                {'Shop #217/19, Saleh Market, Adamjee Road, Saddar Cantt, Rawalpindi-46000'}
              </p>
              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" /> +92 51 5125553
              </p>
            </div>

            <div>
              <h2 className="font-semibold">Email</h2>
              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" /> info@ims-pk.com
              </p>
            </div>
          </div>
        </div>

        <div>
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}
