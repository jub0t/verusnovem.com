import ProjectCard from "../cards/ProjectCard";
import projects from "../../data/projects"
import { KodeMono } from "@/app/font";

export default function Projects() {
    return <main className="">
        <section className="px-[20px] sm:px-[70px] py-[100px]">
            <div>
                <h1 className={`text-3xl font-medium ${KodeMono.className}`}>
                    # Projects
                </h1>
            </div>

            <div className="mt-6 grid lg:grid-cols-2 xl:grid-cols-3 grid-2 gap-5">
                {
                    projects.map((project, index) => {
                        return <ProjectCard
                            key={index}
                            {...project}
                        ></ProjectCard>
                    })
                }
            </div>
        </section>
    </main>
}