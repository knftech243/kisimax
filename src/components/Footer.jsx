import React from 'react';
import Logo from './Logo';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-night text-[#8FA0B2] pt-14 pb-8 text-xs border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 items-center pb-10 border-b border-white/10">
          
          {/* Logo & Slogan */}
          <div className="lg:col-span-4">
            <Logo dark={true} />
          </div>

          {/* WhatsApp Direct Contact */}
          <div className="lg:col-span-3">
            <a 
              href="https://wa.me/243971234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 group hover:text-white transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M4 20L5.3 16A8 8 0 1 1 8 18.7Z" />
                  <path d="M9 9.5C9.5 11.5 11.5 13.5 13.5 14L14.5 13L16.5 14L16 15.5C13 15.5 9 11.5 9 8.5L10.5 8L11.5 10Z" />
                </svg>
              </div>
              <div>
                <b className="text-white text-sm font-bold block group-hover:text-brand-green transition-colors">
                  +243 97 123 4567
                </b>
                <span className="text-[11px] text-[#8FA0B2]">Contact WhatsApp</span>
              </div>
            </a>
          </div>

          {/* Email Contact */}
          <div className="lg:col-span-3">
            <a 
              href="mailto:contact@kisimax.com"
              className="flex items-center gap-3 group hover:text-white transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <b className="text-white text-sm font-bold block group-hover:text-brand-green transition-colors">
                  contact@kisimax.com
                </b>
                <span className="text-[11px] text-[#8FA0B2]">Envoyez-nous un email</span>
              </div>
            </a>
          </div>

          {/* Social Icons */}
          <div className="lg:col-span-2 flex flex-col sm:items-end">
            <b className="text-white text-xs font-semibold mb-2 block">Suivez-nous</b>
            <div className="flex gap-2">
              {[
                { name: 'f', label: 'Facebook', href: '#' },
                { name: 'ig', label: 'Instagram', href: '#' },
                { name: 'tk', label: 'TikTok', href: '#' },
                { name: '▶', label: 'YouTube', href: '#' },
                { name: 'in', label: 'LinkedIn', href: '#' },
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  aria-label={soc.label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white text-xs font-bold hover:bg-brand-green hover:border-brand-green transition-all"
                >
                  {soc.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-[11px] text-[#94A3B8]">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
          <span>© 2026 Kisimax. Tous droits réservés.</span>
        </div>

      </div>
    </footer>
  );
}
