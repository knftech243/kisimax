import React from 'react';
import { MousePointerClick } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="bg-brand-night text-gray-300 py-20 md:py-24 relative kx-dark border-t border-white/5" id="garantie">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Entrepreneur Photo + Badges */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center gap-8">
            {/* Image */}
            <div className="relative flex-shrink-0">
              <img 
                src="/images/kx-commercant.png"
                onError={(e) => {
                  e.target.src = "https://kisimax.cefirdc.org/wp-content/uploads/2026/09/kx-commercant.webp";
                }}
                alt="Commerçant serein utilisant Kisimax" 
                className="relative rounded-xl w-[240px] sm:w-[270px] object-cover mask-merchant-dark border border-white/10"
                loading="lazy"
              />
            </div>

            {/* Badges beside photo */}
            <div className="flex flex-col items-start gap-4">
              <span className="inline-block bg-brand-green/10 border border-brand-green/40 text-[#A7F3D0] text-xs font-bold px-3.5 py-1.5 rounded">
                Aucune compétence requise
              </span>

              <ul className="space-y-3 text-white font-medium text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-brand-green/40 text-[#86EFAC] font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                    &lt;/&gt;
                  </span>
                  <span>Pas de code</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-brand-green/40 text-[#86EFAC] font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                    f(x)
                  </span>
                  <span>Pas de formules complexes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-brand-green/40 text-[#86EFAC] flex items-center justify-center flex-shrink-0">
                    <MousePointerClick className="w-4 h-4" />
                  </span>
                  <span>Juste des clics</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Copy */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <span className="kx-eye-badge text-white mb-4 block justify-center lg:justify-start">
              Votre garantie
            </span>

            <h2 className="text-[28px] sm:text-[36px] font-extrabold text-white leading-tight mb-5">
              « Je ne suis pas très fort en informatique... »
            </h2>

            <p className="text-[17px] font-semibold text-white mb-4">
              Aucun problème. Kisimax est pensé pour être utilisé sans compétences techniques.
            </p>

            <p className="text-[15px] text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Pas de code, pas de formules complexes à apprendre. Nous construisons l'architecture, 
              vous n'avez qu'à cliquer et utiliser le système pour faire grandir votre chiffre d'affaires.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
