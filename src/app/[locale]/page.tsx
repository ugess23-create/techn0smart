import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Advantages from '@/components/Advantages';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import CookieConsent from '@/components/CookieConsent';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <Portfolio />
        <Pricing />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWidgets />
      <CookieConsent />
    </>
  );
}
