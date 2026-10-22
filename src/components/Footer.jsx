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
    <footer className="site-footer">
      <div className="container">
        <div className="footer-container flex flex-col items-center justify-center gap-4 py-8">
          {/* Tombol Back to Top Kapsul Minimalis */}
          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top-btn inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/60 text-xs font-medium transition-all duration-300 group cursor-pointer"
            title={t.footer?.backToTop || (language === 'en' ? 'Back to Top' : 'Ke Atas')}
            aria-label={t.footer?.backToTop || (language === 'en' ? 'Back to Top' : 'Ke Atas')}
          >
            <span>{t.footer?.backToTop || (language === 'en' ? 'Back to Top' : 'Ke Atas')}</span>
            <ArrowUp
              size={14}
              className="back-to-top-icon group-hover:-translate-y-1 transition-transform duration-300"
              aria-hidden="true"
            />
          </button>

          {/* Teks Hak Cipta */}
          <p className="footer-copyright-text text-center text-xs text-zinc-500 pb-8 m-0">
            © {CURRENT_YEAR} {portfolioData?.name || 'Iqbal Dwi Fathonah'}. {t.footer?.copyright || (language === 'en' ? 'All Rights Reserved.' : 'Hak Cipta Dilindungi.')}
          </p>
        </div>
      </div>
    </footer>
  );
}

