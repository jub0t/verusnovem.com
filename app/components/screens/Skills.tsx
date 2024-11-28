import skills from "@/app/data/skills";
import { KodeMono } from "@/app/font";
import SkillCard from "../cards/SkillCard";
import { chunkArray } from "@/app/data/utils";

export default function Skills() {
    return <main id="skills" className="">
        <section className="px-[20px] sm:px-[70px] py-[100px]">
            <div>
                <h1 className={`text-3xl font-medium ${KodeMono.className}`}>
                    # Skills
                </h1>
            </div>

            <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 grid-2 gap-5">
                {
                    chunkArray(skills, 3).map((chunk, i) => {
                        return <section key={i} className="flex flex-col gap-5">
                            {
                                chunk.map((skill, j) => {
                                    return <SkillCard
                                        key={`${i}-${j}`}
                                        {...skill}
                                    ></SkillCard>
                                })
                            }
                        </section>
                    })
                }
            </div>
        </section>
    </main>
}