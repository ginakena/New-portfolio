import Sidebar from "./components/Sidebar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/Experience";
import Contact from "./components/contact";

export default function App() {
  return (
    <div className="bg-paper text-ink font-body">
      <Sidebar />
      <main className="lg:ml-64">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
