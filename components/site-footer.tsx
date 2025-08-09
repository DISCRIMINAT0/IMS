import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Twitter } from 'lucide-react'

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
]

export default function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 md:px-6 py-10 grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-blue-600" />
            <div>
              <div className="font-bold">IMS - INTERNATIONAL MARKETING SERVICES</div>
              <div className="text-xs text-muted-foreground">Since 1985</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/images/certifications/iso-9001-2008-badge.png"}
              alt="ISO 9001:2008"
              width={64}
              height={64}
              className="rounded"
            />
            <span className="text-sm">ISO 9001:2008 Certified</span>
          </div>
          <div className="flex gap-3 text-slate-500">
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 hover:text-blue-700" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 hover:text-blue-500" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 hover:text-blue-700" />
            </Link>
          </div>
        </div>

        <nav>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="mt-3 grid gap-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link className="text-slate-700 hover:text-blue-700" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm text-muted-foreground">
          <p>A-149, Block C, North Nazimabad, Karachi-74700</p>
          <p>{'Office #418, Industrial Town Plaza, Sharah-e-Liaquat, Karachi-74000'}</p>
          <p>{'Shop #217/19, Saleh Market, Adamjee Road, Saddar Cantt, Rawalpindi-46000'}</p>
          <p className="mt-2">info@ims-pk.com</p>
        </div>
      </div>
      <div className="border-t">
        <div className="container px-4 md:px-6 py-4 text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 sm:justify-between">
          <p>© {new Date().getFullYear()} IMS. All rights reserved.</p>
          <p>Made for demonstration. Content © IMS.</p>
        </div>
      </div>
    </footer>
  )
}
