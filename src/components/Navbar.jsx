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
    <>
      {/* 1. Navbar Desktop (Floating Header) */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center justify-between px-6 py-2.5 rounded-full bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 shadow-2xl min-w-[560px] max-w-2xl">
        {/* Sisi Kiri (Brand) */}
        <div
          onClick={() => setActiveTab && setActiveTab('home')}
          className="flex items-center gap-2 font-semibold text-white text-sm shrink-0 cursor-pointer select-none"
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
        <nav className="flex items-center gap-6 px-4 border-l border-r border-zinc-800">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab && setActiveTab(item.id)}
              className={`text-sm font-medium transition-colors bg-transparent border-0 cursor-pointer ${
                activeTab === item.id
                  ? 'text-orange-500 font-semibold'
                  : 'text-zinc-400 hover:text-white'
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
            className="text-xs font-semibold text-zinc-400 hover:text-white bg-transparent border-0 px-2 py-1 cursor-pointer transition-colors"
            title={isEn ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
          >
            {isEn ? 'EN' : 'ID'}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="text-zinc-400 hover:text-white bg-transparent border-0 cursor-pointer p-1.5 rounded-full flex items-center justify-center transition-colors"
            title={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
          </button>
        </div>
      </header>

      {/* 2. Floating Dock Mobile (Hanya tampil di mobile: md:hidden fixed bottom-4) */}
      <nav
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center"
        aria-label="Mobile Navigation"
      >
        <div className="flex flex-row flex-nowrap items-center justify-center gap-5 px-5 py-2.5 rounded-full bg-zinc-900/90 backdrop-blur-xl border border-zinc-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
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
                className={`flex items-center justify-center transition-colors bg-transparent border-0 cursor-pointer p-1 rounded-full ${
                  isActive ? 'text-orange-500' : 'text-zinc-400 hover:text-orange-500'
                }`}
              >
                <Icon size={19} />
              </button>
            );
          })}

          <div className="h-4 w-[1px] bg-zinc-700/60" aria-hidden="true" />

          <button
            type="button"
            onClick={toggleLanguage}
            className="text-xs font-semibold text-zinc-300 hover:text-orange-500 transition-colors bg-transparent border-0 cursor-pointer flex items-center gap-1"
            title={isEn ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
          >
            <span className={!isEn ? 'text-orange-500 font-bold' : 'text-zinc-400'}>ID</span>
            <span className="text-zinc-600 text-[10px]">/</span>
            <span className={isEn ? 'text-orange-500 font-bold' : 'text-zinc-400'}>EN</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center justify-center text-zinc-400 hover:text-orange-500 transition-colors bg-transparent border-0 cursor-pointer p-1"
            title={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>
        </div>
      </nav>
    </>
  );
}
