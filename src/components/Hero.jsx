import React from 'react';

export default function Hero({
  setActiveTab,
  language = 'id',
} = {}) {
  const isEn = language === 'en';

  const goToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (setActiveTab) {
      setActiveTab('projects');
    }
  };

  const goToCerts = () => {
    const el = document.getElementById('credentials');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (setActiveTab) {
      setActiveTab('certifications');
    }
  };

  const skills = [
    {
      title: 'Microsoft Excel',
      shortTag: isEn ? 'Pivot & Dashboards' : 'Pivot & Dashboard',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      iconColor: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      title: 'SQL Querying',
      shortTag: isEn ? 'Joins & Extraction' : 'Join & Ekstraksi',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      iconColor: 'text-amber-600 dark:text-amber-400',
    },
    {
      title: 'Data Cleaning',
      shortTag: isEn ? 'ETL & Prep' : 'ETL & Validasi',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      ),
      iconColor: 'text-sky-600 dark:text-sky-400',
    },
    {
      title: 'KPI Dashboard',
      shortTag: isEn ? 'Metrics & Tracking' : 'Metrik & Visual',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      iconColor: 'text-violet-600 dark:text-violet-400',
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto py-2 sm:py-6">
      {/* 1. HERO SECTION (Open Canvas - Tanpa Kotak Pembungkus Luar) */}
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center pt-4 sm:pt-10 pb-6 sm:pb-8">
        {/* Foto Profil dengan ring halus */}
        <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden ring-2 ring-zinc-200 dark:ring-zinc-800 shadow-sm bg-zinc-100 dark:bg-zinc-800">
          <img
            src="/profile.png"
            alt="Iqbal Dwi Fathonah"
            className="w-full h-full object-cover object-[center_18%] scale-[1.7] -translate-y-2 select-none pointer-events-none drop-shadow-md"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/foto-nobg.png';
            }}
          />
        </div>

        {/* Status Open for Work */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs mb-3 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
          <span>{isEn ? 'Open for Work' : 'Terbuka untuk Kerja'}</span>
        </div>

        {/* Nama & Role */}
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-1.5">
          Iqbal Dwi Fathonah
        </h1>
        <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-amber-500 font-semibold mb-4">
          Data Analyst
        </p>

        {/* Bio Ringkas */}
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed mb-6">
          {isEn
            ? '2026 Information Technology Graduate specializing in Data Analytics. Focused on transforming raw operational datasets into interactive Excel dashboards, SQL queries, and actionable business insights.'
            : 'Lulusan Teknologi Informasi (2026) dengan spesialisasi Data Analytics. Berfokus menerjemahkan dataset mentah menjadi dashboard Excel interaktif, pemodelan query SQL, dan insight bisnis yang strategis.'}
        </p>

        {/* CTA Button */}
        <button
          type="button"
          onClick={goToProjects}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 text-xs sm:text-sm font-medium hover:opacity-90 active:scale-95 transition-all shadow-md cursor-pointer border-0"
        >
          <span>{isEn ? 'Explore Projects' : 'Jelajahi Proyek'}</span>
          <span>→</span>
        </button>
      </div>

      {/* 2. CORE ANALYTICAL STACK (Compact 2x2 di Mobile, 4 Kolom di Desktop) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-6">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="p-3.5 rounded-xl bg-white border border-zinc-200/80 shadow-sm dark:bg-zinc-900/40 dark:border-zinc-800/80 flex flex-col gap-1.5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <div className={`p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 ${skill.iconColor}`}>
                {skill.icon}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                {skill.title}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-mono truncate">
              {skill.shortTag}
            </span>
          </div>
        ))}
      </div>

      {/* 3. STUDI KASUS & SERTIFIKASI (Daftar Terbuka Tanpa Kotak Pembungkus Raksasa) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800/60">
        {/* Kolom Studi Kasus */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {isEn ? 'Featured Case Studies' : 'Studi Kasus Bisnis'}
            </h3>
            <button
              type="button"
              onClick={goToProjects}
              className="text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer bg-transparent border-0"
            >
              {isEn ? 'View all →' : 'Lihat semua →'}
            </button>
          </div>
          <div className="space-y-2.5">
            {/* Kasus 01 */}
            <div
              role="button"
              tabIndex={0}
              onClick={goToProjects}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && goToProjects()}
              className="p-3.5 rounded-xl bg-white border border-zinc-200/80 shadow-sm dark:bg-zinc-900/40 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex items-start justify-between cursor-pointer group"
            >
              <div className="flex-1 pr-3">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                    <span className="font-mono text-zinc-400 dark:text-zinc-500 mr-1.5">01</span> Retail Sales &amp; Profit Leakage
                  </span>
                  <span className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 px-2 py-0.5 rounded-md font-medium">
                    EXCEL
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {isEn
                    ? 'Analysis of $2.29M revenue performance, product margins, & discount leak'
                    : 'Analisis omzet $2.29M, margin produk, & kebocoran diskon'}
                </p>
              </div>
              <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs shrink-0 mt-0.5">
                ↗
              </span>
            </div>

            {/* Kasus 02 */}
            <div
              role="button"
              tabIndex={0}
              onClick={goToProjects}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && goToProjects()}
              className="p-3.5 rounded-xl bg-white border border-zinc-200/80 shadow-sm dark:bg-zinc-900/40 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex items-start justify-between cursor-pointer group"
            >
              <div className="flex-1 pr-3">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                    <span className="font-mono text-zinc-400 dark:text-zinc-500 mr-1.5">02</span> Traffic Safety &amp; Collision Risk
                  </span>
                  <span className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 px-2 py-0.5 rounded-md font-medium">
                    EXCEL
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {isEn
                    ? 'Evaluation of 238K+ NYC traffic collisions, peak risk hours, & fatality mitigation'
                    : 'Evaluasi 238K+ kecelakaan NYC, jam rawan, & fatalitas'}
                </p>
              </div>
              <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs shrink-0 mt-0.5">
                ↗
              </span>
            </div>
          </div>
        </div>

        {/* Kolom Sertifikasi */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {isEn ? 'Credentials' : 'Sertifikasi Terverifikasi'}
            </h3>
            <button
              type="button"
              onClick={goToCerts}
              className="text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer bg-transparent border-0"
            >
              {isEn ? 'View all →' : 'Lihat semua →'}
            </button>
          </div>
          <div className="space-y-2.5">
            {/* Cert 01 */}
            <div
              role="button"
              tabIndex={0}
              onClick={goToCerts}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && goToCerts()}
              className="p-3.5 rounded-xl bg-white border border-zinc-200/80 shadow-sm dark:bg-zinc-900/40 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-emerald-600 dark:text-emerald-400 text-sm">✓</span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                  Web Developer
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-[10px] font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60 font-medium">
                BNSP
              </span>
            </div>

            {/* Cert 02 */}
            <div
              role="button"
              tabIndex={0}
              onClick={goToCerts}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && goToCerts()}
              className="p-3.5 rounded-xl bg-white border border-zinc-200/80 shadow-sm dark:bg-zinc-900/40 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-emerald-600 dark:text-emerald-400 text-sm">✓</span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                  Artificial Intelligence
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-[10px] font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60 font-medium">
                CERTIPORT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}