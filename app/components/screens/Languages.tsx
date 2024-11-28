import { KodeMono } from "@/app/font";
import LanguageCard from "../cards/LanguageCard";
import languages from "../../data/languages";

export default function Languages() {
    return <main className="px-[20px] sm:px-[70px] py-[100px]">
        <section>
            <div>
                <h1 className={`text-3xl font-medium ${KodeMono.className}`}>
                    # Languages
                </h1>
            </div>

            <div className="mt-6 grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-2 gap-5">
                {
                    languages.map((language, i) => {
                        return <LanguageCard key={i} {...language} />
                    })
                }
            </div>
        </section>
    </main>
}