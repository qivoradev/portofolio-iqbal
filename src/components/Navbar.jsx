import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Navbar({ language: propLanguage } = {}) {
  const portfolio = usePortfolio();
  const language = propLanguage || portfolio.language || 'id';
  const { toggleLanguage } = portfolio;
  const isEn = language === 'en';

  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: isEn ? 'Home' : 'Beranda' },
    { id: 'projects', label: isEn ? 'Projects' : 'Proyek' },
    { id: 'about', label: isEn ? 'Capabilities' : 'Kemampuan' },
    { id: 'credentials', label: isEn ? 'Credentials' : 'Kredensial' },
    { id: 'contact', label: isEn ? 'Contact' : 'Kontak' },
  ];

  // Smooth scroll helper
  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Nav active state diupdate via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'projects', 'about', 'credentials', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center pointer-events-none px-4 select-none">
      <div
        className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-5 py-2 rounded-full shadow-none transition-colors"
        style={{
          background: 'rgba(17, 17, 16, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '0.5px solid #2E2E2C',
        }}
      >
        {/* Brand with green dot */}
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#E8E6DF] shrink-0 cursor-pointer border-0 bg-transparent p-0 transition-colors hover:text-[#22C55E]"
        >
          <span className="w-2 h-2 rounded-full bg-[#22C55E] inline-block animate-pulse shrink-0" />
          <span className="tracking-tight">Iqbal D.F</span>
        </button>

        {/* Nav Links */}
        <nav className="flex items-center gap-1 pl-2 sm:pl-3" style={{ borderLeft: '0.5px solid #252523' }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium rounded-full cursor-pointer border-0 transition-colors"
                style={{
                  backgroundColor: isActive ? '#242422' : 'transparent',
                  color: isActive ? '#E8E6DF' : '#8A8A86',
                  transitionDuration: '0.15s',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = '#242422';
                    e.currentTarget.style.color = '#E8E6DF';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#8A8A86';
                  }
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Language Switcher */}
        <div className="pl-1 sm:pl-2 shrink-0" style={{ borderLeft: '0.5px solid #252523' }}>
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-2 py-0.5 text-[10px] sm:text-xs font-mono font-bold text-[#8A8A86] hover:text-[#E8E6DF] rounded-full cursor-pointer border-0 bg-transparent transition-colors"
            title={isEn ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
          >
            {language.toUpperCase()}
          </button>
        </div>
      </div>
    </header>
  );
}
