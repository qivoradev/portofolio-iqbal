import React, { useState } from 'react';
import {
  AwardIcon,
  CheckIcon,
  MaximizeIcon,
  CloseIcon,
} from './Icons';

export default function Certifications({ language = 'en' } = {}) {
  const isEn = language === 'en';
  const [activeCert, setActiveCert] = useState(null);

  const certificates = [
    {
      id: 'bnsp-web-dev',
      title: 'Web Developer',
      issuer: 'BNSP (Badan Nasional Sertifikasi Profesi)',
      badge: 'BNSP',
      status: 'Certified & Valid',
      description: isEn
        ? 'National competency standardization covering full web software engineering, interface logic, and modern frontend-backend integration.'
        : 'Standarisasi kompetensi rekayasa perangkat lunak dan arsitektur web modern yang tervalidasi secara nasional.',
      image: '/certificates/web-developer.webp',
      accentColor: 'text-orange-600 dark:text-orange-400 border-orange-500/30 bg-orange-500/10',
    },
    {
      id: 'certiport-ai',
      title: 'Information Technology Specialist: Artificial Intelligence',
      issuer: 'Certiport (Pearson VUE Business)',
      badge: 'CERTIPORT',
      status: 'Certified & Valid',
      description: isEn
        ? 'International validation of core machine learning concepts, AI algorithm logic, neural architectures, and intelligent data computation.'
        : 'Validasi internasional untuk konsep dasar machine learning, logika AI, komputasi cerdas, dan analisis data prediktif.',
      image: '/certificates/ai-certiport.webp',
      accentColor: 'text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto my-auto py-2">
      {/* Jendela Konsol Luar */}
      <div className="w-full max-w-4xl mx-auto rounded-3xl border border-zinc-200 dark:border-zinc-800/90 bg-white/95 dark:bg-zinc-950/80 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col transition-colors duration-300 relative">
        {/* Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* 1. Bar Header Konsol (Traffic Lights & Title) */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900/60 select-none text-zinc-600 dark:text-zinc-400 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-[#eab308]" />
            <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
            <span className="ml-2 font-semibold flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300">
              verified-credentials.json
            </span>
          </div>

          {/* Badge Status Pojok Kanan Atas ("2 SIGNATURES VERIFIED") */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-medium">
            <CheckIcon size={12} />
            <span>2 SIGNATURES VERIFIED</span>
          </div>
        </div>

        {/* 2. Dua Kartu Sertifikat (Grid Item) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/40 p-5 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm"
            >
              <div>
                {/* Preview Thumbnail Sertifikat */}
                <div
                  onClick={() => setActiveCert(cert)}
                  className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 mb-4 cursor-pointer group/img"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveCert(cert);
                    }
                  }}
                  title={isEn ? 'Click to inspect certificate' : 'Klik untuk melihat sertifikat'}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover/img:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 text-white text-xs font-mono border border-zinc-700 shadow-lg">
                      <MaximizeIcon size={13} />
                      {isEn ? 'Inspect Credential' : 'Lihat Sertifikat'}
                    </span>
                  </div>
                </div>

                {/* Issuer Badge & Status */}
                <div className="flex items-center justify-between gap-2 mb-1">
                  {/* Badge Penerbit (BNSP / CERTIPORT) */}
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded border border-zinc-300 dark:border-zinc-700 bg-zinc-200/60 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-bold">
                    {cert.badge}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${cert.accentColor}`}>
                    {cert.status}
                  </span>
                </div>

                {/* Judul Sertifikasi */}
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white mt-3 mb-1 leading-snug">
                  {cert.title}
                </h2>

                {/* Penerbit & Sub-label */}
                <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 mb-2 font-mono">
                  {cert.issuer}
                </p>

                {/* Deskripsi Teks */}
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Tombol Bawah ("Lihat Dokumen Sertifikat") */}
              <button
                type="button"
                onClick={() => setActiveCert(cert)}
                className="w-full py-2.5 px-4 rounded-xl border border-zinc-300 dark:border-zinc-700/80 bg-white dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 text-xs font-medium transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <AwardIcon size={14} />
                <span>{isEn ? 'Verify Credential Document' : 'Lihat Dokumen Sertifikat'}</span>
              </button>
            </div>
          ))}
        </div>

        {/* 3. Footer Konsol Terminal */}
        <div className="px-5 py-2.5 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950/90 flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
          <span>KEYSTORE_VERIFIED // 2 CERTIFICATES ACTIVE</span>
          <span>RSA_2048 // SHA-256</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-3xl rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 shadow-2xl relative text-zinc-900 dark:text-zinc-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800 mb-4">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {activeCert.title}
                </h3>
                <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">
                  {activeCert.issuer}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer transition-colors"
                aria-label="Close"
              >
                <CloseIcon size={18} />
              </button>
            </div>

            <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-black">
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
