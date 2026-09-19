import React, { useState } from 'react';
import { X, Play, CheckCircle2, ArrowRight, Smartphone, MessageCircle, BarChart3 } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('centralisation');

  const tabs = [
    { id: 'centralisation', label: '1. Centralisation WhatsApp', icon: MessageCircle },
    { id: 'statuts', label: '2. Suivi des Commandes', icon: Smartphone },
    { id: 'finances', label: '3. Tableau de Bord', icon: BarChart3 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-night/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl border border-gray-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
            <h3 className="font-extrabold text-brand-ink text-base sm:text-lg">
              Découvrir Kisimax en 1 minute
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-brand-muted hover:text-brand-ink hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-gray-100 bg-gray-50/30 px-6 pt-3 gap-2 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 text-xs font-bold rounded-t-xl transition-all border-b-2 whitespace-nowrap ${
                  isActive 
                    ? 'border-brand-green text-brand-green bg-white shadow-sm' 
                    : 'border-transparent text-brand-muted hover:text-brand-ink'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Modal Body / Demo Simulator */}
        <div className="p-6">
          {activeTab === 'centralisation' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="bg-brand-bgLight rounded-2xl p-5 border border-brand-border">
                <div className="text-xs font-bold text-brand-green uppercase tracking-wider mb-2">
                  Étape 1 : Fini les oublis sur WhatsApp
                </div>
                <h4 className="font-bold text-brand-ink text-base mb-2">
                  Chaque message client devient une commande officielle
                </h4>
                <p className="text-sm text-brand-muted leading-relaxed mb-4">
                  Dès qu'un client vous écrit sur WhatsApp, vous enregistrez l'article, la quantité et le prix en 3 clics. Un ticket numéroté est automatiquement créé.
                </p>

                {/* Simulation preview */}
                <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-brand-greenSoft text-brand-green font-black flex items-center justify-center text-xs">
                      #0047
                    </span>
                    <div>
                      <div className="font-bold text-xs text-brand-ink">Client : Aminata Diallo</div>
                      <div className="text-[11px] text-brand-muted">2x T-shirt Premium (Taille L) • 25 $</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-[#EAF0FD] text-brand-blue px-2 py-1 rounded-md">
                    Validée
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'statuts' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="bg-brand-bgLight rounded-2xl p-5 border border-brand-border">
                <div className="text-xs font-bold text-brand-green uppercase tracking-wider mb-2">
                  Étape 2 : Vos colis sous contrôle
                </div>
                <h4 className="font-bold text-brand-ink text-base mb-2">
                  Visualisez en temps réel qui prépare, qui livre et qui paye
                </h4>
                <p className="text-sm text-brand-muted leading-relaxed mb-4">
                  Changez le statut d'un simple glissement de doigt. Vos livreurs savent où aller, et vous savez si le paiement Mobile Money ou espèces a été encaissé.
                </p>

                {/* Simulation Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="bg-white p-2.5 rounded-xl border border-gray-200 text-center">
                    <span className="text-[10px] font-bold text-brand-blue block">1. Nouvelle</span>
                    <span className="text-xs text-gray-500 font-semibold">12 en attente</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-gray-200 text-center">
                    <span className="text-[10px] font-bold text-amber-600 block">2. À préparer</span>
                    <span className="text-xs text-gray-500 font-semibold">5 au stock</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-gray-200 text-center">
                    <span className="text-[10px] font-bold text-purple-600 block">3. En livraison</span>
                    <span className="text-xs text-gray-500 font-semibold">8 en route</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-gray-200 text-center">
                    <span className="text-[10px] font-bold text-brand-green block">4. Livrée</span>
                    <span className="text-xs text-gray-500 font-semibold">24 encaissées</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'finances' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="bg-brand-bgLight rounded-2xl p-5 border border-brand-border">
                <div className="text-xs font-bold text-brand-green uppercase tracking-wider mb-2">
                  Étape 3 : Visibilité financière totale
                </div>
                <h4 className="font-bold text-brand-ink text-base mb-2">
                  Ouvrez votre téléphone le matin et pilotez votre chiffre réel
                </h4>
                <p className="text-sm text-brand-muted leading-relaxed mb-4">
                  Chiffre d'affaires du jour, dettes clients en attente de relance, et articles les plus rentables. Plus aucun calcul flou à la fin du mois.
                </p>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-xl border border-brand-border">
                    <span className="text-[10px] text-gray-500 font-semibold block">CA du jour</span>
                    <span className="text-base font-extrabold text-brand-ink">185 $</span>
                    <span className="text-[9px] text-brand-green font-bold block">+12%</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-brand-border">
                    <span className="text-[10px] text-gray-500 font-semibold block">Encaissé cash</span>
                    <span className="text-base font-extrabold text-brand-ink">145 $</span>
                    <span className="text-[9px] text-brand-green font-bold block">Mobile Money</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-brand-border">
                    <span className="text-[10px] text-gray-500 font-semibold block">Relances à faire</span>
                    <span className="text-base font-extrabold text-brand-red">3</span>
                    <span className="text-[9px] text-brand-red font-bold block">Dettes à solder</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-brand-muted text-center sm:text-left">
            Installation clé en main et formation incluse en moins de 48h.
          </div>
          <a
            href="https://wa.me/243971234567?text=Bonjour%20Kisimax,%20je%20viens%20de%20voir%20la%20d%C3%A9mo%20et%20je%20veux%20structurer%20ma%20boutique."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenDark text-white font-bold text-sm px-6 py-3 rounded-lg border border-brand-greenDark transition-colors"
          >
            Structurer ma boutique aujourd'hui
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
