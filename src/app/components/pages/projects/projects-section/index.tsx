import { ProjectCard } from "@/app/components/project-card"

export const ProjectSection = () => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-2 mb-24">
            {
                Array.from({ length: 9 }).map((_, i) => {
                    return <ProjectCard  key={i} />
                })
            }
        </main>
    )
}