import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { SunIcon, MoonIcon } from './Icons';

export default function Navbar({ language: propLanguage } = {}) {
  const portfolio = usePortfolio();
  const language = propLanguage || portfolio.language || 'id';
  const { toggleLanguage, theme, toggleTheme } = portfolio;
  const isEn = language === 'en';

  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: isEn ? 'Home' : 'Beranda' },
    { id: 'about', label: isEn ? 'About' : 'Tentang' },
    { id: 'projects', label: isEn ? 'Projects' : 'Proyek' },
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

  // Scroll spy to dynamically track the active section
  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'credentials', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-fit px-3 sm:px-5 py-2 rounded-full bg-zinc-900/90 dark:bg-zinc-900/90 border border-zinc-800 backdrop-blur-md shadow-lg flex items-center justify-between gap-2 sm:gap-4 select-none">
      {/* Sisi Kiri (Brand / Dot) - Muncul di layar sm ke atas */}
      <div
        onClick={() => scrollTo('home')}
        className="hidden md:flex items-center gap-2 font-semibold text-white text-sm shrink-0 cursor-pointer select-none"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollTo('home')}
      >
        <span className="w-2 h-2 rounded-full bg-amber-500" />
        <span>Iqbal D.F</span>
      </div>

      {/* Menu Navigasi Tengah */}
      <nav className="flex items-center gap-1 sm:gap-1.5 md:px-3 md:border-l md:border-zinc-800">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium rounded-full transition-colors cursor-pointer border-0 ${
                isActive
                  ? 'text-amber-400 font-semibold bg-zinc-800'
                  : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Sisi Kanan: Switcher Bahasa & Toggle Tema */}
      <div className="flex items-center gap-1 sm:gap-1.5 pl-1.5 sm:pl-2 border-l border-zinc-800 shrink-0">
        <button
          type="button"
          onClick={toggleLanguage}
          className="px-2 py-1 text-[11px] font-mono font-semibold text-zinc-300 hover:text-white rounded-full cursor-pointer border-0"
          title={isEn ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
        >
          {language.toUpperCase()}
        </button>

        <button
          type="button"
          onClick={toggleTheme}
          className="p-1.5 text-zinc-300 hover:text-amber-400 rounded-full transition-colors cursor-pointer border-0 flex items-center justify-center"
          aria-label="Toggle theme"
          title={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
        >
          {theme === 'dark' ? (
            <SunIcon size={15} className="w-3.5 h-3.5 text-amber-400" />
          ) : (
            <MoonIcon size={15} className="w-3.5 h-3.5 text-zinc-300" />
          )}
        </button>
      </div>
    </header>
  );
}
