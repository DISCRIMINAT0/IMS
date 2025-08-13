import { Badge } from "@/components/ui/badge"
import { Award, Building2, Globe2, MapPin } from 'lucide-react'

export default function QuickFacts() {
    const items = [
        { icon: Award, text: "40+ years of industry experience" },
        { icon: Globe2, text: "Extensive international supplier network" },
        { icon: Building2, text: "Serving government & private sectors" },
        { icon: MapPin, text: "Offices in Karachi & Rawalpindi" },
    ] as const

    return (
        <section className="py-4 md:py-6 bg-blue-50 border-y border-blue-100">
            <div className="mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    {items.map((it) => (
                        <Badge
                            key={it.text}
                            variant="secondary"
                            className="bg-white text-slate-700 border border-blue-100 flex items-center gap-2 shadow-sm px-3 py-1 text-xs sm:text-sm md:text-base"
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
