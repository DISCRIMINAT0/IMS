import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Twitter, MapPin, Mail } from 'lucide-react'

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/projects", label: "Projects" },

  { href: "/contact", label: "Contact" },
]

export default function SiteFooter() {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="container px-4 md:px-6 py-12 grid gap-12 md:grid-cols-3">

        {/* Logo & Social */}
        <div className="flex flex-col items-center text-center space-y-5">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <Image
              src="/android-chrome-512x512.png"
              alt="IMS Logo"
              width={64}
              height={64}
              className="rounded-lg shadow-md"
            />
            <div>
              <h2 className="text-blue-600 font-bold text-lg md:text-xl tracking-wide">
                IMS - INTERNATIONAL
              </h2>
              <h3 className="text-white font-semibold text-lg md:text-xl tracking-wide">
                MARKETING SERVICES
              </h3>
            </div>
          </div>

          <p className="text-gray-400 text-xs italic mt-1">
            Since 1985 — "Where Global Demand Meets Reliable Supply"
          </p>


          {/* Certification */}
          <span className="text-xs text-blue-300 font-medium border border-blue-600 rounded-full px-3 py-1">
            ISO 9001:2008 Certified
          </span>

          {/* Social Links */}
          <div className="flex gap-5">
            <Link href="https://pk.linkedin.com/company/international-marketing-services-ims " aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-110" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-110" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-110" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <nav className="text-center md:text-left">
          <h3 className="font-semibold mb-4 text-blue-600 uppercase tracking-wide border-b border-neutral-800 pb-2">
            Quick Links
          </h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block px-2 py-1 rounded-md hover:text-white hover:bg-blue-600 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <div>
          <h3 className="text-center md:text-left font-semibold mb-4 text-blue-600 uppercase tracking-wide border-b border-neutral-800 pb-2">
            Contact Us
          </h3>
          <div className="text-sm space-y-3">
            {[
              "A-149, Block C, North Nazimabad, Karachi-74700",
              "Office #418, Industrial Town Plaza, Sharah-e-Liaquat, Karachi-74000",
              "Shop #217/19, Saleh Market, Adamjee Road, Saddar Cantt, Rawalpindi-46000",
            ].map((address, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-blue-600" />
                <span>{address}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <Mail className="h-5 w-5 text-blue-600" />
              <span className="hover:text-blue-500 cursor-pointer transition-colors">
                info@ims-pk.com
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="container px-4 md:px-6 py-4 text-xs text-neutral-500 flex justify-center">
          <p>© {new Date().getFullYear()} IMS. All rights reserved.</p>
        </div>
      </div>

    </footer>
  )
}
