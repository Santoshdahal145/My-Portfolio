import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import BeyondCode from "./components/BeyondCode";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#090b10] text-[#f3f4f6] flex flex-col selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* Hero / Introduction Section */}
        <Hero />

        {/* Tech Stack & Skills */}
        <TechStack />

        {/* Featured Projects Showcase */}
        <Projects />

        {/* Experience & Education Timeline */}
        <Experience />

        {/* Personal Interests / Beyond Code */}
        <BeyondCode />

        {/* Contact Form & Direct Communication */}
        <Contact />
      </main>

      {/* Persistent Floating WhatsApp Badge / Widget */}
      <FloatingWhatsApp />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
