import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CertificationsPage() {
  return (
    <section className="w-full py-10 md:py-16">
      <div className="container px-4 md:px-6">
        <header className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight">Certifications</h1>
          <p className="mt-3 text-muted-foreground">
            Demonstrating our commitment to quality and compliance.
          </p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">ISO 9001:2008 Certification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Image
                src={"/images/certifications/iso-9001-2008-certificate.png"}
                width={800}
                height={600}
                alt="ISO 9001:2008 Certificate"
                className="w-full h-auto rounded-md border"
              />
              <div className="flex flex-wrap gap-3">
                <Link href="/certifications/iso-9001-2008-certificate.pdf" target="_blank">
                  <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    Download PDF
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">Request Verification</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Company Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Image
                src={"/images/certifications/company-registration.png"}
                width={800}
                height={600}
                alt="Company Registration Document"
                className="w-full h-auto rounded-md border"
              />
              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    Request Originals
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
