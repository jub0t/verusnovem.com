import LaravelLogo from "../assets/images/laravel.png";
import SurrealDB from "../assets/images/surrealdb.png";
import MySQL from "../assets/images/mysql.png";
import Tailwind from "../assets/images/tailwind.svg";
import Express from "../assets/images/express.png";
import NextjsLogo from "../assets/images/nextjs.png";
import Encore from "../assets/images/encore.svg";
import AstroLogo from "../assets/images/astro.svg";
import ReactLogo from "../assets/images/react.webp";
import VueLogo from "../assets/images/vue.png";
import Axum from "../assets/images/axum.png";
import Fiber from "../assets/images/fiber.png";
import Tauri from "../assets/images/tauri.png";
import Flutter from "../assets/images/flutter.svg";
import { chunkArray } from "./utils";

export const framework_data = [
    {
        description: "Designed and developed a wide range of projects, including online casinos and reward platforms, leveraging React.js for dynamic user interfaces.",
        image: ReactLogo,
        name: "React.js",
    },
    {
        description: "Utilized Next.js to create the website you're viewing, along with the frontend for an open-source Server-Side-Rendered (SSR) application.",
        image: NextjsLogo,
        name: "Next.js",
    },
    {
        description: "Implemented comprehensive applications with Laravel v10-v11, incorporating features like user authentication, server-side rendering with Blade templates, reward systems, postback APIs, and automated tasks via cron jobs.",
        image: LaravelLogo,
        name: "Laravel",
    },
    {
        description: "Extensively utilized Vue.js and its ecosystem to build scalable, interactive web applications.",
        image: VueLogo,
        name: "Vue.js",
    },
    {
        description: "Specialized in using Astro.js for Server-Side Rendering (SSR) and crafting efficient API endpoints.",
        image: AstroLogo,
        name: "Astro.js",
    },
    {
        description: "Developed numerous backend-driven applications and services using Express.js, focusing on performance and scalability.",
        image: Express,
        name: "Express.js",
    },
    {
        description: "Developed fast, maintainable, and scalable applications using Fiber, a lightweight framework for Go.",
        image: Fiber,
        name: "Fiber (Go)",
    },
    {
        description: "Built open-source desktop applications with Tauri, leveraging Rust for backend functionality and high performance.",
        image: Tauri,
        name: "Tauri",
    },
    {
        description: "Achieved significant performance improvements in open-source projects using Encore.ts for backend development, outperforming traditional Express.js setups.",
        image: Encore,
        name: "Encore.ts",
    },
    {
        description: "Adopted SurrealDB for managing modern datasets, offering enhanced support for complex and non-traditional data types.",
        image: SurrealDB,
        name: "SurrealDB",
    },
    {
        description: "Gained extensive experience working with MySQL and similar relational databases, mastering the creation of optimized SQL queries from scratch.",
        image: MySQL,
        name: "MySQL",
    },
    {
        description: "Preferred Axum for high-performance, system-level applications, leveraging its robust ecosystem for Rust-based development.",
        image: Axum,
        name: "Axum",
    },
    {
        description: "Leveraged the Flutter framework to build versatile mobile and desktop applications with a seamless user experience.",
        image: Flutter,
        name: "Flutter",
    },
    {
        description: "Relied on TailwindCSS as a primary tool for styling, using its utility-first approach in almost all my projects.",
        image: Tailwind,
        name: "Tailwind CSS",
    },
];

export default chunkArray(framework_data, 3);
