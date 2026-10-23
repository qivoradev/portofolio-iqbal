import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const PortfolioContext = createContext();

export function PortfolioProvider({
  children,
  activeTab: propActiveTab,
  setActiveTab: propSetActiveTab,
  theme: propTheme,
  toggleTheme: propToggleTheme,
}) {
  const [internalActiveTab, setInternalActiveTab] = useState('home');
  const activeTab = propActiveTab !== undefined ? propActiveTab : internalActiveTab;
  const setActiveTab = propSetActiveTab !== undefined ? propSetActiveTab : setInternalActiveTab;

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

  // 2. Theme State ('dark' | 'light') dengan localStorage try/catch, default 'dark'
  const [internalTheme, setInternalThemeState] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('portfolio_theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
    } catch {
      // Fallback default
    }
    return 'dark'; // Default DARK
  });

  const theme = propTheme !== undefined ? propTheme : internalTheme;

  // Sinkronisasi atribut lang pada <html>
  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    try {
      localStorage.setItem('portfolio_lang', language);
    } catch {
      // Ignore storage error
    }
  }, [language]);

  // Sinkronisasi class dark dan atribut data-theme pada <html>
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.backgroundColor = '#09090b';
      root.style.color = '#F2F0EB';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#fafafa';
      root.style.color = '#18181b';
    }
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
    if (propToggleTheme) {
      propToggleTheme();
    } else {
      setInternalThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }
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
        activeTab,
        setActiveTab,
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
