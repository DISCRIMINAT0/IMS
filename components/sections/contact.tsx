"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone } from "lucide-react"
import AnimatedText from "@/components/animated-text"

function ContactCard({
    title,
    address,
    phone,
    email,
    ...props
}: {
    title: string
    address?: string
    phone?: string
    email?: string
} & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:scale-[1.02] transition-transform"
        >
            <h2 className="font-semibold text-lg text-blue-600">{title}</h2>
            {address && (
                <p className="text-sm text-gray-600 mt-2 flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 text-blue-500" />
                    {address}
                </p>
            )}
            {phone && (
                <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-500" /> {phone}
                </p>
            )}
            {email && (
                <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-blue-500" /> {email}
                </p>
            )}
        </div>
    )
}

export default function ContactSection() {
    const ref = useRef<HTMLDivElement | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!ref.current) return
        gsap.fromTo(
            ref.current.querySelectorAll("[data-stagger]"),
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }
        )
    }, [])

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.currentTarget)
        const name = formData.get("name") as string
        const company = formData.get("company") as string
        const email = formData.get("email") as string
        const phone = formData.get("phone") as string
        const category = formData.get("category") as string
        const message = formData.get("message") as string

        const subject = encodeURIComponent(`Request for ${category}`)
        const body = encodeURIComponent(
            `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nCategory: ${category}\n\nRequirements:\n${message}`
        )

        window.location.href = `mailto:info@ims-pk.com?subject=${subject}&body=${body}`

        setLoading(false)
    }

    return (
        <section id="contact" className="scroll-mt-24 w-full py-16 md:py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 md:px-6" ref={ref}>
                {/* Heading */}
                <div className="text-center mb-12">
                    <AnimatedText
                        as="h2"
                        text="Contact Us"
                        split="chars"
                        className="text-3xl md:text-4xl font-bold text-black"
                    />
                    <AnimatedText
                        as="p"
                        text="Reach out for quotes, inquiries, or partnership opportunities."
                        split="words"
                        className="text-gray-500 mt-3 max-w-2xl mx-auto"
                    />
                </div>

                {/* Content Grid */}
                <div className="grid gap-12 lg:grid-cols-2 items-start">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <ContactCard
                            data-stagger
                            title="Head Office (Karachi)"
                            address="A-149, Block C, North Nazimabad, Karachi-74700"
                            phone="+92 321 2565152"
                        />
                        <ContactCard
                            data-stagger
                            title="Corporate Office (Karachi)"
                            address="Office #418, Industrial Town Plaza, SR-3/20, Serai Quarters, Sharah-e-Liaquat, Karachi-74000"
                        />
                        <ContactCard
                            data-stagger
                            title="Rawalpindi Branch"
                            address="Shop #217/19, Saleh Market, Adamjee Road, Saddar Cantt, Rawalpindi-46000"
                            phone="+92 51 5125553"
                        />
                        <ContactCard
                            data-stagger
                            title="Email"
                            email="info@ims-pk.com"
                        />
                    </div>

                    {/* Contact Form */}
                    <Card data-stagger className="bg-white rounded-xl shadow-lg w-full max-w-lg mx-auto">
                        <CardHeader>
                            <CardTitle>Request a Quote</CardTitle>
                            <CardDescription>Provide details and our team will respond promptly.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={onSubmit} className="grid gap-4">
                                <div className="grid gap-2 sm:grid-cols-2">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" name="name" placeholder="Your name" required />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="company">Company</Label>
                                        <Input id="company" name="company" placeholder="Company name" />
                                    </div>
                                </div>

                                <div className="grid gap-2 sm:grid-cols-2">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" name="email" placeholder="you@company.com" required />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input id="phone" name="phone" placeholder="+92 ..." />
                                    </div>
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="category">Category</Label>
                                    <select
                                        id="category"
                                        name="category"
                                        className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                                        defaultValue="General Order Supply"
                                    >
                                        <option>General Order Supply</option>
                                        <option>Importation Services</option>
                                        <option>Local Purchase Solutions</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="message">Requirements</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="List items, quantities, specs, etc."
                                        rows={5}
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-blue-600 hover:bg-blue-700"
                                >
                                    {loading ? "Preparing Email..." : "Submit Request"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
