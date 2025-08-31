import Cta from '@/components/landing/Cta';
import Faq from '@/components/landing/Faq';
import Features from '@/components/landing/Features';
import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Logos from '@/components/landing/Logos';
import Testimonials from '@/components/landing/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Logos />
        <Features />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
