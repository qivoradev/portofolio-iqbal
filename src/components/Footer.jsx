import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { language, t, portfolioData } = usePortfolio();

  return (
    <footer className="pt-8 pb-12 text-center text-xs text-zinc-500 font-mono">
      © {CURRENT_YEAR} {portfolioData?.name || 'Iqbal Dwi Fathonah'}. {t?.footer?.copyright || (language === 'en' ? 'All Rights Reserved.' : 'Hak Cipta Dilindungi.')}
    </footer>
  );
}
