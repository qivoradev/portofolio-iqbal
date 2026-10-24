import React from 'react';

export default function Hero({ language = 'id' } = {}) {
  const isEn = language === 'en';

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pt-20 sm:pt-28 pb-14 text-center flex flex-col items-center">
      {/* Foto Profil: Lingkaran Bersih */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full ring-2 ring-zinc-200 dark:ring-zinc-800 shadow-sm mb-4 overflow-hidden bg-zinc-100 dark:bg-zinc-800 select-none">
        <img
          src="/profile.png"
          alt="Iqbal Dwi Fathonah"
          className="w-full h-full object-cover object-[center_18%] scale-[1.6] -translate-y-1.5 select-none pointer-events-none drop-shadow-sm"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/foto-nobg.png';
          }}
        />
      </div>

      {/* Status Pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
        <span>{isEn ? 'Open for Work' : 'Terbuka untuk Kerja'}</span>
      </div>

      {/* Nama & Role */}
      <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-1.5">
        Iqbal Dwi Fathonah
      </h1>
      <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-amber-500 dark:text-amber-400 font-semibold mb-4">
        Data Analyst
      </p>

      {/* Bio */}
      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed mb-6">
        {isEn
          ? '2026 Information Technology Graduate specializing in Data Analytics. Focused on transforming raw operational datasets into interactive Excel dashboards, SQL queries, and actionable business insights.'
          : 'Lulusan Teknologi Informasi (2026) dengan spesialisasi Data Analytics. Berfokus menerjemahkan dataset mentah menjadi dashboard Excel interaktif, pemodelan query SQL, dan insight bisnis yang strategis.'}
      </p>

      {/* Analytical Tech Bar Minimalis (Garis tipis tanpa kartu) */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 border-y border-zinc-200 dark:border-zinc-800/80 py-3 px-4 w-full max-w-lg mb-8">
        <span className="text-zinc-400 dark:text-zinc-500">{isEn ? 'Specialization:' : 'Spesialisasi:'}</span>
        <span className="text-zinc-800 dark:text-zinc-200 font-medium">Excel Modeling</span>
        <span>•</span>
        <span className="text-zinc-800 dark:text-zinc-200 font-medium">SQL Extraction</span>
        <span>•</span>
        <span className="text-zinc-800 dark:text-zinc-200 font-medium">Data Cleansing</span>
        <span>•</span>
        <span className="text-zinc-800 dark:text-zinc-200 font-medium">Executive KPI</span>
      </div>

      {/* CTA Button */}
      <a
        href="#projects"
        onClick={scrollToProjects}
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs sm:text-sm font-medium hover:opacity-90 active:scale-95 transition-all shadow-sm cursor-pointer"
      >
        <span>{isEn ? 'Explore Case Studies' : 'Jelajahi Studi Kasus'}</span>
        <span>↓</span>
      </a>
    </div>
  );
}