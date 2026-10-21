import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  // 1. Language State ('id' | 'en') dengan localStorage try/catch, default 'id'
  const [language, setLanguageState] = useState(() => {
    try {
      const savedLang = localStorage.getItem('portfolio_lang');
      if (savedLang === 'id' || savedLang === 'en') {
        return savedLang;
      }
    } catch {
      // Fallback default
    }
    return 'id';
  });

  // 2. Theme State ('dark' | 'light') dengan localStorage try/catch, default 'light'
  const [theme, setThemeState] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('portfolio_theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
    } catch {
      // Fallback default
    }
    return 'light'; // Default TERANG bila belum ada pilihan tersimpan
  });

  // Sinkronisasi atribut lang pada <html>
  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    try {
      localStorage.setItem('portfolio_lang', language);
    } catch {
      // Ignore storage error
    }
  }, [language]);

  // Sinkronisasi atribut data-theme pada <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('portfolio_theme', theme);
    } catch {
      // Ignore storage error
    }
  }, [theme]);

  const setLanguage = (lang) => {
    if (lang === 'id' || lang === 'en') {
      setLanguageState(lang);
    }
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const t = portfolioData.translations[language] || portfolioData.translations.id;

  return (
    <PortfolioContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        theme,
        toggleTheme,
        t,
        portfolioData,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
