import Link from "next/link"
import { PropsWithChildren } from "react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
