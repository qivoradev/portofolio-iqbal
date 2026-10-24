import React, { useState, useEffect } from 'react';
import { CloseIcon } from './Icons';

export default function Certifications({ language = 'id' } = {}) {
  const isEn = language === 'en';
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    if (!activeCert) return;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => e.key === 'Escape' && setActiveCert(null);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCert]);

  const certificates = [
    {
      id: 'bnsp-web-dev',
      title: 'Junior Web Developer',
      issuer: 'BADAN NASIONAL SERTIFIKASI PROFESI (BNSP)',
      sub: 'Standar Kompetensi Kerja Nasional Indonesia (SKKNI)',
      badge: 'VERIFIED',
      icon: '✓',
      iconBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500',
      image: '/certificates/web-developer.webp',
    },
    {
      id: 'certiport-ai',
      title: 'Information Technology Specialist - AI',
      issuer: 'CERTIPORT (PEARSON VUE)',
      sub: 'Artificial Intelligence & Foundational Machine Learning',
      badge: 'VERIFIED',
      icon: '⚡',
      iconBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
      image: '/certificates/ai-certiport.webp',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      {/* 1. Header Seksi yang Bersih */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-1 uppercase">
          {isEn ? 'CREDENTIALS' : 'KREDENSIAL'}
        </h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          {isEn
            ? 'Industry certifications verified by national & global standards'
            : 'Sertifikasi industri terverifikasi standar nasional & global'}
        </p>
      </div>

      {/* 2. Grid 2 Kolom untuk Sertifikat BNSP dan CERTIPORT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
        {/* Kartu 1: BNSP */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setActiveCert(certificates[0])}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveCert(certificates[0])}
          className="p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 relative flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer group shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold">
              ✓
            </div>
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              VERIFIED
            </span>
          </div>
          <div>
            <p className="text-[10px] font-mono tracking-wider uppercase text-zinc-400 mb-1">
              ISSUING ORG: BADAN NASIONAL SERTIFIKASI PROFESI (BNSP)
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-emerald-500 transition-colors">
              Junior Web Developer
            </h3>
            <p className="text-xs text-zinc-500">Standar Kompetensi Kerja Nasional Indonesia (SKKNI)</p>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
            <span>{isEn ? 'View Credential Document' : 'Lihat Dokumen Sertifikat'}</span>
            <span>↗</span>
          </div>
        </div>

        {/* Kartu 2: CERTIPORT */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setActiveCert(certificates[1])}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveCert(certificates[1])}
          className="p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 relative flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer group shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
              ⚡
            </div>
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              VERIFIED
            </span>
          </div>
          <div>
            <p className="text-[10px] font-mono tracking-wider uppercase text-zinc-400 mb-1">
              ISSUING ORG: CERTIPORT (PEARSON VUE)
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-indigo-400 transition-colors">
              Information Technology Specialist - AI
            </h3>
            <p className="text-xs text-zinc-500">Artificial Intelligence & Foundational Machine Learning</p>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
            <span>{isEn ? 'View Credential Document' : 'Lihat Dokumen Sertifikat'}</span>
            <span>↗</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-3xl rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-2xl relative text-zinc-900 dark:text-zinc-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800 mb-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                  {activeCert.title}
                </h3>
                <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">
                  {activeCert.issuer}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors cursor-pointer border-0"
                aria-label="Tutup"
              >
                <CloseIcon size={16} />
              </button>
            </div>

            <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 flex items-center justify-center">
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
