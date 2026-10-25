import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Navbar({
  language: propLanguage,
  toggleLanguage: propToggleLanguage,
  darkMode: propDarkMode,
  toggleTheme: propToggleTheme,
} = {}) {
  const portfolio = usePortfolio();
  const language = propLanguage !== undefined ? propLanguage : portfolio.language;
  const toggleLanguage = propToggleLanguage || portfolio.toggleLanguage;
  const darkMode = propDarkMode !== undefined ? propDarkMode : portfolio.theme === 'dark';
  const toggleTheme = propToggleTheme || portfolio.toggleTheme;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#09090b]/85 backdrop-blur-md border-b border-zinc-200 dark:border-white/[0.08] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Kiri */}
        <a href="#home" className="flex items-center gap-2.5 font-bold tracking-tight group">
          <span className="w-2.5 h-2.5 rounded-full bg-lime-500 dark:bg-lime-400 group-hover:scale-125 transition-transform shadow-[0_0_8px_#a3e635]" />
          <span className="font-mono text-xs tracking-widest text-zinc-900 dark:text-zinc-200">IQBAL.DF</span>
        </a>

        {/* Menu Navigasi Tengah */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
          <a href="#home" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Home</a>
          <a href="#projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Tools</a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Aksi Kanan: SVG Theme Toggle & CTA Button */}
        <div className="flex items-center gap-3">
          
          {/* Theme Toggle Button (Clean SVG Icon - Bukan Emoji) */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              // Sun Icon (Muncul saat Dark Mode untuk beralih ke Light)
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              // Moon Icon (Muncul saat Light Mode untuk beralih ke Dark)
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 rounded-xl border border-zinc-200 dark:border-white/10 text-[11px] font-mono font-bold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
            title={language === 'en' ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
          >
            {language === 'en' ? 'ID' : 'EN'}
          </button>

          {/* CTA Button ala Sawad */}
          <a
            href="mailto:iqbalfathonah20@gmail.com"
            className="hidden sm:inline-flex px-4 py-2 rounded-full bg-zinc-900 dark:bg-lime-400 hover:bg-zinc-800 dark:hover:bg-lime-300 text-white dark:text-black font-bold text-xs font-mono tracking-wide transition-all shadow-sm"
          >
            LET'S TALK →
          </a>
        </div>

      </div>
    </header>
  );
}
