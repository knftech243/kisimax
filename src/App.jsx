import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-brand-ink selection:bg-brand-green selection:text-white">
      {/* 1. NAVBAR */}
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

      <main className="flex-grow">
        {/* 2. HERO SECTION */}
        <Hero onOpenDemo={() => setIsDemoOpen(true)} />

        {/* 3. SECTION PROBLÈME */}
        <Problem />

        {/* 4. SECTION SOLUTION */}
        <Solution />

        {/* 5. SECTION OFFRES */}
        <Pricing />

        {/* 6. SECTION GARANTIE */}
        <Guarantee />

        {/* 7. SECTION CTA FINAL */}
        <CtaSection />
      </main>

      {/* 8. FOOTER */}
      <Footer />

      {/* Interactive Demo Video Modal */}
      <DemoModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </div>
  );
}
