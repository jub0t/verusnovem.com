import ExportedImage from "next-image-export-optimizer";
import { ChivoMono, KodeMono } from "../../font";
import Image, { StaticImageData } from "next/image";

export interface ProjectInfo {
    name: string;
    description: string;
    image?: StaticImageData;
    homepage?: string,
}

export default function ProjectCard({ name, description, image, homepage }: ProjectInfo) {
    return (
        <div>
            <main className="group cursor-pointer hover:bg-black bg-white border-[1px] border-[#9B8989]-200/500 rounded-[20px] flex flex-col h-full">
                {image && (
                    <section>
                        <ExportedImage
                            height={200}
                            width={550}
                            className="w-full min-h-[180px] max-h-[200px] rounded-tl-[20px] rounded-tr-[20px]"
                            src={image}
                            alt={name || "Project Image"}
                        />
                    </section>
                )}

                <section className="p-7 flex flex-col flex-grow justify-between">
                    <div>
                        <h1 className={`group-hover:text-white font-bold text-[24px] ${KodeMono.className}`}>{name}</h1>
                        <p className={`mt-2 group-hover:text-gray-300 ${ChivoMono.className} font-regular text-gray-500`}>{description}</p>
                    </div>

                    {homepage && (
                        <div className="mt-4 mb-2">
                            <a
                                target="_blank"
                                href={homepage}
                                className={`${KodeMono.className} group-hover:text-white rounded-[10px] text-black underline text-[15px] py-[12px]`}
                            >
                                Visit Homepage
                            </a>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}
