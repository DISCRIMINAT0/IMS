"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import OptimizedImage from "@/components/OptimizedImage";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

type NavItem = {
  id: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "clients", label: "Clients" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "certifications", label: "Certifications" }
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  // Set active based on scroll position
  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;

      const t = ScrollTrigger.create({
        trigger: el,
        start: "top top+=64", // start when section top reaches header height
        end: "bottom top+=64", // end when section bottom reaches header height
        onToggle: (self) => {
          if (self.isActive) setActive(item.id);
        },
        scrub: true // keeps updating during scroll
      });

      triggers.push(t);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  const scrollToCenter = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const header = document.getElementById("site-header");
    const headerH = header ? header.offsetHeight : 64;
    const targetY =
      window.scrollY +
      rect.top -
      (window.innerHeight - rect.height) / 2 +
      headerH * 0.25;

    gsap.to(window, { duration: 0.8, ease: "power2.out", scrollTo: targetY });
  };

  const NavLink = useMemo(
    () =>
      function NavLink({ item }: { item: NavItem }) {
        const isActive = active === item.id;
        return (
          <button
            onClick={() => {
              setOpen(false);
              scrollToCenter(item.id);
            }}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 
              ${isActive
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
              }`}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </button>
        );
      },
    [active]
  );

  return (
    <header
      id="site-header"
      className="fixed  top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
    >
      <div className="mx-auto container h-16 flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div
          className="flex items-center gap-3 flex-nowrap whitespace-nowrap min-w-0 max-w-full"
          style={{ minWidth: 0 }}
        >
          <OptimizedImage
            src="/android-chrome-512x512.png?height=40&width=40"
            alt="IMS Logo"
            width={40}
            height={40}
            className="rounded flex-shrink-0"
            priority
          />
          <div className="leading-tight min-w-0 max-w-full">
            <div className="font-extrabold text-[12px] md:text-sm tracking-wide uppercase font-sans truncate max-w-full">
              <span className="text-blue-700">
                INTERNATIONAL MARKETING SERVICES
              </span>
            </div>
            <div className="italic text-[10px] md:text-xs text-slate-500 truncate max-w-full">
              "Where Global Demand Meets Reliable Supply"
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.id} item={item} />
          ))}
          <Button
            onClick={() => scrollToCenter("contact")}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Request Quote
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-gray-100 transition-colors"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t shadow-lg animate-slideDown">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`px-3 py-2 rounded-md text-base font-medium transition-all duration-200
                  ${active === item.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
                  }`}
                onClick={() => {
                  scrollToCenter(item.id);
                  setOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => {
                scrollToCenter("contact");
                setOpen(false);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Request Quote
            </Button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.18s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
