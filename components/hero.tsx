import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="w-full pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20">
      <div className="container px-4 md:px-6">
        <div className="grid items-center justify-items-center text-center gap-8 lg:grid-cols-2 lg:text-left">
          {/* Left Column */}
          <div className="space-y-4 max-w-lg">
            <div className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium border border-blue-100">
              Premier Importers & General Order Suppliers Since 1985
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Delivering quality procurement solutions across industries
            </h1>
            <p className="text-muted-foreground">
              ISO 9001 certified excellence for government and private sector organizations.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Link href="/contact?type=request-quote">
                <Button className="bg-blue-600 hover:bg-blue-700">Request Quote</Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/image.png?height=500&width=600"
                alt="Engineering and Technical Equipment"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <div>
                    <div className="font-semibold text-gray-900">Quality Assured</div>
                    <div className="text-sm text-gray-600">ISO Certified Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
