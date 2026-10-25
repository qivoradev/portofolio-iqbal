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
    <section id="credentials" className="py-20 sm:py-28 bg-[#111110] text-[#E8E6DF] scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-12"
          style={{ borderBottom: '0.5px solid #252523' }}
        >
          <div>
            <span
              className="text-[11px] font-mono font-bold tracking-widest text-[#22C55E] uppercase block mb-2"
              style={{ letterSpacing: '0.1em' }}
            >
              [ 03 ] VERIFIED CREDENTIALS
            </span>
            <h2
              className="font-extrabold uppercase text-[#E8E6DF]"
              style={{
                fontSize: 'clamp(32px, 5vw, 52px)',
                letterSpacing: '-0.025em',
                lineHeight: 1.08,
              }}
            >
              CERTIFICATIONS
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#3E3E3B] uppercase tracking-wider">
            2 LICENSED CREDENTIALS
          </span>
        </div>

        {/* 2-Column Grid, Gap 16px */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              role="button"
              tabIndex={0}
              onClick={() => setActiveCert(cert)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveCert(cert)}
              className="rounded-[8px] bg-[#1A1A18] flex flex-col justify-between transition-colors cursor-pointer group"
              style={{
                border: '0.5px solid #2E2E2C',
                padding: '28px',
                transitionDuration: '0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#22C55E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2E2E2C';
              }}
            >
              <div>
                {/* Top Badge & Code */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-[4px] uppercase tracking-wider"
                    style={{
                      backgroundColor: '#0E3D1F',
                      border: '0.5px solid #1A5230',
                      color: '#22C55E',
                    }}
                  >
                    VERIFIED
                  </span>
                  <span className="text-[11px] font-mono text-[#3E3E3B]">
                    {cert.code}
                  </span>
                </div>

                {/* Issuer & Title */}
                <p className="text-xs font-mono text-[#8A8A86] mb-1">
                  {cert.issuer}
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-[#E8E6DF] mb-2 leading-snug group-hover:text-[#22C55E] transition-colors">
                  {cert.title}
                </h3>
                <p
                  className="text-[#8A8A86]"
                  style={{ fontSize: '14px', lineHeight: 1.6 }}
                >
                  {cert.qualification}
                </p>
              </div>

              {/* Bottom Action */}
              <div
                className="pt-4 mt-6 flex items-center justify-between text-xs font-mono text-[#8A8A86] group-hover:text-[#E8E6DF] transition-colors"
                style={{ borderTop: '0.5px solid #252523' }}
              >
                <span>{isEn ? 'View Credential Document ↗' : 'Lihat Dokumen Sertifikat ↗'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm"
            onClick={() => setActiveCert(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl max-h-[85vh] flex flex-col bg-[#1A1A18] rounded-[8px] overflow-hidden my-auto"
              style={{ border: '0.5px solid #2E2E2C' }}
            >
              {/* Header Modal */}
              <div
                className="flex items-center justify-between px-5 py-3.5 bg-[#111110]"
                style={{ borderBottom: '0.5px solid #252523' }}
              >
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#E8E6DF]">
                    {activeCert.title}
                  </h3>
                  <p className="text-xs font-mono text-[#22C55E]">
                    {activeCert.issuer}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  aria-label="Tutup"
                  className="w-7 h-7 rounded-[4px] flex items-center justify-center bg-[#242422] text-[#8A8A86] hover:text-[#E8E6DF] transition-colors cursor-pointer border-0"
                >
                  ✕
                </button>
              </div>

              {/* Gambar Sertifikat */}
              <div className="overflow-y-auto p-4 flex items-center justify-center bg-[#111110]">
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-[4px]"
                  style={{ border: '0.5px solid #252523' }}
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
