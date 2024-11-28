import Image, { StaticImageData } from "next/image";
import { ChivoMono } from "../../font";

export interface LanguageInfo {
    name: string;
    image: StaticImageData;
    level?: MasteryLevel,
}

enum MasteryLevel {
    Basic = 1,
    Intermediate = 2,
    Expert = 3,
    Mastery = 4,
}

export function MasteryBadge(level: MasteryLevel) {
    switch (level) {
        case MasteryLevel.Basic: {
            return <div className="border-orange-900 border-[1px] rounded-[3px] text-white bg-orange-800/60 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                Basic
            </div>
        }

        case MasteryLevel.Intermediate: {
            return <div className="border-green-900 border-[1px] rounded-[3px] text-white bg-green-800/60 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                Intermediate
            </div>
        }

        case MasteryLevel.Expert: {
            return <div className="border-purple-900 border-[1px] rounded-[3px] text-white bg-purple-800/60 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                Expert
            </div>
        }
    }
}

export default function LanguageCard(props: LanguageInfo) {
    return <div>
        <main className="bg-white border-[1px] border-[#9B8989]-200/500 rounded-[20px]">
            <section>
                <div className="p-7 flex flex-wrap gap-5 items-center">
                    <Image
                        height={60}
                        width={60}
                        src={props.image}
                        className="h-[60px] w-[60px] object-contain"
                        alt={`${props.name}'s Logo`}
                    />

                    <h3 className={`font-light text-[#000] text-2xl ${ChivoMono.className}`}>
                        {props.name}
                    </h3>

                    {
                        props.level && MasteryBadge(props.level)
                    }
                </div>
            </section>
        </main>
    </div>
}
