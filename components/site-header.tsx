"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, Phone } from "lucide-react"
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
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center gap-4">
        {/* Logo & Tagline */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2 leading-tight">
            <Image
              src="/android-chrome-512x512.png"
              alt="IMS Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <div className="flex flex-col">
              <span className="font-bold tracking-tight">IMS - INTERNATIONAL MARKETING SERVICES</span>
              <span className="text-xs text-muted-foreground">
                Where Global Demand Meets Reliable Supply
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="ml-auto hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-slate-700 hover:text-blue-700"
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
          className="ml-auto md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border"
          onClick={() => setOpen((o) => !o)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm text-slate-700"
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
    </header>
  )
}
