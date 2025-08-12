import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Twitter, MapPin, Mail } from "lucide-react"

export default function SiteFooter() {
  const year = new Date().getFullYear()
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#clients", label: "Clients" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "#certifications", label: "Certifications" },

  ]

  return (
    <footer className="relative">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500" />

      <div className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-blue-100">
        <div className="container px-4 md:px-6 py-12 grid gap-10 md:grid-cols-3">
          {/* Logo & Social */}
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Logo + Name always in one line on md+, stacked on mobile */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 whitespace-nowrap">
              <Image
                src="/android-chrome-512x512.png?height=64&width=64"
                alt="IMS Logo"
                width={64}
                height={64}
                className="rounded-xl shadow-lg ring-2 ring-blue-600/30 hover:scale-105 transition-transform duration-300 flex-shrink-0"
              />
              <h2 className="text-blue-200 font-extrabold text-lg md:text-lg tracking-wide leading-tight">
                INTERNATIONAL MARKETING SERVICES
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-blue-300/80 text-sm italic max-w-xs leading-relaxed">
              Since 1985 —{" "}
              <span className="text-blue-100/90">
                Where Global Demand Meets Reliable Supply
              </span>
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="https://pk.linkedin.com/company/international-marketing-services-ims"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-800/30 hover:bg-blue-700/50 transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-blue-200 group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>




          {/* Quick Links */}
          <nav className="text-center md:text-left">
            <h3 className="font-semibold mb-4 text-blue-300 uppercase tracking-wide border-b border-blue-800/60 pb-2">
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block px-2 py-1 rounded-md text-blue-100/90 hover:text-white hover:bg-blue-800/40 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h3 className="text-center md:text-left font-semibold mb-4 text-blue-300 uppercase tracking-wide border-b border-blue-800/60 pb-2">
              Contact Us
            </h3>
            <div className="text-sm space-y-3">
              {[
                "A-149, Block C, North Nazimabad, Karachi-74700",
                "Office #418, Industrial Town Plaza, Sharah-e-Liaquat, Karachi-74000",
                "Shop #217/19, Saleh Market, Adamjee Road, Saddar Cantt, Rawalpindi-46000",
              ].map((address, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-blue-300" />
                  <span className="text-blue-100/90">{address}</span>
                </div>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <Mail className="h-5 w-5 text-blue-300" />
                <span className="hover:text-white cursor-pointer transition-colors">info@ims-pk.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-800/50">
          <div className="container px-4 md:px-6 py-4 text-xs text-blue-200/80 flex justify-center">
            <p>© {year} IMS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
