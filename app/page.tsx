import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Services from "@/components/services";
import StarsCanvas from "@/components/Starbackground";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />     
      <Skills />
      <Projects />
      <Services/>
      <ContactForm />
      <Footer />
      <StarsCanvas/>
    </>
  );
}
