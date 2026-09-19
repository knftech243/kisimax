import React from 'react';
import { AlertTriangle, BookX, UserX, WalletCards } from 'lucide-react';

export default function Problem() {
  const painPoints = [
    {
      icon: (
        <svg viewBox="0 0 34 34" fill="none" stroke="#0F1B2D" strokeWidth="1.8" className="w-8 h-8 mb-4">
          <rect x="7" y="4" width="20" height="26" rx="2" stroke="#0F1B2D" />
          <path d="M12 11H22M12 16H22M12 21H18M4 9H9M4 15H9M4 21H9" stroke="#0F1B2D" strokeLinecap="round" />
        </svg>
      ),
      title: "Le syndrome du cahier perdu",
      desc: "Une commande notée à la va-vite, un produit oublié à la livraison."
    },
    {
      icon: (
        <svg viewBox="0 0 34 34" fill="none" stroke="#0F1B2D" strokeWidth="1.8" className="w-8 h-8 mb-4">
          <path d="M5 7H29V23H14L8 28V23H5V7Z" stroke="#0F1B2D" strokeLinejoin="round" />
          <circle cx="17" cy="15" r="4" stroke="#1E9E4A" />
          <path d="M20 18L23 21" stroke="#1E9E4A" strokeLinecap="round" />
        </svg>
      ),
      title: "Le client fantôme",
      desc: "Un client demande le prix, vous oubliez de le relancer, la vente s'évapore."
    },
    {
      icon: (
        <svg viewBox="0 0 34 34" fill="none" stroke="#0F1B2D" strokeWidth="1.8" className="w-8 h-8 mb-4">
          <rect x="5" y="9" width="24" height="20" rx="3" stroke="#0F1B2D" />
          <path d="M9 9V6H21V9M20 19H29" stroke="#0F1B2D" strokeLinecap="round" />
          <circle cx="12" cy="19" r="3" stroke="#1E9E4A" />
        </svg>
      ),
      title: "Le flou financier",
      desc: "Encaissé par Mobile Money ? En espèces ? Une avance ? À la fin du mois, impossible de calculer votre bénéfice réel."
    }
  ];

  return (
    <section className="bg-brand-bgLight pt-20 pb-0 overflow-hidden" id="systeme">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Left Text & Pain Cards */}
          <div className="lg:col-span-7 pb-16 lg:pb-20">
            {/* Eye Badge */}
            <span className="kx-eye-badge text-brand-muted mb-4 block">
              Le problème
            </span>

            {/* Title */}
            <h2 className="text-[30px] sm:text-[38px] font-extrabold text-brand-ink leading-[1.2] tracking-[-0.5px] mb-4">
              Gérer une boutique ne devrait pas être un casse-tête.
            </h2>

            {/* Subtitle */}
            <p className="text-[16px] text-brand-muted leading-relaxed mb-10 max-w-lg">
              Vous attirez des clients. Vous recevez des messages.<br />
              Mais quand les commandes s'enchaînent, la réalité vous rattrape :
            </p>

            {/* Asymmetric Pain Points Layout (Casse la symétrie des 3 colonnes) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
              {/* Primary Featured Pain Point */}
              <div className="md:col-span-12 bg-white border border-brand-border rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                  <h3 className="text-[16px] font-bold text-brand-ink flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-brand-redSoft text-brand-red text-xs font-bold flex items-center justify-center">✕</span>
                    {painPoints[0].title}
                  </h3>
                  <span className="text-[11px] font-semibold text-brand-red bg-brand-redSoft px-2.5 py-0.5 rounded border border-[#F8C9CB] self-start sm:self-auto">
                    Perte immédiate
                  </span>
                </div>
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  {painPoints[0].desc}
                </p>
              </div>

              {/* Secondary Pain Points */}
              <div className="md:col-span-6 bg-white border border-brand-border rounded-xl p-5">
                <h3 className="text-[15px] font-bold text-brand-ink mb-1.5 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-brand-redSoft text-brand-red text-xs font-bold flex items-center justify-center">✕</span>
                  {painPoints[1].title}
                </h3>
                <p className="text-[13px] text-gray-700 leading-relaxed">
                  {painPoints[1].desc}
                </p>
              </div>

              <div className="md:col-span-6 bg-white border border-brand-border rounded-xl p-5">
                <h3 className="text-[15px] font-bold text-brand-ink mb-1.5 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-brand-redSoft text-brand-red text-xs font-bold flex items-center justify-center">✕</span>
                  {painPoints[2].title}
                </h3>
                <p className="text-[13px] text-gray-700 leading-relaxed">
                  {painPoints[2].desc}
                </p>
              </div>
            </div>

            {/* Alert Conclusion Banner (Copy réécrite avec bénéfice concret) */}
            <div className="bg-brand-redSoft border border-[#F8C9CB] rounded-xl p-4 sm:p-5 flex items-center gap-4 text-brand-red max-w-xl">
              <div className="w-8 h-8 rounded-full bg-brand-red text-white font-black flex items-center justify-center flex-shrink-0 text-sm">
                !
              </div>
              <p className="text-[14px] sm:text-[15px] leading-snug">
                Vos commandes et vos clients sont déjà là :<br />
                <strong className="font-extrabold">Donnez à votre boutique le système qui sécurise chaque vente.</strong>
              </p>
            </div>
          </div>

          {/* Right Visual: Overwhelmed African Merchant */}
          <div className="lg:col-span-5 relative flex items-end justify-center min-h-[380px] sm:min-h-[460px]">
            {/* Thought tags (sans emojis, sans blur décoratif, sans ombres superflues) */}
            <div className="absolute top-4 left-6 bg-white px-3 py-1.5 rounded-lg text-xs font-bold text-brand-ink border border-gray-200">
              Qui a payé ?
            </div>
            <div className="absolute top-2 right-4 bg-white px-3 py-1.5 rounded-lg text-xs font-bold text-brand-ink border border-gray-200">
              Quelle commande ?
            </div>
            <div className="absolute top-24 left-2 bg-white px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 border border-gray-200">
              Statut de livraison
            </div>
            <div className="absolute top-20 right-0 bg-white px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 border border-gray-200">
              Relance impayés
            </div>
            <div className="absolute top-40 right-2 bg-brand-redSoft px-3 py-1.5 rounded-lg text-xs font-bold text-brand-red border border-red-200">
              Bénéfice réel ?
            </div>

            {/* Merchant Image with mask */}
            <img 
              src="/images/kx-commercante.png"
              onError={(e) => {
                e.target.src = "https://kisimax.cefirdc.org/wp-content/uploads/2026/09/kx-commercante.webp";
              }}
              alt="Commerçante débordée par les messages de ses clients"
              className="max-w-[380px] sm:max-w-[440px] w-full object-contain mask-merchant z-10"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
