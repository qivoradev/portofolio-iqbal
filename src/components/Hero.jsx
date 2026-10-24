import React from 'react';

export default function Hero({
  setActiveTab,
  language = 'id',
} = {}) {
  const isEn = language === 'en';

  return (
    <section className="w-full max-w-5xl mx-auto py-6 sm:py-8">
      {/* 1. HERO BANNER PROFILE (Minimalist Bento Card) */}
      <div className="w-full bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center relative overflow-hidden shadow-xl">
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* Foto Profil Bulat dengan Ring Halus */}
        <div className="w-24 h-24 rounded-full border-2 border-zinc-700/60 p-1 mb-4 shadow-xl overflow-hidden bg-zinc-800/50">
          <img
            src="/profile.png"
            alt="Iqbal Dwi Fathonah"
            className="w-full h-full object-cover object-[center_18%] scale-[1.7] -translate-y-2 rounded-full select-none pointer-events-none drop-shadow-md"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/foto-nobg.png';
            }}
          />
        </div>

        {/* Status Pill di Bawah Foto */}
        <div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-3 py-1 rounded-full flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{isEn ? 'Open for Work' : 'Terbuka untuk Kerja'}</span>
        </div>

        {/* Nama & Role */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
          Iqbal Dwi Fathonah
        </h1>
        <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-zinc-400 mb-4">
          Data Analyst
        </p>

        {/* Bio */}
        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed mb-6">
          {isEn
            ? '2026 Information Technology Graduate specializing in Data Analytics. Focused on transforming raw operational datasets into interactive Excel dashboards, SQL queries, and actionable business insights.'
            : 'Lulusan Teknologi Informasi (2026) dengan spesialisasi Data Analytics. Berfokus menerjemahkan dataset mentah menjadi dashboard Excel interaktif, pemodelan query SQL, dan insight bisnis yang strategis.'}
        </p>

        {/* CTA Button */}
        <a
          href="#projects"
          onClick={(e) => {
            if (setActiveTab) {
              e.preventDefault();
              setActiveTab('projects');
            }
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-medium text-xs sm:text-sm hover:bg-zinc-200 active:scale-95 transition-all shadow-md cursor-pointer"
        >
          <span>{isEn ? 'Explore Projects' : 'Jelajahi Proyek'}</span>
          <svg className="w-4 h-4 text-zinc-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      {/* 2. CORE ANALYTICAL STACK (Bento Row 4 Kolom) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {/* 1. Microsoft Excel */}
        <div className="bg-zinc-900/30 border border-zinc-800/70 hover:border-zinc-700 rounded-2xl p-5 transition-all flex flex-col justify-between group shadow-sm">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-zinc-100">Microsoft Excel</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Pivot Tables, Dynamic Slicers, Lookup Models, &amp; KPI Dashboards
            </p>
          </div>
        </div>

        {/* 2. SQL Querying */}
        <div className="bg-zinc-900/30 border border-zinc-800/70 hover:border-zinc-700 rounded-2xl p-5 transition-all flex flex-col justify-between group shadow-sm">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-zinc-100">SQL Querying</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Data Extraction, Multi-Table Joins, Aggregation, &amp; Filtering
            </p>
          </div>
        </div>

        {/* 3. Data Cleaning */}
        <div className="bg-zinc-900/30 border border-zinc-800/70 hover:border-zinc-700 rounded-2xl p-5 transition-all flex flex-col justify-between group shadow-sm">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-zinc-100">Data Cleaning</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {isEn
                ? 'Raw data validation, missing value treatment, & structural prep'
                : 'Validasi data mentah, penanganan inkonsistensi, & standarisasi'}
            </p>
          </div>
        </div>

        {/* 4. KPI Dashboard */}
        <div className="bg-zinc-900/30 border border-zinc-800/70 hover:border-zinc-700 rounded-2xl p-5 transition-all flex flex-col justify-between group shadow-sm">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-zinc-100">KPI Dashboard</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {isEn
                ? 'Intuitive executive visuals, business metrics, & performance tracking'
                : 'Visualisasi metrik eksekutif yang intuitif & pelacakan performa'}
            </p>
          </div>
        </div>
      </div>

      {/* 3. PREVIEW SECTION (Studi Kasus & Sertifikasi - 2 Kolom Seimbang) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Kolom Kiri: Studi Kasus Bisnis */}
        <div className="rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-6 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-zinc-500 tracking-wider">
                {isEn ? 'BUSINESS CASE STUDIES' : 'STUDI KASUS BISNIS'}
              </span>
              <a
                href="#projects"
                onClick={(e) => {
                  if (setActiveTab) {
                    e.preventDefault();
                    setActiveTab('projects');
                  }
                }}
                className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors font-mono"
              >
                {isEn ? 'View all →' : 'Lihat semua →'}
              </a>
            </div>

            <div className="space-y-3">
              {/* Kasus 01 */}
              <a
                href="#projects"
                onClick={(e) => {
                  if (setActiveTab) {
                    e.preventDefault();
                    setActiveTab('projects');
                  }
                }}
                className="rounded-xl bg-zinc-900/30 border border-zinc-800/60 p-4 hover:border-zinc-700 transition-colors flex items-start justify-between cursor-pointer group block"
              >
                <div className="flex-1 pr-3">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs sm:text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">
                      <span className="font-mono text-zinc-500 mr-1.5">01</span> Retail Sales &amp; Profit Leakage
                    </span>
                    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-md font-medium">
                      EXCEL
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {isEn
                      ? 'Analysis of $2.29M revenue performance, product margins, & discount leak'
                      : 'Analisis omzet $2.29M, margin produk, & kebocoran diskon'}
                  </p>
                </div>
                <span className="text-zinc-500 group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs shrink-0 mt-0.5">
                  ↗
                </span>
              </a>

              {/* Kasus 02 */}
              <a
                href="#projects"
                onClick={(e) => {
                  if (setActiveTab) {
                    e.preventDefault();
                    setActiveTab('projects');
                  }
                }}
                className="rounded-xl bg-zinc-900/30 border border-zinc-800/60 p-4 hover:border-zinc-700 transition-colors flex items-start justify-between cursor-pointer group block"
              >
                <div className="flex-1 pr-3">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs sm:text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">
                      <span className="font-mono text-zinc-500 mr-1.5">02</span> Traffic Safety &amp; Collision Risk
                    </span>
                    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-md font-medium">
                      EXCEL
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {isEn
                      ? 'Evaluation of 238K+ NYC traffic collisions, peak risk hours, & fatality mitigation'
                      : 'Evaluasi 238K+ kecelakaan NYC, jam rawan, & fatalitas'}
                  </p>
                </div>
                <span className="text-zinc-500 group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs shrink-0 mt-0.5">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Sertifikasi Terverifikasi */}
        <div className="rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-6 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-zinc-500 tracking-wider">
                {isEn ? 'VERIFIED CREDENTIALS' : 'SERTIFIKASI TERVERIFIKASI'}
              </span>
              <a
                href="#certifications"
                onClick={(e) => {
                  if (setActiveTab) {
                    e.preventDefault();
                    setActiveTab('certifications');
                  }
                }}
                className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors font-mono"
              >
                {isEn ? 'View all →' : 'Lihat semua →'}
              </a>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl bg-zinc-900/30 border border-zinc-800/60 p-4 hover:border-zinc-700 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-emerald-400 text-sm">✓</span>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-100">Web Developer</span>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-zinc-800/80 text-[10px] font-mono text-zinc-400 border border-zinc-700/60 font-medium">
                  BNSP
                </span>
              </div>

              <div className="rounded-xl bg-zinc-900/30 border border-zinc-800/60 p-4 hover:border-zinc-700 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-emerald-400 text-sm">✓</span>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-100">Artificial Intelligence</span>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-zinc-800/80 text-[10px] font-mono text-zinc-400 border border-zinc-700/60 font-medium">
                  CERTIPORT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}