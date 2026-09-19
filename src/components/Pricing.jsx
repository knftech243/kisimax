import React from 'react';
import { Check, Plus, ArrowRight } from 'lucide-react';

export default function Pricing({ onSelectPack }) {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAF8] border-t border-brand-border" id="offres">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="kx-eye-badge text-brand-muted mb-4 justify-center">
            Nos offres
          </span>
          <h2 className="text-[30px] sm:text-[38px] font-extrabold text-brand-ink leading-[1.2] tracking-[-0.5px]">
            Choisissez l'évolution de votre boutique.
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* PACK 1 - LE MOTEUR */}
          <div className="relative bg-white rounded-xl p-7 sm:p-9 border-2 border-brand-green flex flex-col justify-between">
            {/* Ribbon */}
            <span className="absolute top-6 right-6 bg-brand-green text-white text-[11px] font-bold px-3 py-1 rounded">
              Le plus populaire
            </span>

            <div>
              {/* Header Pack 1 */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-brand-green text-white flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M5 8H19L17.5 21H6.5L5 8Z" />
                    <path d="M9 8V6A3 3 0 0 1 15 6V8" />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-brand-greenDark uppercase block">
                    Pack 1
                  </span>
                  <h3 className="text-[22px] sm:text-[24px] font-extrabold text-brand-ink uppercase leading-tight">
                    Le Moteur
                  </h3>
                  <p className="text-[13px] sm:text-[14px] font-semibold text-brand-ink mt-0.5">
                    Système de Gestion Boutique
                  </p>
                </div>
              </div>

              <p className="text-[14px] text-gray-600 mb-6">
                Le cœur de votre activité pour ne plus rien perdre.
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-[14px] text-gray-800 leading-snug">
                  <span className="w-4 h-4 rounded-full bg-brand-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>Base clients intelligente (Historique et statuts)</span>
                </li>
                <li className="flex items-start gap-3 text-[14px] text-gray-800 leading-snug">
                  <span className="w-4 h-4 rounded-full bg-brand-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>Gestion des commandes de A à Z (Préparation, livraison)</span>
                </li>
                <li className="flex items-start gap-3 text-[14px] text-gray-800 leading-snug">
                  <span className="w-4 h-4 rounded-full bg-brand-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>Suivi des paiements et relance des impayés</span>
                </li>
                <li className="flex items-start gap-3 text-[14px] text-gray-800 leading-snug">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 ml-1.5 mt-2" />
                  <span className="ml-1">Tableau de bord financier automatisé (CA, Meilleures ventes)</span>
                </li>
                <li className="flex items-start gap-3 text-[14px] text-gray-800 leading-snug">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 ml-1.5 mt-2" />
                  <span className="ml-1">Formation d'utilisation (30 à 60 min) pour vous et vos vendeurs</span>
                </li>
              </ul>
            </div>

            <div>
              {/* Price */}
              <div className="text-[14px] text-gray-600 mb-5 pt-4 border-t border-gray-100 flex items-baseline">
                <span>À partir de </span>
                <span className="text-[32px] font-black text-brand-ink mx-1.5 leading-none">49$</span>
                <span>/ mois</span>
              </div>

              {/* Action Button */}
              <a
                href="https://wa.me/243971234567?text=Bonjour%20Kisimax,%20je%20souhaite%20configurer%20le%20Pack%201%20Le%20Moteur%20pour%20ma%20boutique."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenDark text-white font-bold py-3.5 px-6 rounded-lg transition-colors border border-brand-greenDark"
              >
                Configurer mon moteur opérationnel
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* PACK 2 - L'ACCÉLÉRATEUR */}
          <div className="relative bg-white rounded-xl p-7 sm:p-9 border border-brand-border flex flex-col justify-between">
            {/* Ribbon */}
            <span className="absolute top-6 right-6 bg-slate-100 text-slate-700 text-[11px] font-bold px-3 py-1 rounded">
              Plus de visibilité
            </span>

            <div>
              {/* Header Pack 2 */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-slate-800 text-white flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <rect x="4" y="4" width="16" height="16" rx="3" />
                    <path d="M8 16L16 8M10 8H16V14" />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-slate-700 uppercase block">
                    Pack 2
                  </span>
                  <h3 className="text-[22px] sm:text-[24px] font-extrabold text-brand-ink uppercase leading-tight">
                    L'Accélérateur
                  </h3>
                  <p className="text-[13px] sm:text-[14px] font-semibold text-brand-greenDark mt-0.5">
                    Gestion + Communication
                  </p>
                </div>
              </div>

              <p className="text-[14px] text-gray-700 font-medium mb-6">
                Le Moteur de gestion + Une image de marque qui fait vendre.
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-[14px] font-bold text-slate-900 leading-snug">
                  <span className="w-4 h-4 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-base font-black">
                    +
                  </span>
                  <span>Tout ce qui est inclus dans le Moteur</span>
                </li>
                {[
                  "Identité visuelle légère pour vos réseaux",
                  "Catalogue produits digital optimisé",
                  "10 à 20 templates de publications / stories (Offres, Promos)",
                  "Système de publication prêt à l'emploi"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[14px] text-gray-800 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0 ml-1.5 mt-2" />
                    <span className="ml-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* Price */}
              <div className="text-[14px] text-gray-600 mb-5 pt-4 border-t border-gray-100 flex items-baseline">
                <span>À partir de </span>
                <span className="text-[32px] font-black text-brand-ink mx-1.5 leading-none">79$</span>
                <span>/ mois</span>
              </div>

              {/* Action Button */}
              <a
                href="https://wa.me/243971234567?text=Bonjour%20Kisimax,%20je%20souhaite%20passer%20au%20niveau%20supérieur%20avec%20le%20Pack%202%20L'Accélérateur."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-night hover:bg-brand-nightLight text-white font-bold py-3.5 px-6 rounded-lg transition-colors"
              >
                Passer au niveau supérieur
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
