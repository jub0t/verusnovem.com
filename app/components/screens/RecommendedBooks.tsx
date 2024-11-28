import books from "@/app/data/books";
import { KodeMono } from "@/app/font";
import BookCard from "../cards/BookCard";

export default function RecommendedBooks() {
    return <main className="flex flex-wrap w-full">
        <section className="px-[20px] sm:px-[70px] py-[100px]">
            <div>
                <h1 className={`text-3xl font-medium ${KodeMono.className}`}>
                    # Books I Recommend
                </h1>
            </div>

            <div className="mt-6 grid md:grid-cols-2 grid-2 gap-5">
                {
                    books.map((chunk, index) => {
                        return <section key={index} className="w-full flex flex-col gap-5">
                            {chunk.map((book, jindex) => {
                                return <BookCard key={`${index}-${jindex}`} {...book}></BookCard>
                            })}
                        </section>
                    })
                }
            </div>
        </section>
    </main>
}