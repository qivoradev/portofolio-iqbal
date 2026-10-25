import React, { useState, useEffect } from 'react';

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
      issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
      qualification: isEn
        ? 'Indonesian National Occupational Competency Standards (SKKNI)'
        : 'Standar Kompetensi Kerja Nasional Indonesia (SKKNI)',
      code: 'BNSP · SKKNI STANDARD 2026',
      image: '/certificates/web-developer.webp',
    },
    {
      id: 'certiport-ai',
      title: 'Information Technology Specialist - Artificial Intelligence',
      issuer: 'Certiport (Pearson VUE Authorized Testing Center)',
      qualification: 'Foundational AI & Machine Learning Problem Solving',
      code: 'CERTIPORT · ITS-AI · GLOBAL STANDARD',
      image: '/certificates/ai-certiport.webp',
    },
  ];

  return (
    <section id="credentials" className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/80 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 mb-10 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold block mb-1">
              STANDARDS & ACCREDITATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {isEn ? 'Verified Credentials' : 'Sertifikasi Kompetensi'}
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
            2 Licensed Credentials
          </span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              role="button"
              tabIndex={0}
              onClick={() => setActiveCert(cert)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveCert(cert)}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 p-6 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                    VERIFIED
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">
                    {cert.code}
                  </span>
                </div>

                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1">
                  {cert.issuer}
                </p>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                  {cert.qualification}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
                <span>{isEn ? 'View Credential Document ↗' : 'Lihat Dokumen Sertifikat ↗'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Modal */}
        {activeCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveCert(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl max-h-[85vh] flex flex-col bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden my-auto border border-zinc-200 dark:border-zinc-800 shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                    {activeCert.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                    {activeCert.issuer}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  aria-label="Tutup"
                  className="text-xs font-mono text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer border-0 bg-transparent"
                >
                  ESC ✕
                </button>
              </div>

              <div className="overflow-y-auto p-4 flex items-center justify-center bg-zinc-100 dark:bg-zinc-950">
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
