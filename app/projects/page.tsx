import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ProjectsGridPage from "@/components/sections/projects2"

export default function CategoriesPage() {
    return (
        <>
            <SiteHeader />
            <main>
                <ProjectsGridPage />
            </main>
            <SiteFooter />
        </>
    )
}
