import { KodeMono, SpectralFont } from "../../font";

export default function Hero() {
    return (
        <section id="home" className="h-screen bg-black flex flex-wrap items-center">
            <main className="bg-black mt-3 grid w-full items-center flex justify-center">
                <div className={`text-[48px] leading-[52px] md:text-[80px] md:leading-[80px] xl:text-[100px] xl:leading-[120px] text-white`}>
                    <h1 className={`${KodeMono.className} font-medium`}>Programmer</h1>
                    <h1 className={`${SpectralFont.className} font-medium`}>Researcher</h1>
                    <h1 className={`${SpectralFont.className} font-thin`}>Writer</h1>
                </div>

                <div className="mt-[20px]">
                    <p className={`text-white capitalize ${KodeMono.className}`}>{`=> Scroll down for more content <=`}</p>
                </div>
            </main>
        </section>
    )
}