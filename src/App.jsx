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
            }, 400);
          }, 150);
          return 100;
        }
        return prev + 1;
      });
    }, 18);

    return () => clearInterval(interval);
  }, [isLoading]);

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const checkScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <>
      {/* ALUR UTAMA: Single Page Flow */}
      <main className="w-full max-w-full overflow-x-hidden min-h-screen bg-[#0a0a0d] text-white transition-colors duration-200">
        <Navbar language={language} />
        <Hero language={language} />
        <Projects language={language} />
        <About language={language} />
        <section id="credentials" className="scroll-mt-14">
          <Certifications language={language} />
        </section>
        <section id="contact" className="scroll-mt-14">
          <Contact language={language} />
        </section>
        <Footer />
      </main>

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Kembali ke Atas"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white/90 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 shadow-xl hover:border-emerald-500 hover:text-emerald-500 transition-all cursor-pointer backdrop-blur-md"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Full-screen Terminal Preloader */}
      {isLoading && (
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-400 ease-in-out ${
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
