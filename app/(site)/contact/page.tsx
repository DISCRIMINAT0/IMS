import { Mail, MapPin, Phone } from 'lucide-react'
import QuoteForm from "@/components/quote-form"

export default function ContactPage() {
  return (
    <section className="w-full py-12 md:py-20 bg-gray-50">
      <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2">

        {/* Contact Info */}
        <div>
          {/* Centered heading */}
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                Contact Us
              </h2>
              <p className="text-gray-400 mt-2">
                Reach out for quotes, inquiries, or partnership opportunities.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-8">
            <ContactCard
              title="Head Office (Karachi)"
              address="A-149, Block C, North Nazimabad, Karachi-74700"
              phone="+92 321 2565152"
            />
            <ContactCard
              title="Corporate Office (Karachi)"
              address="Office #418, Industrial Town Plaza, SR-3/20, Serai Quarters, Sharah-e-Liaquat, Karachi-74000"
            />
            <ContactCard
              title="Rawalpindi Branch"
              address="Shop #217/19, Saleh Market, Adamjee Road, Saddar Cantt, Rawalpindi-46000"
              phone="+92 51 5125553"
            />
            <ContactCard
              title="Email"
              email="info@ims-pk.com"
            />
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}

function ContactCard({ title, address, phone, email }: {
  title: string
  address?: string
  phone?: string
  email?: string
}) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h2 className="font-semibold text-lg text-blue-600">{title}</h2>
      {address && (
        <p className="text-sm text-gray-600 mt-2 flex items-start gap-2">
          <MapPin className="h-4 w-4 mt-0.5 text-blue-500" />
          {address}
        </p>
      )}
      {phone && (
        <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
          <Phone className="h-4 w-4 text-blue-500" /> {phone}
        </p>
      )}
      {email && (
        <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
          <Mail className="h-4 w-4 text-blue-500" /> {email}
        </p>
      )}
    </div>
  )
}
