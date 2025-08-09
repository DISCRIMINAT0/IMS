import Image from "next/image"
import Link from "next/link"
import Hero from "@/components/hero"
import QuickFacts from "@/components/quick-facts"
import AboutPage from "./about/page"
import ClientsPage from "./clients/page"
import ProjectsPage from "./projects/page"
import ServicesPage from "./services/page"
import ContactPage from "./contact/page"

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickFacts />
      <AboutPage />
      <ServicesPage />
      <ClientsPage />
      <ProjectsPage />
      <ContactPage />
    </>
  )
}
