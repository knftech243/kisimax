import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="kx-cta-section relative py-20 md:py-24 overflow-hidden text-white text-center bg-gradient-to-br from-[#22A94F] to-[#15803D]" id="contact">
      
      {/* Decorative concentric translucent rings */}
      <div className="absolute -left-36 -bottom-48 w-[420px] h-[420px] rounded-full border-[40px] border-white/5 pointer-events-none" />
      <div className="absolute -right-28 -top-48 w-[380px] h-[380px] rounded-full border-[40px] border-white/5 pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Eye badge */}
        <span className="kx-eye-badge text-white justify-center mb-4">
          Prêt à agir ?
        </span>

        {/* Headline */}
        <h2 className="text-[32px] sm:text-[42px] font-black leading-tight tracking-tight mb-5 text-white">
          Prêt à mettre de l'ordre dans votre business ?
        </h2>

        {/* Subtitle */}
        <p className="text-[16px] sm:text-[18px] text-white/90 leading-relaxed mb-8 max-w-xl mx-auto">
          Arrêtez de gérer votre activité de mémoire. Offrez à votre boutique les outils 
          des grandes entreprises, adaptés à votre réalité.
        </p>

        {/* White Primary Button */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/243971234567?text=Bonjour%20Kisimax,%20je%20souhaite%20r%C3%A9server%20mon%20appel%20de%20d%C3%A9couverte%20gratuit."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-brand-ink text-[16px] font-extrabold px-8 py-3.5 rounded-lg transition-colors border border-white"
          >
            <Calendar className="w-5 h-5 text-brand-green" />
            <span>Réserver mon appel de découverte gratuit</span>
            <ArrowRight className="w-4 h-4 text-brand-green" />
          </a>
        </div>

      </div>
    </section>
  );
}
