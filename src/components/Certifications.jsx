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
      org: 'BADAN NASIONAL SERTIFIKASI PROFESI (BNSP)',
      sub: isEn
        ? 'Indonesian National Occupational Competency Standards (SKKNI)'
        : 'Standar Kompetensi Kerja Nasional Indonesia (SKKNI)',
      badge: 'VERIFIED',
      icon: '✓',
      iconColor: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400',
      image: '/certificates/web-developer.webp',
    },
    {
      id: 'certiport-ai',
      title: 'Information Technology Specialist - Artificial Intelligence',
      org: 'CERTIPORT (PEARSON VUE)',
      sub: isEn
        ? 'AI Concepts & Machine Learning Foundations'
        : 'Konsep Dasar AI & Fondasi Machine Learning',
      badge: 'VERIFIED',
      icon: '⚡',
      iconColor: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400',
      image: '/certificates/ai-certiport.webp',
    },
  ];

  return (
    <div className="w-full py-6">
      {/* 1. Header Section: Teks judul di luar kartu dengan border bawah */}
      <div className="max-w-4xl mx-auto px-4 mt-16 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white uppercase">
            {isEn ? 'CREDENTIALS' : 'KREDENSIAL'}
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            {isEn
              ? 'National & global competency standardizations verified by accredited bodies.'
              : 'Standarisasi kompetensi nasional & global yang terverifikasi.'}
          </p>
        </div>
      </div>

      {/* 2. Kartu Horizontal Ramping (Horizontal Dossier) */}
      <div className="space-y-3.5 max-w-4xl mx-auto px-4">
        {/* BNSP Card */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setActiveCert(certificates[0])}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveCert(certificates[0])}
          className="p-4 sm:p-5 rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-pointer group"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
              ✓
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
                BADAN NASIONAL SERTIFIKASI PROFESI (BNSP)
              </p>
              <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Junior Web Developer
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {certificates[0].sub}
              </p>
            </div>
          </div>
          <span className="self-start sm:self-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            VERIFIED
          </span>
        </div>

        {/* CERTIPORT Card */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setActiveCert(certificates[1])}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveCert(certificates[1])}
          className="p-4 sm:p-5 rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-pointer group"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
              ⚡
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
                CERTIPORT (PEARSON VUE)
              </p>
              <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Information Technology Specialist - Artificial Intelligence
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {certificates[1].sub}
              </p>
            </div>
          </div>
          <span className="self-start sm:self-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            VERIFIED
          </span>
        </div>
      </div>

      {/* Lightbox Modal (Jika pengguna ingin melihat detail dokumen sertifikat) */}
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
                  {activeCert.org}
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
