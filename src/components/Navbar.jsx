import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { HomeIcon, BarChartIcon, AwardIcon, MailIcon, SunIcon, MoonIcon } from './Icons';

export default function Navbar({ language: propLanguage } = {}) {
  const portfolio = usePortfolio();
  const language = propLanguage || portfolio.language || 'id';
  const { toggleLanguage, theme, toggleTheme } = portfolio;
  const isEn = language === 'en';

  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: isEn ? 'Home' : 'Beranda', Icon: HomeIcon },
    { id: 'projects', label: isEn ? 'Projects' : 'Proyek', Icon: BarChartIcon },
    { id: 'credentials', label: isEn ? 'Credentials' : 'Kredensial', Icon: AwardIcon },
    { id: 'contact', label: isEn ? 'Contact' : 'Kontak', Icon: MailIcon },
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
    const sectionIds = ['home', 'projects', 'credentials', 'contact'];
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
    <>
      {/* 1. DESKTOP VIEW (Floating Top Header) */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center justify-between px-5 py-2.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur border border-zinc-200 dark:border-zinc-800 shadow-md max-w-fit transition-colors duration-200 gap-4 select-none">
        {/* Sisi Kiri (Brand / Dot) */}
        <div
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-white text-sm shrink-0 cursor-pointer select-none"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollTo('home')}
        >
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span>Iqbal D.F</span>
        </div>

        {/* Menu Navigasi Tengah */}
        <nav className="flex items-center gap-1 px-3 border-l border-zinc-200 dark:border-zinc-800">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors cursor-pointer border-0 ${
                  isActive
                    ? 'text-amber-500 font-semibold bg-amber-500/10'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Sisi Kanan: Switcher Bahasa & Toggle Tema */}
        <div className="flex items-center gap-1.5 pl-2 border-l border-zinc-200 dark:border-zinc-800 shrink-0">
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-2 py-1 text-xs font-mono font-medium rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer border-0"
            title={isEn ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
          >
            {language.toUpperCase()}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer border-0 flex items-center justify-center"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
          >
            {theme === 'dark' ? (
              <SunIcon size={16} className="w-4 h-4 text-amber-400" />
            ) : (
              <MoonIcon size={16} className="w-4 h-4 text-zinc-700" />
            )}
          </button>
        </div>
      </header>

      {/* 2. MOBILE VIEW (Floating Bottom Dock) */}
      <nav
        aria-label="Mobile Navigation"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex md:hidden items-center gap-1.5 px-3 py-2 rounded-full bg-zinc-900/90 dark:bg-zinc-900/90 backdrop-blur border border-zinc-800 shadow-xl select-none"
      >
        {/* 1. Beranda (Home Icon) */}
        <button
          type="button"
          onClick={() => scrollTo('home')}
          aria-label={isEn ? 'Home' : 'Beranda'}
          className={`p-2 rounded-full transition-colors cursor-pointer border-0 ${
            activeSection === 'home'
              ? 'bg-zinc-800 text-amber-400'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <HomeIcon size={16} className="w-4 h-4" />
        </button>

        {/* 2. Proyek (Chart / Projects Icon) */}
        <button
          type="button"
          onClick={() => scrollTo('projects')}
          aria-label={isEn ? 'Projects' : 'Proyek'}
          className={`p-2 rounded-full transition-colors cursor-pointer border-0 ${
            activeSection === 'projects'
              ? 'bg-zinc-800 text-amber-400'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <BarChartIcon size={16} className="w-4 h-4" />
        </button>

        {/* 3. Kredensial (Badge / Certificate Icon) */}
        <button
          type="button"
          onClick={() => scrollTo('credentials')}
          aria-label={isEn ? 'Credentials' : 'Kredensial'}
          className={`p-2 rounded-full transition-colors cursor-pointer border-0 ${
            activeSection === 'credentials'
              ? 'bg-zinc-800 text-amber-400'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <AwardIcon size={16} className="w-4 h-4" />
        </button>

        {/* 4. Kontak (Mail Icon) */}
        <button
          type="button"
          onClick={() => scrollTo('contact')}
          aria-label={isEn ? 'Contact' : 'Kontak'}
          className={`p-2 rounded-full transition-colors cursor-pointer border-0 ${
            activeSection === 'contact'
              ? 'bg-zinc-800 text-amber-400'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <MailIcon size={16} className="w-4 h-4" />
        </button>

        {/* GARIS PEMISAH */}
        <div className="w-[1px] h-4 bg-zinc-700/80 mx-1" />

        {/* TOGGLE BAHASA (ID / EN) */}
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label="Ganti Bahasa"
          className="px-2 py-1 text-[11px] font-mono font-semibold text-zinc-300 hover:text-white rounded-full cursor-pointer border-0"
        >
          {language.toUpperCase()}
        </button>

        {/* TOGGLE TEMA (DARK / LIGHT) */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Ganti Tema"
          className="p-2 text-zinc-300 hover:text-amber-400 rounded-full transition-colors cursor-pointer border-0 flex items-center justify-center"
        >
          {theme === 'dark' ? (
            <SunIcon size={16} className="w-4 h-4 text-amber-400" />
          ) : (
            <MoonIcon size={16} className="w-4 h-4 text-zinc-300" />
          )}
        </button>
      </nav>
    </>
  );
}
