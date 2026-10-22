import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Home, BarChart3, Award, Mail, Sun, Moon } from 'lucide-react';

export default function Navbar({ activeTab: propActiveTab, setActiveTab: propSetActiveTab, language: propLanguage } = {}) {
  const portfolio = usePortfolio();
  const activeTab = propActiveTab || portfolio.activeTab || 'home';
  const setActiveTab = propSetActiveTab || portfolio.setActiveTab;
  const language = propLanguage || portfolio.language || 'id';
  const { toggleLanguage, theme, toggleTheme } = portfolio;

  const navItems = [
    { id: 'home', label: language === 'en' ? 'Home' : 'Beranda', Icon: Home },
    { id: 'projects', label: language === 'en' ? 'Projects' : 'Proyek', Icon: BarChart3 },
    { id: 'certifications', label: language === 'en' ? 'Certifications' : 'Sertifikasi', Icon: Award },
    { id: 'contact', label: language === 'en' ? 'Contact' : 'Kontak', Icon: Mail },
  ];

  return (
    <>
      {/* 1. Navbar Desktop (Melayang rapi, hanya tampil di desktop: hidden md:flex) */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center justify-between px-6 py-2.5 rounded-full bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 shadow-2xl min-w-[560px] max-w-2xl">
        {/* Sisi Kiri (Logo) */}
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

        {/* Menu Tengah: container dengan gap-6 dan border kiri-kanan */}
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
            className="text-xs font-medium text-zinc-400 hover:text-white bg-transparent border-0 px-2 py-1 cursor-pointer transition-colors"
            title={language === 'en' ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
          >
            {language === 'en' ? 'EN' : 'ID'}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="text-zinc-400 hover:text-white bg-transparent border-0 cursor-pointer p-1.5 rounded-full flex items-center justify-center transition-colors"
            title={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </header>

      {/* 2. Floating Dock Mobile (Hanya tampil di mobile: md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50) */}
      <nav
        className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center"
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
                className={`flex items-center justify-center transition-colors bg-transparent border-0 cursor-pointer ${
                  isActive ? 'text-orange-500' : 'text-zinc-400 hover:text-orange-500'
                }`}
              >
                <Icon className="w-5 h-5" size={20} aria-hidden="true" />
              </button>
            );
          })}

          <div className="h-4 w-[1px] bg-zinc-700/60" aria-hidden="true" />

          <button
            type="button"
            onClick={toggleLanguage}
            className="text-xs font-semibold text-zinc-300 hover:text-orange-500 transition-colors bg-transparent border-0 cursor-pointer flex items-center gap-1"
            title={language === 'en' ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
          >
            <span className={language === 'id' ? 'text-orange-500 font-bold' : 'text-zinc-400'}>ID</span>
            <span className="text-zinc-600 text-[10px]">/</span>
            <span className={language === 'en' ? 'text-orange-500 font-bold' : 'text-zinc-400'}>EN</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center justify-center text-zinc-400 hover:text-orange-500 transition-colors bg-transparent border-0 cursor-pointer"
            title={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" size={20} /> : <Moon className="w-5 h-5" size={20} />}
          </button>
        </div>
      </nav>
    </>
  );
}
