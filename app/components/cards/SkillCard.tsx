import Image from "next/image";
import { ChivoMono } from "../../font";
import skills from "@/app/data/skills";

export type SkillInfo = (typeof skills[0]);

export default function SkillCard(props: SkillInfo) {
    return <div>
        <main className="bg-white border-[1px] border-[#9B8989]-200/500 rounded-[20px]">
            <section>
                <div className="p-7 flex flex-wrap gap-5 items-center">
                    {
                        props.image &&
                        <Image
                            height={60}
                            width={60}
                            src={props.image}
                            className="h-[60px] w-[60px] object-contain"
                            alt={`${props.name}'s Logo`}
                        />
                    }

                    <h3 className={`font-light text-[#000] text-lg ${ChivoMono.className}`}>
                        {props.name}
                    </h3>
                </div>
            </section>
        </main>
    </div>
}
