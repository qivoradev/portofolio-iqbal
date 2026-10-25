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
    <section id="credentials" className="py-20 sm:py-28 bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-white border-t border-zinc-200 dark:border-zinc-800/80 transition-colors scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 font-bold block mb-2">
              Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              {isEn ? 'Verified Accreditations' : 'Sertifikasi Kompetensi'}
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500 uppercase">
            2 Licensed Credentials
          </span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              role="button"
              tabIndex={0}
              onClick={() => setActiveCert(cert)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveCert(cert)}
              className="p-7 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                    VERIFIED
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                    {cert.code}
                  </span>
                </div>

                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5">
                  {cert.issuer}
                </p>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                  {cert.qualification}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  {isEn ? 'View Credential Document →' : 'Lihat Dokumen Sertifikat →'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Modal */}
        {activeCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveCert(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl max-h-[85vh] flex flex-col bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden my-auto border border-zinc-200 dark:border-zinc-800 shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
                <div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white">
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
                  className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="overflow-y-auto p-6 flex items-center justify-center bg-zinc-100 dark:bg-zinc-950">
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
