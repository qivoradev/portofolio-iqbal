import React, { useState, useEffect } from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function AppContent() {
  const { language } = usePortfolio();
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem('portfolio_visited');
  });
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              sessionStorage.setItem('portfolio_visited', 'true');
              setIsLoading(false);
            }, 500);
          }, 200);
          return 100;
        }
        return prev + 1;
      });
    }, 18);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <>
      {/* ALUR UTAMA: Single Page Flow */}
      <main className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100 selection:bg-amber-500/20 selection:text-amber-500 transition-colors duration-200 pb-28">
        <Navbar language={language} />
        <section id="home">
          <Hero language={language} />
        </section>
        <section id="about" className="py-16 border-t border-zinc-200 dark:border-zinc-800/80">
          <About language={language} />
        </section>
        <section id="projects">
          <Projects language={language} />
        </section>
        <section id="credentials">
          <Certifications language={language} />
        </section>
        <section id="contact">
          <Contact language={language} />
        </section>
        <Footer />
      </main>

      {/* Full-screen Terminal Preloader */}
      {isLoading && (
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-500 ease-in-out ${
            isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <LoadingScreen progress={progress} />
        </div>
      )}
    </>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <PortfolioProvider theme={theme} toggleTheme={toggleTheme}>
      <AppContent />
    </PortfolioProvider>
  );
}
