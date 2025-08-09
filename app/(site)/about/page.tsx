import Image from "next/image"
import { CheckCircle2, CalendarDays, Award, Landmark, MapPin, Truck } from "lucide-react"

export default function AboutPage() {
  const points = [
    "Extensive global supplier network",
    "Seasoned procurement professionals",
    "Rigorous quality control measures",
    "Customer-centric service approach",
    "Agile local purchase solutions",
  ]

  const snapshot = [
    { icon: CalendarDays, text: "Founded: 1985" },
    { icon: Award, text: "ISO 9001:2008 Certified" },
    { icon: Landmark, text: "Govt & Private Sector Supplier" },
    { icon: MapPin, text: "Offices in Karachi & Rawalpindi" },
    { icon: Truck, text: "Nationwide Coverage" },
  ]

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4 md:px-8">

        {/* Hero Heading */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Our Company
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            International Marketing Services is a premier importer and General Order Supplier, delivering exceptional
            products and services to diverse clientele. Since 1985, we&apos;ve been Pakistan&apos;s top supplier to government
            and semi-government agencies nationwide.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] items-start">

          {/* Left Column */}
          <div className="space-y-12">

            {/* Leadership */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Our Leadership
              </h2>
              <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start text-center lg:text-left">
                <Image
                  src="/caa2.png?height=120&width=120&query=professional%20portrait"
                  alt="CEO Portrait"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-900">
                    Saifuddin Anayat Hussain – Chief Executive Officer
                  </p>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    With over 40 years in procurement and supply chain management, our CEO
                    brings visionary leadership and hands-on expertise in international
                    supplier negotiations and operational excellence.
                  </p>
                </div>
              </div>
            </div>


            {/* Competitive Edge */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Our Competitive Edge
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition"
                  >
                    <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0" />
                    <span className="text-white text-base font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Quick Snapshot */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Snapshot</h3>
            <div className="space-y-5">
              {snapshot.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition"
                >
                  <item.icon className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
