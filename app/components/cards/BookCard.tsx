import Image from "next/image";
import { ChivoMono } from "../../font";
import { BookInfo } from "@/app/data/books";
import Link from "next/link";

export default function BookCard(props: BookInfo) {
    return (
        <Link href={props?.url} target="_blank">
            <main className={`bg-white hover:bg-gray-50 duration-300 transition-all cursor-pointer border-[1px] border-[#9B8989]-200/500 rounded-[20px]`}>
                <section>
                    <div className="p-7 flex flex-wrap sm:flex-nowrap flex-row gap-5 items-center">
                        {
                            props.image &&
                            <div>
                                <Image
                                    height={80}
                                    width={80}
                                    src={props.image}
                                    className="md:max-h-[120px] md:max-w-[120px] max-w-[70px] object-contain"
                                    alt={`${props.name}'s Logo`}
                                />
                            </div>
                        }


                        <div>
                            <h3 className={`font-light text-[#000] text-2xl ${ChivoMono.className}`}>
                                {props.name}
                            </h3>

                            {
                                props.author &&
                                <p className={`text-[14px] ${ChivoMono.className} text-pink-800`}>
                                    <span>{props.author}</span>
                                </p>
                            }

                            {
                                props.description &&
                                <p className={`mt-2 ${ChivoMono.className} text-gray-500`}>
                                    {props.description}
                                </p>
                            }
                        </div>
                    </div>
                </section>
            </main>
        </Link>
    );
}
