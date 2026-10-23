import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { HomeIcon, BarChartIcon, AwardIcon, MailIcon, SunIcon, MoonIcon } from './Icons';

export default function Navbar({ activeTab: propActiveTab, setActiveTab: propSetActiveTab, language: propLanguage } = {}) {
  const portfolio = usePortfolio();
  const activeTab = propActiveTab || portfolio.activeTab || 'home';
  const setActiveTab = propSetActiveTab || portfolio.setActiveTab;
  const language = propLanguage || portfolio.language || 'id';
  const { toggleLanguage, theme, toggleTheme } = portfolio;

  const [isDockOpen, setIsDockOpen] = useState(true);

  const isEn = language === 'en';

  const navItems = [
    { id: 'home', label: isEn ? 'Home' : 'Beranda', Icon: HomeIcon },
    { id: 'projects', label: isEn ? 'Projects' : 'Proyek', Icon: BarChartIcon },
    { id: 'certifications', label: isEn ? 'Certifications' : 'Sertifikasi', Icon: AwardIcon },
    { id: 'contact', label: isEn ? 'Contact' : 'Kontak', Icon: MailIcon },
  ];

  return (
    <>
      {/* 1. Navbar Desktop (Floating Header) */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center justify-between px-6 py-2.5 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-2xl min-w-[560px] max-w-2xl transition-colors duration-300">
        {/* Sisi Kiri (Brand) */}
        <div
          onClick={() => setActiveTab && setActiveTab('home')}
          className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-white text-sm shrink-0 cursor-pointer select-none"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && setActiveTab) {
              setActiveTab('home');
            }
          }}
        >
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          <span>Iqbal D.F</span>
        </div>

        {/* Menu Tengah (Wajib flex gap-6 dengan border-l dan border-r) */}
        <nav className="flex items-center gap-6 px-4 border-l border-r border-zinc-200 dark:border-zinc-800">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab && setActiveTab(item.id)}
              className={`text-sm font-medium transition-colors bg-transparent border-0 cursor-pointer ${
                activeTab === item.id
                  ? 'text-orange-500 font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Sisi Kanan: Switcher Bahasa & Toggle Tema */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={toggleLanguage}
            className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-transparent border-0 px-2 py-1 cursor-pointer transition-colors"
            title={isEn ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
          >
            {isEn ? 'EN' : 'ID'}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-transparent border-0 cursor-pointer p-1.5 rounded-full flex items-center justify-center transition-colors"
            title={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
          </button>
        </div>
      </header>

      {/* 2. Floating Dock Mobile (Collapsible Minimalis) */}
      {!isDockOpen ? (
        /* Mode Tertutup: Satu tombol mini mengambang */
        <button
          type="button"
          onClick={() => setIsDockOpen(true)}
          aria-label="Buka Menu"
          className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 dark:bg-zinc-900/90 border border-zinc-800 backdrop-blur-xl shadow-xl text-zinc-300 text-xs font-mono active:scale-95 transition-all cursor-pointer"
        >
          <svg className="w-3.5 h-3.5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <span>Menu</span>
        </button>
      ) : (
        /* Mode Terbuka: Dok navigasi murni (4 Tab Navigasi + Tombol Sembunyikan) */
        <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-zinc-900/90 dark:bg-zinc-900/90 border border-zinc-800 backdrop-blur-xl shadow-2xl transition-all">
          {/* 4 Icon Menu Utama (Home, Projects, Certifications, Contact) */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.Icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab && setActiveTab(item.id)}
                  aria-label={item.label}
                  title={item.label}
                  className={`p-2 rounded-xl transition-colors cursor-pointer border-0 ${
                    isActive
                      ? 'text-orange-500 bg-orange-500/10'
                      : 'text-zinc-400 hover:text-white bg-transparent'
                  }`}
                >
                  <Icon size={19} className="w-5 h-5" />
                </button>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-[1px] h-4 bg-zinc-800" />

          {/* Tombol Sembunyikan Dok */}
          <button
            type="button"
            onClick={() => setIsDockOpen(false)}
            aria-label="Tutup Menu"
            className="w-7 h-7 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer border-0"
            title="Sembunyikan"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
