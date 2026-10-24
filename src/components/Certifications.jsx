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
      title: 'Web Developer',
      issuer: isEn
        ? 'National Professional Certification Agency (BNSP) via Licensed LSP'
        : 'Badan Nasional Sertifikasi Profesi (BNSP) melalui LSP Terlisensi',
      qualification: isEn
        ? 'Indonesian National Occupational Competency Standards (SKKNI)'
        : 'Standar Kompetensi Kerja Nasional Indonesia (SKKNI)',
      code: 'SKKNI • 2026',
      image: '/certificates/web-developer.webp',
    },
    {
      id: 'certiport-ai',
      title: 'Information Technology Specialist - Artificial Intelligence',
      issuer: 'Certiport (Pearson VUE Authorized Testing Center)',
      qualification: 'Foundational AI & Machine Learning Problem Solving',
      code: 'ITS-AI • GLOBAL',
      image: '/certificates/ai-certiport.webp',
    },
  ];

  return (
    <div className="w-full py-8">
      {/* 1. Header Section */}
      <div className="max-w-4xl mx-auto px-4 mt-8 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
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

      {/* 2. Grid 2 Kolom Kredensial */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto px-4">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            role="button"
            tabIndex={0}
            onClick={() => setActiveCert(cert)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveCert(cert)}
            className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm transition-all flex flex-col justify-between group cursor-pointer"
          >
            {/* Bagian Atas */}
            <div className="flex items-center justify-between mb-4">
              <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-mono px-2.5 py-0.5 rounded-full font-semibold">
                VERIFIED
              </span>
              <span className="text-[11px] font-mono text-zinc-400">
                {cert.code}
              </span>
            </div>

            {/* Bagian Tengah (Nama Sertifikasi) */}
            <div className="my-2">
              <p className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 mb-1.5 leading-snug">
                {cert.issuer}
              </p>
              <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-snug group-hover:text-amber-500 transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                {cert.qualification}
              </p>
            </div>

            {/* Bagian Bawah */}
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors">
              <span>{isEn ? 'Verify Credential ↗' : 'Verifikasi Sertifikat ↗'}</span>
            </div>
          </div>
        ))}
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
