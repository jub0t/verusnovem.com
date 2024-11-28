import ExportedImage from "next-image-export-optimizer";
import Image, { StaticImageData } from "next/image";
import { ChivoMono } from "../../font";

export interface FrameworkInfo {
    name: string;
    image?: StaticImageData;
    description?: string;
}

export default function FrameworkCard(props: FrameworkInfo) {
    return <div>
        <main className="group bg-white transition-all duration-300 border-[1px] border-[#9B8989]-200/500 rounded-[20px]">
            <section>
                <div className="p-7 flex flex-wrap gap-5 items-center">
                    {
                        props.image &&
                        <div className="min-h-[40px] min-w-[40px] max-h-[50px] max-w-[50px] flex">
                            <ExportedImage
                                height={60}
                                width={60}
                                src={props.image}
                                className="group-hover:grayscale-0 transition-all duration-300 object-fit"
                                alt={`${props.name}'s Logo`}
                            />
                        </div>
                    }

                    <h3 className={`font-medium text-2xl ${ChivoMono.className}`}>
                        {props.name}
                    </h3>
                </div>

                {
                    props.description &&
                    <div className={`border-t-[1px] p-7 ${ChivoMono.className} font-[400] text-gray-500`}>
                        <p>{props.description}</p>
                    </div>
                }
            </section>
        </main>
    </div>
}
