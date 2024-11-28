import RecommendedBooks from "./components/screens/RecommendedBooks";
import Frameworks from "./components/screens/Frameworks";
import Languages from "./components/screens/Languages";
import Projects from "./components/screens/Projects";
import Contact from "./components/screens/Contact";
import Footer from "./components/screens/Footer";
import Skills from "./components/screens/Skills";
import Hero from "./components/screens/Hero";

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero></Hero>
      <Skills></Skills>
      <Languages></Languages>
      <Frameworks></Frameworks>
      <Projects></Projects>
      <RecommendedBooks></RecommendedBooks>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
