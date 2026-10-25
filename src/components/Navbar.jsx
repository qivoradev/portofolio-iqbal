import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Navbar({ language: propLanguage } = {}) {
  const portfolio = usePortfolio();
  const language = propLanguage || portfolio.language || 'id';
  const { toggleLanguage, theme, toggleTheme } = portfolio;
  const isEn = language === 'en';
  const darkMode = theme === 'dark';

  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sectionIds = ['home', 'projects', 'about', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto max-w-2xl select-none">
      <div className="px-3 sm:px-4 py-2 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-lg flex items-center justify-between sm:gap-4 text-xs font-medium">
        
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
          className="flex items-center gap-1.5 font-bold font-mono text-zinc-900 dark:text-white px-2 hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-lime-500 dark:bg-lime-400 animate-pulse" />
          <span>Iqbal</span>
        </a>

        {/* Nav Links: Di Mobile cukup tampilkan Proyek & Kontak */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('projects');
            }}
            className={`px-2.5 py-1 rounded-full transition-colors ${
              activeSection === 'projects'
                ? 'bg-lime-400 text-black font-bold'
                : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            {isEn ? 'Projects' : 'Proyek'}
          </a>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('about');
            }}
            className={`hidden sm:inline-block px-2.5 py-1 rounded-full transition-colors ${
              activeSection === 'about'
                ? 'bg-lime-400 text-black font-bold'
                : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            {isEn ? 'Capabilities' : 'Kemampuan'}
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contact');
            }}
            className={`px-2.5 py-1 rounded-full transition-colors ${
              activeSection === 'contact'
                ? 'bg-lime-400 text-black font-bold'
                : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            {isEn ? 'Contact' : 'Kontak'}
          </a>
        </div>

        {/* Toggles (Theme & Lang) */}
        <div className="flex items-center gap-1.5 pl-2 border-l border-zinc-200 dark:border-zinc-800">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer border-0 bg-transparent text-sm leading-none"
            aria-label="Toggle Theme"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer border-0"
            title={isEn ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
          >
            {language === 'en' ? 'ID' : 'EN'}
          </button>
        </div>

      </div>
    </nav>
  );
}
