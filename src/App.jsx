import React, { useState, useEffect } from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function AppContent() {
  const { language } = usePortfolio();
  const [isLoading, setIsLoading] = useState(() => {
    // Cek apakah web sudah pernah dimuat di sesi tab ini
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
      {/* ALUR UTAMA: Single Page Smooth Scroll Terpadu */}
      <main className="min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors duration-200 selection:bg-orange-500/20 selection:text-orange-500">
        <Navbar language={language} />

        <section id="home" className="pt-20 sm:pt-24 pb-8">
          <Hero language={language} />
        </section>

        <section id="projects" className="py-16 border-t border-zinc-200/60 dark:border-zinc-800/60">
          <Projects language={language} />
        </section>

        <section id="credentials" className="py-16 border-t border-zinc-200/60 dark:border-zinc-800/60">
          <Certifications language={language} />
        </section>

        <section id="contact" className="py-16 border-t border-zinc-200/60 dark:border-zinc-800/60 pb-28 md:pb-16">
          <Contact language={language} />
        </section>

        <Footer />
      </main>

      {/* Full-screen Terminal Loading Screen */}
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
