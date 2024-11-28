import RefactoringUI from "../assets/covers/refactoringui.png"
import RustAtomics from "../assets/covers/rustatomics.webp"
import FinancialIQ from "../assets/covers/financialiq.webp"
import RichDad from "../assets/covers/richdad.webp"
import { chunkArray } from "./utils"

const data = [
    {
        name: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        url: "",
        image: RichDad,
        description: "This book will change the way you think about money and how you use it.",
    },
    {
        name: "Rich Dad's Increase Your Financial IQ",
        author: "Robert Kiyosaki",
        image: FinancialIQ,
        description: "Written by the same guy who wrote Rich dad Poor dad, also a must read.",
        url: "",
    },
    {
        name: "Refactoring UI",
        author: "Tailwind Team",
        description: "I'd say this is the most comprehensible guide to learn very helpful UI/UX concepts.",
        image: RefactoringUI,
        url: "https://www.refactoringui.com",
    },
    {
        name: "Rust Atomics",
        author: "Mara Bos",
        image: RustAtomics,
        description: "This book will teach you Rust concepts that are crucial but hard to learn.",
        url: "",
    },
];

// Genius right? I know.
export type BookInfo = (typeof data[0]);

export default chunkArray(
    data,
    2
)