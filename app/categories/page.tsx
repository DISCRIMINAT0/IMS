import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import CategoriesSection from "@/components/sections/categories"

export default function CategoriesPage() {
    return (
        <>
            <SiteHeader />
            <main>
                <CategoriesSection />
            </main>
            <SiteFooter />
        </>
    )
}
