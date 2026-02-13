import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import UnderConstruction from '@/components/UnderConstruction';

export default function Home() {
  return (
    <main>
      {/* Hier komen straks je Hero en Navbar */}
      <Hero />
      <UnderConstruction/>
      {/*<Projects />*/}
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
