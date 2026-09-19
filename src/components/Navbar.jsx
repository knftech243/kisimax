import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Le Système', href: '#systeme' },
    { name: 'Fonctionnalités', href: '#fonctionnalites' },
    { name: 'Nos Offres', href: '#offres' },
    { name: 'Garantie', href: '#garantie' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-border/60 py-3.5' 
          : 'bg-white/80 backdrop-blur-sm border-b border-brand-border/30 py-4'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-semibold text-brand-ink/80 hover:text-brand-green transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#offres"
            className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-greenDark text-white text-[14px] font-bold px-5 py-2.5 rounded-lg border border-brand-greenDark transition-colors"
          >
            Obtenir mon système de gestion
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-brand-ink hover:bg-gray-100 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] font-semibold text-brand-ink py-2 hover:text-brand-green border-b border-gray-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#offres"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-3.5 px-6 rounded-xl shadow-btn text-center"
            >
              Obtenir mon système de gestion
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
