import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Navbar({
  language: propLanguage,
  toggleLanguage: propToggleLanguage,
  darkMode: propDarkMode,
  toggleTheme: propToggleTheme,
} = {}) {
  const portfolio = usePortfolio();
  const language = propLanguage || portfolio.language || 'id';
  const toggleLanguage = propToggleLanguage || portfolio.toggleLanguage;
  const toggleTheme = propToggleTheme || portfolio.toggleTheme;
  const darkMode = propDarkMode !== undefined ? propDarkMode : portfolio.theme === 'dark';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl select-none">
      <div className="px-4 sm:px-6 py-2.5 rounded-full bg-[#0e0e12]/80 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-between text-xs font-medium text-white">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
          className="flex items-center gap-2 font-bold font-mono tracking-wider hover:text-lime-400 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635]" />
          <span>IQBAL.DF</span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-3 sm:gap-6 font-sans text-zinc-400">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('projects');
            }}
            className="hover:text-white transition-colors"
          >
            {language === 'en' ? 'Projects' : 'Proyek'}
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('about');
            }}
            className="hidden sm:inline-block hover:text-white transition-colors"
          >
            {language === 'en' ? 'Tools' : 'Alat'}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contact');
            }}
            className="hover:text-white transition-colors"
          >
            {language === 'en' ? 'Contact' : 'Kontak'}
          </a>
        </div>

        {/* Action Toggles */}
        <div className="flex items-center gap-2 pl-3 border-l border-white/10">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1 rounded-full text-zinc-400 hover:text-white transition-colors cursor-pointer border-0 bg-transparent text-sm leading-none"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/10 text-lime-400 hover:bg-white/20 transition-colors cursor-pointer border-0"
            title={language === 'en' ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
          >
            {language === 'en' ? 'ID' : 'EN'}
          </button>
        </div>

      </div>
    </nav>
  );
}
