import frameworks from "@/app/data/frameworks";
import FrameworkCard from "../cards/FrameworkCard";
import { KodeMono } from "@/app/font";

export default function Frameworks() {
    return (
        <main className="px-[20px] sm:px-[70px] py-[100px]">
            <section>
                <div>
                    <h1 className={`text-3xl font-medium ${KodeMono.className}`}>
                        # {`Frameworks I've Mastered`}
                    </h1>
                </div>

                <div className="mt-6 grid lg:grid-cols-3 gap-5">
                    {
                        frameworks.map((set, i) => {
                            return (
                                <section key={i} className="w-full flex flex-col gap-5">
                                    {set.map((framework, j) => (
                                        <FrameworkCard key={`${i}-${j}`} {...framework} />
                                    ))}
                                </section>
                            );
                        })
                    }
                </div>
            </section>
        </main>
    );
}
