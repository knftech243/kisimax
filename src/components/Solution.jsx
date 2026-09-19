import React, { useState } from 'react';

export default function Solution() {
  const [activeStatus, setActiveStatus] = useState('Livrée');

  const statusPills = [
    { name: 'Nouvelle', color: 'text-slate-700 bg-slate-100 border-slate-300' },
    { name: 'À préparer', color: 'text-amber-800 bg-amber-50 border-amber-300' },
    { name: 'En livraison', color: 'text-blue-900 bg-blue-50 border-blue-200' },
    { name: 'Livrée', color: 'text-brand-greenDark bg-brand-greenSoft border-brand-greenBorder' }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAFAF8]" id="fonctionnalites">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-2xl">
          <span className="kx-eye-badge text-brand-muted mb-4 block">
            La solution Kisimax
          </span>
          <h2 className="text-[30px] sm:text-[38px] font-extrabold text-brand-ink leading-[1.2] tracking-[-0.5px] mb-3">
            L'Écosystème Kisimax :<br />
            <span className="text-brand-green">De la prise de commande à la relance.</span>
          </h2>
          <p className="text-[17px] text-brand-muted">
            Le parcours réel de votre client, automatisé.
          </p>
        </div>

        {/* Central Horizontal Flow Container */}
        <div className="my-10 md:my-14 bg-[#EEF7F1] rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-brand-greenBorder">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
            
            {/* Step 1: WhatsApp Chat Card */}
            <div className="md:col-span-4 bg-white rounded-xl overflow-hidden border border-gray-200">
              <div className="bg-[#128C4B] text-white font-bold text-xs px-4 py-3 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  WhatsApp
                </span>
                <span className="bg-white text-brand-greenDark text-[10px] font-extrabold px-2.5 py-0.5 rounded">
                  Nouveau message
                </span>
              </div>

              <div className="divide-y divide-gray-100 text-xs">
                <div className="flex items-center gap-3 p-3 bg-white">
                  <div className="w-7 h-7 rounded-full bg-stone-700 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <b className="block text-brand-ink font-bold text-[12px] truncate">Client - T-shirt noir</b>
                    <span className="text-gray-600 text-[11px] truncate block">Combien ça coûte ?</span>
                  </div>
                  <time className="text-[10px] text-gray-400">09:24</time>
                </div>

                <div className="flex items-center gap-3 p-3 bg-brand-greenSoft/40">
                  <div className="w-7 h-7 rounded-full bg-stone-800 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <b className="block text-brand-ink font-bold text-[12px] truncate">Aminata - Commande</b>
                    <span className="text-brand-greenDark font-semibold text-[11px] truncate block">Je prends 2 pièces</span>
                  </div>
                  <time className="text-[10px] text-gray-400">09:21</time>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white">
                  <div className="w-7 h-7 rounded-full bg-stone-700 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <b className="block text-brand-ink font-bold text-[12px] truncate">Client - Livraison</b>
                    <span className="text-gray-600 text-[11px] truncate block">C'est pour aujourd'hui ?</span>
                  </div>
                  <time className="text-[10px] text-gray-400">09:17</time>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white">
                  <div className="w-7 h-7 rounded-full bg-stone-800 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <b className="block text-brand-ink font-bold text-[12px] truncate">Mamadou - Paiement</b>
                    <span className="text-gray-600 text-[11px] truncate block">J'ai transféré 15$</span>
                  </div>
                  <time className="text-[10px] text-gray-400">09:12</time>
                </div>
              </div>
            </div>

            {/* Middle Arrow */}
            <div className="hidden md:flex md:col-span-1 justify-center text-brand-green font-black text-3xl">
              →
            </div>

            {/* Step 2: Kisimax App Card */}
            <div className="md:col-span-4 bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
                <span className="font-extrabold text-sm text-brand-ink flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 40 40">
                    <rect x="4" y="3" width="9" height="34" rx="2" fill="#1E9E4A" />
                    <path d="M15 20L29 3H38L24 20L38 37H29L15 20Z" fill="#1E9E4A" />
                  </svg>
                  Kisimax
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
              </div>

              {/* KPI */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-3">
                <span className="text-[10px] text-gray-600 font-semibold block">Ventes du jour</span>
                <div className="flex items-center justify-between">
                  <span className="text-[20px] font-extrabold text-brand-ink">185 $</span>
                  <span className="text-[10px] font-bold text-brand-greenDark bg-brand-greenSoft px-2 py-0.5 rounded">
                    +12%
                  </span>
                </div>
                {/* SVG trend */}
                <div className="h-9 w-full mt-1">
                  <svg viewBox="0 0 200 46" className="w-full h-full" preserveAspectRatio="none">
                    <path d="M0 40 L25 34 L50 36 L75 26 L100 29 L125 18 L150 21 L175 10 L200 4 V46 H0 Z" fill="rgba(30,158,74,0.15)" />
                    <path d="M0 40 L25 34 L50 36 L75 26 L100 29 L125 18 L150 21 L175 10 L200 4" fill="none" stroke="#1E9E4A" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>

              {/* Converted Order */}
              <div className="flex items-center gap-2.5 border border-brand-greenBorder bg-brand-greenSoft/30 rounded-lg p-2.5">
                <div className="w-7 h-7 rounded-full bg-brand-green text-white font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  ✓
                </div>
                <div className="text-xs">
                  <b className="text-brand-ink font-bold block">Nouvelle commande</b>
                  <span className="text-gray-600 text-[11px]">#0047 - 2 articles · Client : Aminata</span>
                </div>
              </div>
            </div>

            {/* Step 3: Status Badges (palette harmonisée) */}
            <div className="md:col-span-3 flex flex-row md:flex-col flex-wrap gap-2.5 justify-center md:items-start p-2">
              {statusPills.map((pill) => (
                <button
                  key={pill.name}
                  onClick={() => setActiveStatus(pill.name)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold border transition-colors ${pill.color} ${
                    activeStatus === pill.name ? 'ring-2 ring-brand-green ring-offset-1' : ''
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                  {pill.name}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* 3 Pillars / Feature Columns - Asymmetric layout (Point 6 audit) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Pillar 1: Base structurante (largeur 5 cols) */}
          <div className="lg:col-span-5 bg-white border border-brand-border rounded-xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-brand-green text-white font-bold text-base flex items-center justify-center">
                  1
                </div>
                <span className="text-[11px] font-bold text-brand-greenDark bg-brand-greenSoft px-2.5 py-0.5 rounded">
                  Fondation
                </span>
              </div>
              <h3 className="text-[18px] font-bold text-brand-ink leading-snug mb-1">
                Centralisation
              </h3>
              <span className="text-gray-500 text-[13px] font-semibold block mb-3">
                Fini WhatsApp comme seul outil
              </span>
              <p className="text-[14px] text-gray-700 leading-relaxed">
                Chaque demande client devient une vraie commande numérotée. Stock, prix, frais de livraison : tout est clair avant même de préparer le colis.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-gray-100 text-[12px] font-medium text-brand-greenDark">
              ✓ Zéro commande oubliée dans le fil
            </div>
          </div>

          {/* Pillar 2 & 3: Workflow & Pilotage (largeur 7 cols, empilés verticalement) */}
          <div className="lg:col-span-7 flex flex-col gap-4 justify-between">
            {/* Pillar 2 */}
            <div className="bg-white border border-brand-border rounded-xl p-5 sm:p-6 flex-1 flex flex-col justify-center">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-slate-800 text-white font-bold text-base flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-brand-ink leading-snug mb-0.5">
                    Suivi des Statuts <span className="text-gray-500 text-[13px] font-normal">(En temps réel)</span>
                  </h3>
                  <p className="text-[13px] text-gray-700 leading-relaxed mt-1">
                    Passez vos commandes de « Nouvelle » à « À préparer », puis « Livrée ». Vous savez exactement qui a payé quoi, et ce qu'il reste à encaisser.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white border border-brand-border rounded-xl p-5 sm:p-6 flex-1 flex flex-col justify-center">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-brand-greenDark text-white font-bold text-base flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-brand-ink leading-snug mb-0.5">
                    Tableau de bord <span className="text-gray-500 text-[13px] font-normal">(Pilotez votre chiffre)</span>
                  </h3>
                  <p className="text-[13px] text-gray-700 leading-relaxed mt-1">
                    Ouvrez votre téléphone le matin et voyez vos ventes quotidiennes, vos impayés et vos meilleurs produits. Les données travaillent pour vous.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
