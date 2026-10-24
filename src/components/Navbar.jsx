import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { HomeIcon, BarChartIcon, AwardIcon, MailIcon, SunIcon, MoonIcon } from './Icons';

export default function Navbar({ activeTab: propActiveTab, setActiveTab: propSetActiveTab, language: propLanguage } = {}) {
  const portfolio = usePortfolio();
  const activeTab = propActiveTab || portfolio.activeTab || 'home';
  const setActiveTab = propSetActiveTab || portfolio.setActiveTab;
  const language = propLanguage || portfolio.language || 'id';
  const { toggleLanguage, theme, toggleTheme } = portfolio;

  const isEn = language === 'en';

  const navItems = [
    { id: 'home', label: isEn ? 'Home' : 'Beranda', Icon: HomeIcon },
    { id: 'projects', label: isEn ? 'Projects' : 'Proyek', Icon: BarChartIcon },
    { id: 'certifications', label: isEn ? 'Certifications' : 'Sertifikasi', Icon: AwardIcon },
    { id: 'contact', label: isEn ? 'Contact' : 'Kontak', Icon: MailIcon },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800 shadow-md dark:shadow-2xl max-w-[96vw] sm:max-w-fit transition-colors duration-200 gap-1.5 sm:gap-3 select-none">
      {/* Sisi Kiri (Brand / Dot) */}
      <div
        onClick={() => setActiveTab && setActiveTab('home')}
        className="flex items-center gap-1.5 font-semibold text-zinc-900 dark:text-white text-xs sm:text-sm shrink-0 cursor-pointer select-none"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && setActiveTab) {
            setActiveTab('home');
          }
        }}
      >
        <span className="w-2 h-2 rounded-full bg-orange-500" />
        <span className="hidden sm:inline">Iqbal D.F</span>
      </div>

      {/* Menu Navigasi Tengah */}
      <nav className="flex items-center gap-0.5 sm:gap-1 px-1 sm:px-2 border-l border-zinc-200 dark:border-zinc-800">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab && setActiveTab(item.id)}
              className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-lg sm:rounded-full transition-colors cursor-pointer border-0 ${
                isActive
                  ? 'text-orange-500 font-semibold bg-orange-500/10'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-zinc-800/60'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Sisi Kanan: Switcher Bahasa & Toggle Tema (Selalu Tampil di HP & Desktop) */}
      <div className="flex items-center gap-1 sm:gap-1.5 pl-1.5 sm:pl-2 border-l border-zinc-200 dark:border-zinc-800 shrink-0">
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
  );
}
