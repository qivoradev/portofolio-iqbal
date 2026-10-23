import React, { useState, useEffect } from 'react';

export default function Hero({
  setActiveTab,
  language = 'id',
  toggleLanguage,
  theme = 'dark',
  toggleTheme,
} = {}) {
  const isEn = language === 'en';
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format 24 jam dengan detik untuk presisi analitik
      const timeString = now.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setCurrentTime(`${timeString} WIB`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto my-auto py-2">
      {/* Jendela Konsol Luar */}
      <div className="w-full rounded-3xl border border-zinc-200 dark:border-zinc-800/90 bg-white/90 dark:bg-zinc-950/80 text-zinc-900 dark:text-zinc-100 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col relative transition-colors duration-300">
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* 1. Header Konsol Terminal */}
        <div className="flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/90 dark:bg-zinc-900/60 select-none">
          {/* Kiri: Traffic Lights & Username */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 border border-red-600/40" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80 border border-yellow-600/40" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
            <span className="ml-1 sm:ml-2 font-mono text-xs text-zinc-400 dark:text-zinc-500">
              iqbaldf
            </span>
          </div>

          {/* Kanan: Jam Realtime + Toolbar Mini Mobile (Bahasa & Tema) */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-zinc-200/70 dark:bg-zinc-800/80 border border-zinc-300/80 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300 font-mono text-[10px] sm:text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="sm:hidden">{currentTime.replace(/:\d{2}\s/, ' ')}</span>
              <span className="hidden sm:inline">{currentTime || '14:35 WIB'}</span>
            </div>
            <div className="flex sm:hidden items-center p-0.5 rounded-md bg-zinc-200/80 dark:bg-zinc-800/90 border border-zinc-300/70 dark:border-zinc-700/60">
              <button
                type="button"
                onClick={toggleLanguage}
                className="px-1.5 py-0.5 text-[10px] font-mono font-semibold text-zinc-700 dark:text-zinc-300 hover:text-orange-500 active:scale-95"
              >
                {language.toUpperCase()}
              </button>
              <span className="text-zinc-400 dark:text-zinc-600 text-[10px]">|</span>
              <button
                type="button"
                onClick={toggleTheme}
                className="p-1 text-zinc-700 dark:text-zinc-300 hover:text-orange-500 active:scale-95"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* KONTEN KONSOL UTAMA (1 ALUR VERTIKAL KE BAWAH) */}
        <div className="p-6 sm:p-10 flex flex-col gap-8 max-w-4xl mx-auto">
          
          {/* 1. HERO PROFILE SECTION (Terpusat & Terstruktur dalam Kartu Kontainer) */}
          <div className="relative p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/40 dark:bg-zinc-900/30 backdrop-blur-sm flex flex-col items-center text-center overflow-hidden">
            
            {/* Metadata Teknis di Pojok Desktop (Mengisi Kiri & Kanan agar tidak kosong) */}
            <div className="hidden sm:flex items-center justify-between w-full absolute top-4 px-6 text-[10px] font-mono text-zinc-400 dark:text-zinc-500 pointer-events-none">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500/80" />
                SYS_ID: IQBAL_WORKSPACE
              </span>
              <span>LOC: ID // REMOTE</span>
            </div>

            {/* Avatar dengan Status Badge */}
            <div className="relative inline-block mb-4 sm:mt-2">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-emerald-500/30 bg-emerald-500/20 p-1 shadow-lg shadow-emerald-500/10">
                <img
                  src="/profile.png"
                  alt="Iqbal Dwi Fathonah"
                  className="w-full h-full object-cover object-[center_18%] scale-[1.7] -translate-y-3 rounded-full select-none pointer-events-none drop-shadow-md transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/foto-nobg.png';
                  }}
                />
              </div>
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-zinc-950/95 border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-[11px] font-medium shadow-md whitespace-nowrap backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{isEn ? 'Open for Work' : 'Terbuka untuk Kerja'}</span>
              </div>
            </div>

            {/* Nama & Role */}
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-1">
              Iqbal Dwi Fathonah
            </h1>
            <p className="text-sm sm:text-base font-semibold text-orange-500 dark:text-orange-400 font-mono mb-3">
              Data Analyst
            </p>

            {/* Bio */}
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed mb-6">
              {isEn
                ? 'Data Analyst with an Information Technology background, focused on turning raw data into interactive dashboards, automated reporting, and strategic business insights.'
                : 'Data Analyst berlatar belakang Teknologi Informasi yang berfokus menerjemahkan data mentah menjadi dashboard interaktif, pelaporan otomatis, dan insight bisnis yang strategis.'}
            </p>

            {/* Tombol Aksi + Sosmed Links */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#projects"
                onClick={(e) => {
                  if (setActiveTab) {
                    e.preventDefault();
                    setActiveTab('projects');
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-orange-500/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <span>{isEn ? 'Explore Projects' : 'Jelajahi Proyek'}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {/* Brand Social Icons Container */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900/90 border border-zinc-800 shadow-md">
                
                {/* 1. Gmail / Email (Warna Resmi Merah Google #EA4335) */}
                <a
                  href="mailto:iqbaldwifathonah@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Email"
                  title="Email"
                  className="p-2 rounded-lg bg-zinc-800/80 hover:bg-red-500/10 border border-zinc-700/60 hover:border-red-500/40 active:scale-95 transition-all group"
                >
                  <svg className="w-4 h-4 text-[#EA4335] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>

                {/* 2. LinkedIn (Warna Resmi Biru LinkedIn #0A66C2) */}
                <a
                  href="https://linkedin.com/in/iqbaldwifathonah"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="p-2 rounded-lg bg-zinc-800/80 hover:bg-sky-500/10 border border-zinc-700/60 hover:border-sky-500/40 active:scale-95 transition-all group"
                >
                  <svg className="w-4 h-4 text-[#0A66C2] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.77-1.72 1.72s.77 1.73 1.72 1.73 1.73-.78 1.73-1.73-.78-1.72-1.73-1.72z" />
                  </svg>
                </a>

                {/* 3. Instagram (Gradasi Resmi Brand Instagram) */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="p-2 rounded-lg bg-zinc-800/80 hover:bg-pink-500/10 border border-zinc-700/60 hover:border-pink-500/40 active:scale-95 transition-all group"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="ig-hero-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fdf497" />
                        <stop offset="5%" stopColor="#fdf497" />
                        <stop offset="45%" stopColor="#fd5949" />
                        <stop offset="60%" stopColor="#d6249f" />
                        <stop offset="100%" stopColor="#285AEB" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#ig-hero-gradient)"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
                  </svg>
                </a>

              </div>
            </div>

          </div>

          {/* DIVIDER HALUS */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-800 to-transparent" />

          {/* 2. CORE ANALYTICAL STACK */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-zinc-500 tracking-wider">CORE ANALYTICAL STACK</span>
              <span className="font-mono text-[11px] text-zinc-500">[4 SKILLS]</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  </div>
                  <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-200">Microsoft Excel</h4>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">Pivot Tables, Slicers, Lookup Functions, KPI Dashboards</p>
              </div>

              <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-500 dark:text-orange-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                  </div>
                  <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-200">SQL Querying</h4>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">Data Extraction, Filtering, Aggregation</p>
              </div>

              <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-xs">
                <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-200 mb-2">Data Cleaning &amp; Prep</h4>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {isEn ? 'Raw data validation & inconsistency handling' : 'Validasi data mentah & penanganan inkonsistensi'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-xs">
                <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-200 mb-2">Dashboard KPI Design</h4>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {isEn ? 'Intuitive & readable business metric visuals' : 'Visualisasi metrik bisnis yang mudah dibaca'}
                </p>
              </div>
            </div>
          </div>

          {/* 3. BUSINESS CASE STUDIES & CREDENTIALS (2 Kolom Bawah Simetris) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Studi Kasus Bisnis */}
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/30 flex flex-col justify-between shadow-xs">
              <div>
                <span className="font-mono text-[11px] text-zinc-500 tracking-wider block mb-3">
                  {isEn ? 'BUSINESS CASE STUDIES' : 'STUDI KASUS BISNIS'}
                </span>
                <div className="space-y-2.5">
                  <div
                    onClick={() => setActiveTab && setActiveTab('projects')}
                    className="p-2.5 rounded-lg bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700 flex items-start justify-between cursor-pointer group transition-all"
                  >
                    <div>
                      <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-200 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                        <span className="font-mono text-zinc-400 dark:text-zinc-500 mr-1.5">01</span> Retail Sales &amp; Profit Leakage
                      </div>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {isEn
                          ? 'Analysis of $2.29M revenue performance, product margins, & discount leak'
                          : 'Analisis omzet $2.29M, margin produk, & kebocoran diskon'}
                      </p>
                    </div>
                    <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-orange-500 dark:group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs mt-0.5">↗</span>
                  </div>

                  <div
                    onClick={() => setActiveTab && setActiveTab('projects')}
                    className="p-2.5 rounded-lg bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700 flex items-start justify-between cursor-pointer group transition-all"
                  >
                    <div>
                      <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-200 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                        <span className="font-mono text-zinc-400 dark:text-zinc-500 mr-1.5">02</span> Traffic Safety &amp; Collision Risk
                      </div>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {isEn
                          ? 'Evaluation of 238K+ NYC traffic collisions, peak risk hours, & fatality mitigation'
                          : 'Evaluasi 238K+ kecelakaan NYC, jam rawan, & fatalitas'}
                      </p>
                    </div>
                    <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-orange-500 dark:group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs mt-0.5">↗</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Credentials */}
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/30 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-zinc-500 tracking-wider">
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
                    className="text-[11px] text-orange-500 dark:text-orange-400 hover:underline cursor-pointer"
                  >
                    {isEn ? 'View all →' : 'Lihat semua →'}
                  </a>
                </div>
                <div className="space-y-2.5">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-500 dark:text-emerald-400 text-xs">✓</span>
                      <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">Web Developer</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-[10px] font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">BNSP</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-500 dark:text-emerald-400 text-xs">✓</span>
                      <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">Artificial Intelligence</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-[10px] font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">CERTIPORT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Footer Konsol Terminal */}
        <div className="px-5 py-2.5 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950/90 flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
          <span>PORTFOLIO_OS // BUILD: 2026.10</span>
          <span>ID - ASIA_JAKARTA</span>
        </div>
      </div>
    </section>
  );
}