import React from 'react';
import { ArrowRight, Play, TrendingUp, ShoppingBag } from 'lucide-react';

export default function Hero({ onOpenDemo }) {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 bg-[#FAFAF8]" id="top">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-5 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-greenSoft text-brand-greenDark border border-brand-greenBorder px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
              Agence d'optimisation pour commerçants
            </div>

            {/* H1 Headline */}
            <h1 className="text-[36px] sm:text-[46px] lg:text-[50px] font-extrabold text-brand-ink leading-[1.12] tracking-[-1.2px] mb-6">
              Ne perdez plus aucune vente dans{' '}
              <span className="text-brand-green">
                le chaos de WhatsApp.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[16px] sm:text-[17px] text-brand-muted leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              On transforme la gestion quotidienne de votre boutique en un système simple et redoutable : 
              vos clients, vos commandes et vos ventes réunis au même endroit. Fini les oublis, place à la croissance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#offres"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-green hover:bg-brand-greenDark text-white text-[16px] font-bold px-7 py-3.5 rounded-lg border border-brand-greenDark transition-colors"
              >
                Structurer ma boutique aujourd'hui
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenDemo}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-brand-border text-brand-ink hover:text-brand-green text-[15px] font-semibold px-6 py-3 rounded-lg transition-colors group"
              >
                <span className="w-6 h-6 rounded-full bg-brand-ink group-hover:bg-brand-green flex items-center justify-center transition-colors">
                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                </span>
                Voir comment ça marche <span className="text-xs text-brand-muted font-normal">(Vidéo 1 min)</span>
              </button>
            </div>

            {/* Value checklist with neutral clean dots */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-[14px] font-semibold text-brand-ink">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
                Plus d'organisation
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
                Moins de stress
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
                Plus de ventes
              </div>
            </div>
          </div>

          {/* Right Column: Visual Montage Before / After */}
          <div className="lg:col-span-7 relative">
            <div className="relative h-[440px] sm:h-[490px] w-full max-w-[620px] mx-auto">

              {/* Status Tags above mockups */}
              <div className="absolute top-0 left-[6%] sm:left-[10%] z-20">
                <span className="inline-block bg-[#8A949E] text-white text-[12px] font-bold px-3 py-1 rounded-md shadow-sm">
                  Avant Kisimax
                </span>
                <span className="hidden sm:block text-[11px] text-brand-muted mt-1 font-medium">
                  Messages partout, commandes perdues
                </span>
              </div>

              <div className="absolute top-0 right-[4%] sm:right-[10%] z-20 text-right">
                <span className="inline-block bg-brand-green text-white text-[12px] font-bold px-3.5 py-1 rounded-md shadow-sm">
                  Avec Kisimax
                </span>
                <span className="hidden sm:block text-[11px] text-brand-muted mt-1 font-medium">
                  Tout est organisé, en un seul endroit
                </span>
              </div>

              {/* LEFT PHONE: WhatsApp Overwhelmed */}
              <div className="absolute left-[2%] sm:left-[6%] top-[56px] w-[170px] sm:w-[195px] h-[330px] sm:h-[375px] bg-[#111] rounded-[30px] sm:rounded-[36px] p-2 border border-gray-700 -rotate-3 z-10">
                <div className="w-full h-full bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col">
                  {/* WhatsApp Header */}
                  <div className="bg-[#128C4B] text-white text-[11px] font-bold px-3 pt-4 pb-2 flex items-center justify-between">
                    <span>WhatsApp</span>
                    <span className="w-2 h-2 rounded-full bg-white/70"></span>
                  </div>

                  {/* WhatsApp Rows */}
                  <div className="divide-y divide-gray-100 flex-1 overflow-hidden bg-[#FBFBFA]">
                    {[
                      { name: 'Aminata', text: 'Commande dispo ?', alert: true },
                      { name: 'Mamadou', text: 'J’ai envoyé 20$', alert: true },
                      { name: 'Client Robe', text: 'Le prix svp', alert: true },
                      { name: 'Livraison 02', text: 'Adresse introuvable', alert: false },
                      { name: 'Fatou Vente', text: 'Vous m’avez oublié ?', alert: true },
                      { name: 'Client Sac', text: 'C’est expédié ?', alert: false },
                    ].map((chat, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2">
                        <div className="w-6 h-6 rounded-full bg-stone-700 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="h-2 bg-gray-400 rounded w-16 mb-1"></div>
                          <div className="h-1.5 bg-gray-200 rounded w-24"></div>
                        </div>
                        {chat.alert && (
                          <div className="w-3.5 h-3.5 rounded-full bg-[#25D366] text-white text-[8px] flex items-center justify-center font-bold flex-shrink-0">
                            1
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* HANDWRITTEN NOTEBOOK (Crossed with red mark) */}
              <div className="absolute left-[16%] sm:left-[19%] top-[210px] sm:top-[225px] w-[170px] sm:w-[195px] h-[200px] sm:h-[220px] kx-note-paper rounded-lg -rotate-[8deg] z-20 p-5 pl-7 flex flex-col justify-between border border-amber-200">
                <div className="font-handwriting text-[#2A2A2A] text-[20px] sm:text-[23px] leading-[26px]">
                  - Commande ?<br />
                  - Client ?<br />
                  - Livraison ?<br />
                  - Paiement ?
                </div>
                
                {/* Red X Badge */}
                <div className="self-end w-7 h-7 rounded-full border-2 border-brand-red text-brand-red font-sans font-black text-sm flex items-center justify-center">
                  ✕
                </div>
              </div>

              {/* TRANSITION ARROW */}
              <div className="hidden sm:flex absolute left-[45%] top-[150px] z-20 text-brand-green text-[36px] font-black">
                →
              </div>

              {/* RIGHT PHONE: Kisimax Dashboard (Floating) */}
              <div className="absolute right-[2%] sm:right-[4%] top-[50px] w-[225px] sm:w-[260px] h-[385px] sm:h-[435px] bg-[#111] rounded-[34px] sm:rounded-[40px] p-2.5 border border-gray-700 z-30 animate-float">
                <div className="w-full h-full bg-white rounded-[26px] sm:rounded-[32px] overflow-hidden flex flex-col p-3 text-[10px]">
                  
                  {/* Kisimax App Bar */}
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <div className="flex items-center gap-1.5 font-bold text-[12px] text-brand-ink">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 40 40">
                        <rect x="4" y="3" width="9" height="34" rx="2" fill="#1E9E4A" />
                        <path d="M15 20L29 3H38L24 20L38 37H29L15 20Z" fill="#1E9E4A" />
                      </svg>
                      Kisimax
                    </div>
                    <span className="inline-block w-2 h-2 rounded-full bg-brand-green"></span>
                  </div>

                  {/* Main KPI Card: Sales of the day */}
                  <div className="bg-white border border-brand-border rounded-lg p-2.5 mt-2.5">
                    <span className="text-[10px] text-brand-muted font-semibold block mb-0.5">
                      Ventes du jour
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="text-[20px] font-extrabold text-brand-ink">185 $</span>
                      <span className="text-[9px] font-bold text-brand-green bg-brand-greenSoft px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                        <TrendingUp className="w-2.5 h-2.5" /> +12%
                      </span>
                    </div>

                    {/* Green upward trend chart */}
                    <div className="w-full h-[44px] mt-1.5">
                      <svg viewBox="0 0 200 46" className="w-full h-full" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="hero-chart-grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#1E9E4A" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#1E9E4A" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0 40 L25 34 L50 36 L75 26 L100 29 L125 18 L150 21 L175 10 L200 4 V46 H0 Z" fill="url(#hero-chart-grad)" />
                        <path d="M0 40 L25 34 L50 36 L75 26 L100 29 L125 18 L150 21 L175 10 L200 4" fill="none" stroke="#1E9E4A" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  {/* 3 Mini Metrics */}
                  <div className="grid grid-cols-3 gap-1.5 mt-2">
                    <div className="border border-brand-border rounded-lg p-1.5 bg-gray-50/50">
                      <span className="text-[8px] text-brand-muted block">Commandes</span>
                      <span className="text-[12px] font-bold text-brand-ink block">24</span>
                      <span className="text-[8px] text-brand-green font-bold">+8%</span>
                    </div>
                    <div className="border border-brand-border rounded-lg p-1.5 bg-gray-50/50">
                      <span className="text-[8px] text-brand-muted block">Clients</span>
                      <span className="text-[12px] font-bold text-brand-ink block">18</span>
                      <span className="text-[8px] text-brand-green font-bold">+5%</span>
                    </div>
                    <div className="border border-brand-border rounded-lg p-1.5 bg-gray-50/50">
                      <span className="text-[8px] text-brand-muted block">Impayés</span>
                      <span className="text-[12px] font-bold text-brand-ink block">3</span>
                      <span className="text-[8px] text-brand-red font-bold">-60%</span>
                    </div>
                  </div>

                  {/* Top Products with clean SVGs instead of emojis */}
                  <div className="mt-2.5 flex-1">
                    <div className="text-[9px] font-bold text-brand-ink mb-1">
                      Meilleurs produits
                    </div>
                    <div className="space-y-1.5 divide-y divide-gray-50">
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-1.5">
                          <span className="w-4 h-4 rounded bg-gray-100 flex items-center justify-center text-gray-600">
                            <ShoppingBag className="w-2.5 h-2.5" />
                          </span>
                          <span className="font-semibold text-brand-ink text-[9px]">T-shirt Premium</span>
                        </div>
                        <span className="text-brand-muted text-[8px]">12 ventes</span>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-1.5">
                          <span className="w-4 h-4 rounded bg-gray-100 flex items-center justify-center text-gray-600">
                            <ShoppingBag className="w-2.5 h-2.5" />
                          </span>
                          <span className="font-semibold text-brand-ink text-[9px]">Casquette</span>
                        </div>
                        <span className="text-brand-muted text-[8px]">8 ventes</span>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-1.5">
                          <span className="w-4 h-4 rounded bg-gray-100 flex items-center justify-center text-gray-600">
                            <ShoppingBag className="w-2.5 h-2.5" />
                          </span>
                          <span className="font-semibold text-brand-ink text-[9px]">Chaussures</span>
                        </div>
                        <span className="text-brand-muted text-[8px]">6 ventes</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
