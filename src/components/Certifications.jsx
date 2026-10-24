import React, { useState } from 'react';
import {
  AwardIcon,
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
      accentColor: 'text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10',
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
      accentColor: 'text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10',
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto py-6 sm:py-8">
      {/* 1. Header Section Bersih */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
          {isEn ? 'Verified Credentials' : 'Sertifikasi Terverifikasi'}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-2xl leading-relaxed">
          {isEn
            ? 'Professional certifications and national competency standards validated by authorized credentialing bodies.'
            : 'Standar kompetensi profesional dan sertifikasi terverifikasi dari lembaga sertifikasi berwenang.'}
        </p>
      </div>

      {/* 2. Grid Dua Kartu Sertifikat */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white border-zinc-200/90 shadow-sm dark:bg-zinc-900/40 dark:border-zinc-800/80 rounded-2xl border overflow-hidden flex flex-col justify-between group transition-all"
          >
            <div>
              {/* Preview Thumbnail Sertifikat */}
              <div
                onClick={() => setActiveCert(cert)}
                className="relative aspect-[16/10] rounded-xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800/60 m-4 mb-3 cursor-pointer group/img outline-none focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-700 active:outline-none bg-zinc-100 dark:bg-zinc-950"
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

              {/* Konten Card */}
              <div className="px-5 pb-2">
                {/* Issuer Badge & Status */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-700/60 bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-bold">
                    {cert.badge}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border font-medium ${cert.accentColor}`}>
                    {cert.status}
                  </span>
                </div>

                {/* Judul Sertifikasi */}
                <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors mb-1 leading-snug">
                  {cert.title}
                </h2>

                {/* Penerbit & Sub-label */}
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3 font-mono">
                  {cert.issuer}
                </p>

                {/* Deskripsi Teks */}
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>
            </div>

            {/* Tombol Bawah ("Lihat Dokumen Sertifikat") */}
            <div className="p-5 pt-0">
              <button
                type="button"
                onClick={() => setActiveCert(cert)}
                className="w-full py-2.5 rounded-xl border border-zinc-200 bg-zinc-100/80 text-zinc-800 hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.99] group/btn outline-none focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-700 active:outline-none"
              >
                <AwardIcon size={14} />
                <span>{isEn ? 'Verify Credential Document' : 'Lihat Dokumen Sertifikat'}</span>
                <span className="text-zinc-400 dark:text-zinc-500 group-hover/btn:text-zinc-900 dark:group-hover/btn:text-zinc-200 transition-colors">↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          onClick={() => setActiveCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-3xl rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 sm:p-8 shadow-2xl relative text-zinc-900 dark:text-zinc-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800 mb-5">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {activeCert.title}
                </h3>
                <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-1">
                  {activeCert.issuer}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="p-2 rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800 cursor-pointer transition-colors outline-none focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-700 active:outline-none"
                aria-label="Close"
              >
                <CloseIcon size={18} />
              </button>
            </div>

            <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-black">
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
