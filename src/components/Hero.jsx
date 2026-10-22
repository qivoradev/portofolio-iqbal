import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';

export default function Hero({ language: propLanguage, setActiveTab: propSetActiveTab } = {}) {
  const portfolio = usePortfolio();
  const language = propLanguage || portfolio.language || 'id';
  const setActiveTab = propSetActiveTab || portfolio.setActiveTab;
  const { contacts, photo, name } = portfolio.portfolioData || {};

  const [imgSrc, setImgSrc] = useState(photo || '/foto-nobg.png');
  const [isFallback, setIsFallback] = useState(false);

  const handleImgError = () => {
    if (!isFallback) {
      setImgSrc('/foto.jpg');
      setIsFallback(true);
    }
  };

  const socials = [
    { key: 'github', label: 'GitHub', url: contacts?.github || 'https://github.com', Icon: SiGithub },
    { key: 'linkedin', label: 'LinkedIn', url: contacts?.linkedin || 'https://linkedin.com', Icon: FaLinkedin },
    { key: 'instagram', label: 'Instagram', url: contacts?.instagram || 'https://instagram.com', Icon: SiInstagram },
  ].filter((s) => s.url && typeof s.url === 'string' && !s.url.startsWith('['));

  return (
    <section className="w-full flex items-center justify-center py-2">
      <div className="w-full max-w-2xl mx-auto rounded-3xl bg-zinc-900/60 border border-zinc-800/80 p-6 sm:p-10 backdrop-blur-md flex flex-col items-center text-center shadow-2xl">
        
        {/* Lingkaran Foto Estetik (Bulat dengan Background Berwarna) */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 p-2 flex items-center justify-center overflow-hidden mx-auto mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
          <img
            src={imgSrc}
            alt={name || 'Iqbal Dwi Fathonah'}
            className="w-full h-full object-contain object-bottom rounded-full"
            onError={handleImgError}
          />
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{language === 'en' ? 'Available for Work' : 'Terbuka untuk Peluang Kerja'}</span>
        </div>

        {/* Teks Profil */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
          {name || 'Iqbal Dwi Fathonah'}
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold text-orange-500 mb-4">
          Data Analyst
        </h2>

        {/* Ikon Sosial Media: Deretan ikon (GitHub, LinkedIn, Instagram) horizontal */}
        {socials.length > 0 && (
          <div className="flex items-center justify-center gap-4 text-zinc-400 mb-5">
            {socials.map(({ key, label, url, Icon }) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors p-2 rounded-lg hover:bg-zinc-800/60"
                aria-label={label}
                title={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        )}

        {/* Bio Singkat */}
        <p className="text-zinc-400 text-sm leading-relaxed max-w-lg mb-6">
          {language === 'en'
            ? 'Data Analyst with an Information Technology background, focused on turning complex data into interactive dashboards and actionable insights. Proficient in Excel and SQL to support strategic business decisions.'
            : 'Data Analyst berlatar belakang Teknologi Informasi yang berfokus menerjemahkan data kompleks menjadi dashboard interaktif dan insight bisnis yang strategis.'}
        </p>

        {/* Single CTA Button */}
        <button
          type="button"
          onClick={() => setActiveTab && setActiveTab('projects')}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm transition-all shadow-lg shadow-orange-500/20 cursor-pointer"
        >
          <span>{language === 'en' ? 'View Projects' : 'Lihat Proyek'}</span>
          <span>&rarr;</span>
        </button>

      </div>
    </section>
  );
}
