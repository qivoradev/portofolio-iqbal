import React, { useState, useEffect, useRef, Component } from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const CURRENT_YEAR = new Date().getFullYear();

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
        <div className="flex flex-col items-center justify-center min-h-[300px] text-center p-6 text-zinc-300">
          <p className="text-base font-semibold mb-3">Terjadi kendala saat memuat konten.</p>
          <button
            type="button"
            onClick={() => {
              this.setState({ hasError: false });
              window.location.reload();
            }}
            className="px-4 py-2 rounded-full bg-orange-500 text-white text-xs font-semibold hover:bg-orange-600 transition-colors cursor-pointer"
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
  const { language } = usePortfolio();
  const scrollRef = useRef(null);

  // Otomatis reset posisi scroll ke atas saat berganti tab
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen w-full bg-[#09090b] text-zinc-100 flex flex-col justify-between items-center px-4 pt-24 pb-24 md:pb-10 relative">
      {/* Floating Capsule di Desktop & Floating Dock di Mobile */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} language={language} />

      {/* Area Konten Tab di Tengah */}
      <main className="w-full max-w-3xl flex-1 flex flex-col justify-center items-center py-4" id="main-content">
        <TabErrorBoundary>
          <div ref={scrollRef} key={activeTab} className="w-full flex-1 flex flex-col items-center justify-center">
            {activeTab === 'home' && <Hero language={language} setActiveTab={setActiveTab} />}
            {activeTab === 'projects' && <Projects language={language} />}
            {activeTab === 'certifications' && <Certifications language={language} />}
            {activeTab === 'contact' && <Contact language={language} />}

            {/* Fallback pengaman jika state tidak sengaja kosong/salah */}
            {!['home', 'projects', 'certifications', 'contact'].includes(activeTab) && (
              <Hero language={language} setActiveTab={setActiveTab} />
            )}
          </div>
        </TabErrorBoundary>
      </main>

      {/* Footer Hak Cipta */}
      <footer className="py-4 text-center text-xs text-zinc-600 tracking-wider">
        © {CURRENT_YEAR} Iqbal Dwi Fathonah. All Rights Reserved.
      </footer>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <PortfolioProvider activeTab={activeTab} setActiveTab={setActiveTab}>
      <AppContent activeTab={activeTab} setActiveTab={setActiveTab} />
    </PortfolioProvider>
  );
}
