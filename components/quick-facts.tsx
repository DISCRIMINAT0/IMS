import { Badge } from "@/components/ui/badge"
import { Award, Building2, Globe2, ShieldCheck, MapPin } from 'lucide-react'

export default function QuickFacts() {
  const items = [
    { icon: Award, text: "40+ years of industry experience" },
    { icon: ShieldCheck, text: "ISO 9001:2008 certified" },
    { icon: Globe2, text: "Extensive international supplier network" },
    { icon: Building2, text: "Serving government & private sectors" },
    { icon: MapPin, text: "Offices in Karachi & Rawalpindi" },
  ] as const

  return (
    <section className="w-full py-6 md:py-8 bg-blue-50 border-y border-blue-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-wrap items-center gap-3 justify-center">
          {items.map((it) => (
            <Badge
              key={it.text}
              variant="secondary"
              className="bg-white text-slate-700 border border-blue-100 flex items-center gap-2 shadow-sm"
            >
              <it.icon className="h-4 w-4 text-blue-600" />
              <span>{it.text}</span>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
