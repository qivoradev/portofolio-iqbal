import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUp } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { language, t, portfolioData } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-zinc-200/80 dark:border-zinc-800/80 py-8 bg-zinc-50 dark:bg-[#09090b] transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center gap-4">
        {/* Tombol Back to Top Kapsul Minimalis */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 text-xs font-medium transition-all duration-300 group cursor-pointer shadow-sm active:scale-95"
          title={t?.footer?.backToTop || (language === 'en' ? 'Back to Top' : 'Ke Atas')}
          aria-label={t?.footer?.backToTop || (language === 'en' ? 'Back to Top' : 'Ke Atas')}
        >
          <span>{t?.footer?.backToTop || (language === 'en' ? 'Back to Top' : 'Ke Atas')}</span>
          <ArrowUp
            size={14}
            className="group-hover:-translate-y-1 transition-transform duration-300"
            aria-hidden="true"
          />
        </button>

        {/* Teks Hak Cipta */}
        <p className="text-center text-xs font-mono text-zinc-500 pb-20 md:pb-4 m-0">
          © {CURRENT_YEAR} {portfolioData?.name || 'Iqbal Dwi Fathonah'}. {t?.footer?.copyright || (language === 'en' ? 'All Rights Reserved.' : 'Hak Cipta Dilindungi.')}
        </p>
      </div>
    </footer>
  );
}
