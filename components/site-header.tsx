"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/android-chrome-512x512.png"
            alt="IMS Logo"
            width={36}
            height={36}
            className="rounded"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-sm md:text-base tracking-tight">
              IMS - INTERNATIONAL MARKETING SERVICES
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground">
              Where Global Demand Meets Reliable Supply
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-slate-700 hover:text-blue-700 transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <Link href="/contact?type=request-quote">
            <Button className="bg-blue-600 hover:bg-blue-700">Request Quote</Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Open menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-gray-100 transition-colors"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t shadow-lg animate-slideDown">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-base font-medium text-slate-700 hover:text-blue-700 transition-colors"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/contact?type=request-quote"
              onClick={() => setOpen(false)}
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Animation */}
      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out forwards;
        }
      `}</style>
    </header>
  )
}
