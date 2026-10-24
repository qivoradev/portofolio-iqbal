import React, { useState, useEffect, useRef, Component } from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';

/**
 * Pengaman Error Boundary untuk mencegah blank screen total jika salah satu tab mengalami unhandled runtime error
 */
class TabErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Tab render error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[300px] text-center p-6 text-zinc-700 dark:text-zinc-300 font-mono">
          <p className="text-base font-semibold mb-3">Terjadi kendala saat memuat konsol.</p>
          <button
            type="button"
            onClick={() => {
              this.setState({ hasError: false });
              window.location.reload();
            }}
            className="px-4 py-2 rounded-xl bg-orange-500 text-white text-xs font-semibold hover:bg-orange-600 transition-colors cursor-pointer"
          >
            Muat Ulang Halaman
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function AppContent({ activeTab, setActiveTab }) {
  const { language, toggleLanguage, theme, toggleTheme } = usePortfolio();
  const [isLoading, setIsLoading] = useState(() => {
    // Cek apakah web sudah pernah dimuat di sesi tab ini
    return !sessionStorage.getItem('portfolio_visited');
  });
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const scrollRef = useRef(null);

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

  // Otomatis reset posisi scroll ke atas saat berganti tab
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [activeTab]);

  return (
    <>
      <div className="min-h-screen w-full bg-zinc-50 text-zinc-900 dark:bg-[#09090b] dark:text-zinc-100 flex flex-col justify-between items-center px-4 pt-8 md:pt-20 pb-24 md:pb-12 relative transition-colors duration-200">
        {/* Floating Capsule Navbar */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} language={language} />

        {/* Area Konten Tab di Tengah */}
        <main className="w-full max-w-5xl flex-1 flex flex-col justify-center items-center py-2" id="main-content">
          <TabErrorBoundary>
            <div ref={scrollRef} key={activeTab} className="w-full flex-1 flex flex-col items-center justify-center">
              {activeTab === 'home' && (
                <Hero
                  language={language}
                  setActiveTab={setActiveTab}
                  toggleLanguage={toggleLanguage}
                  theme={theme}
                  toggleTheme={toggleTheme}
                />
              )}
              {activeTab === 'projects' && <Projects language={language} setActiveTab={setActiveTab} />}
              {activeTab === 'certifications' && <Certifications language={language} setActiveTab={setActiveTab} />}
              {activeTab === 'contact' && <Contact language={language} setActiveTab={setActiveTab} />}

              {/* Fallback pengaman jika state tidak sengaja kosong/salah */}
              {!['home', 'projects', 'certifications', 'contact'].includes(activeTab) && (
                <Hero
                  language={language}
                  setActiveTab={setActiveTab}
                  toggleLanguage={toggleLanguage}
                  theme={theme}
                  toggleTheme={toggleTheme}
                />
              )}
            </div>
          </TabErrorBoundary>
        </main>

        {/* Footer Hak Cipta */}
        <footer className="py-2 text-center text-[11px] font-mono text-zinc-500 dark:text-zinc-500">
          © 2026 Iqbal Dwi Fathonah. All Rights Reserved.
        </footer>
      </div>

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
  const [activeTab, setActiveTab] = useState('home');

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
    <PortfolioProvider
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      theme={theme}
      toggleTheme={toggleTheme}
    >
      <AppContent activeTab={activeTab} setActiveTab={setActiveTab} />
    </PortfolioProvider>
  );
}
