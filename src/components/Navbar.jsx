import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { HomeIcon, UserIcon, BarChartIcon, AwardIcon, MailIcon, SunIcon, MoonIcon } from './Icons';

export default function Navbar({ language: propLanguage } = {}) {
  const portfolio = usePortfolio();
  const language = propLanguage || portfolio.language || 'id';
  const { toggleLanguage, theme, toggleTheme } = portfolio;
  const isEn = language === 'en';

  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: isEn ? 'Home' : 'Beranda', Icon: HomeIcon },
    { id: 'about', label: isEn ? 'About' : 'Tentang', Icon: UserIcon },
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
    <>
      {/* 1. DESKTOP VIEW (hidden md:flex) */}
      <header className="fixed top-3 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none px-4 select-none">
        <div className="pointer-events-auto flex items-center justify-between px-5 py-2.5 rounded-full bg-zinc-900/90 dark:bg-zinc-900/90 border border-zinc-800 backdrop-blur-md shadow-lg gap-4">
          {/* Sisi Kiri (Brand / Dot) */}
          <div
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 font-semibold text-white text-sm shrink-0 cursor-pointer"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollTo('home')}
          >
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Iqbal D.F</span>
          </div>

          {/* Menu Teks Desktop */}
          <nav className="flex items-center gap-1.5 px-3 border-l border-zinc-800">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer border-0 ${
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
          <div className="flex items-center gap-1.5 pl-2 border-l border-zinc-800 shrink-0">
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs font-mono font-semibold text-zinc-300 hover:text-white rounded-full cursor-pointer border-0"
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
        </div>
      </header>

      {/* 2. MOBILE VIEW (flex md:hidden) - Ringkas Minimalis */}
      <div className="fixed top-3 inset-x-4 z-50 flex md:hidden items-center justify-between px-4 py-2.5 rounded-full bg-zinc-900/90 dark:bg-zinc-900/90 border border-zinc-800 backdrop-blur-md shadow-lg select-none">
        {/* KIRI */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-xs font-bold tracking-tight text-white font-mono">Iqbal D.F</span>
        </a>

        {/* KANAN */}
        <div className="flex items-center gap-2">
          {/* Toggle Bahasa */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="text-[11px] font-mono font-semibold text-zinc-300 hover:text-white px-2 py-0.5 rounded-md bg-zinc-800/80 cursor-pointer border-0"
          >
            {language.toUpperCase()}
          </button>

          {/* Toggle Tema */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 text-zinc-300 hover:text-amber-400 rounded-md cursor-pointer border-0 flex items-center justify-center"
          >
            {theme === 'dark' ? (
              <SunIcon size={16} className="w-4 h-4 text-amber-400" />
            ) : (
              <MoonIcon size={16} className="w-4 h-4 text-zinc-300" />
            )}
          </button>

          {/* Tombol Kontak Cepat */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contact');
            }}
            className="px-3 py-1 rounded-full bg-white text-zinc-950 dark:bg-zinc-100 dark:text-zinc-950 text-[11px] font-medium tracking-wide shadow-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer"
          >
            {language === 'en' ? 'Contact' : 'Kontak'}
          </a>
        </div>
      </div>
    </>
  );
}
