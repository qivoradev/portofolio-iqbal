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
    <section id="credentials" className="py-16 sm:py-24 border-t border-zinc-200 dark:border-zinc-800/80 scroll-mt-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* macOS Window for Credentials */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-xl overflow-hidden">
          
          {/* Window Topbar */}
          <div className="px-4 py-2.5 bg-zinc-100/90 dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
              <span className="ml-2 font-mono text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                credentials_manager — verified_certifications
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
              ● 2 LICENSED CREDENTIALS
            </span>
          </div>

          {/* Window Content */}
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 uppercase font-semibold block mb-1">
                STANDARDS & ACCREDITATIONS
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {isEn ? 'Industry Certifications' : 'Sertifikasi Kompetensi'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveCert(cert)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveCert(cert)}
                  className="rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 p-5 flex flex-col justify-between hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all cursor-pointer group"
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
                    <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2 leading-snug group-hover:text-emerald-500 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {cert.qualification}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
                    <span>{isEn ? 'View Credential Document ↗' : 'Lihat Dokumen Sertifikat ↗'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Lightbox Modal */}
        {activeCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md"
            onClick={() => setActiveCert(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl max-h-[85vh] flex flex-col bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden my-auto border border-zinc-200 dark:border-zinc-800 shadow-2xl"
            >
              {/* Header Modal with macOS controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-100 dark:bg-zinc-800/80 border-b border-zinc-200 dark:border-zinc-700">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveCert(null)}
                    aria-label="Tutup"
                    className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 cursor-pointer p-0"
                  />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
                  <span className="ml-2 font-mono text-xs text-zinc-600 dark:text-zinc-300 font-medium truncate max-w-[280px]">
                    {activeCert.title}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  aria-label="Tutup"
                  className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-white px-2 py-0.5 rounded cursor-pointer border-0 bg-transparent"
                >
                  ESC ✕
                </button>
              </div>

              {/* Gambar Sertifikat */}
              <div className="overflow-y-auto p-4 flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg border border-zinc-200 dark:border-zinc-800 shadow"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
