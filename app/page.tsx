import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import {
  Process,
  Portfolio,
  Testimonials,
  Faq,
  Marquee,
  CtaBand,
  Footer,
  WhatsAppFab,
} from "@/app/components/Sections";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Pular para o conteúdo</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
