import React, { useState, useEffect } from 'react';
import {
  DatabaseIcon,
  TableIcon,
  AwardIcon,
  ArrowRightIcon,
  CheckIcon,
} from './Icons';

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

        {/* 2. Body Grid 2-Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 items-stretch">
          
          {/* KOLOM KIRI (md:col-span-5) */}
          <div className="md:col-span-5 flex flex-col justify-start gap-4 sm:gap-5 h-full rounded-2xl border border-zinc-200 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900/40 p-5 sm:p-6 text-center md:text-left transition-colors duration-300">
            <div>
              {/* Avatar dengan Badge Status Terbuka untuk Kerja */}
              <div className="w-full flex justify-center mb-5">
                <div className="relative inline-block mx-auto">
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
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-zinc-950/90 border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-[11px] font-medium shadow-md whitespace-nowrap backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{language === 'en' ? 'Open for Work' : 'Terbuka untuk Kerja'}</span>
                  </div>
                </div>
              </div>

              {/* Nama & Role Murni Data Analyst */}
              <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-1">
                Iqbal Dwi Fathonah
              </h1>
              <p className="text-sm font-semibold text-orange-500 mb-3 font-mono">
                Data Analyst
              </p>

              {/* Bio Profil Membumi */}
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                {isEn
                  ? 'Data Analyst with an Information Technology background, focused on turning raw data into interactive dashboards, automated reporting, and strategic business insights.'
                  : 'Data Analyst berlatar belakang Teknologi Informasi yang berfokus menerjemahkan data mentah menjadi dashboard interaktif, pelaporan otomatis, dan insight bisnis yang strategis.'}
              </p>
            </div>

            {/* Pembungkus Tombol Aksi */}
            <div className="mt-2 flex flex-col gap-3">
              {/* Tombol CTA Utama */}
              <button
                type="button"
                onClick={() => setActiveTab && setActiveTab('projects')}
                className="group inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-orange-500/20 cursor-pointer"
              >
                <span>{isEn ? 'Explore Projects' : 'Jelajahi Proyek'}</span>
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowRightIcon size={14} />
                </span>
              </button>

              <div className="flex items-center justify-center md:justify-start gap-2.5">
                {/* 1. Email: Abu-abu -> Hover Oranye Khas Mailto */}
                <a
                  href="mailto:iqbaldwifathonah@gmail.com"
                  aria-label="Email"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-900/60 text-zinc-400 hover:text-orange-400 hover:bg-orange-500/10 hover:border-orange-500/40 hover:scale-105 transition-all duration-200 shadow-sm"
                  title="Kirim Email"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>

                {/* 2. LinkedIn: Abu-abu -> Hover Biru Resmi LinkedIn (#0A66C2) */}
                <a
                  href="https://linkedin.com/in/iqbaldwifathonah"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-900/60 text-zinc-400 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/40 hover:scale-105 transition-all duration-200 shadow-sm"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                {/* 3. Instagram: Abu-abu -> Hover Gradasi Resmi Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="group flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent hover:scale-105 transition-all duration-200 shadow-sm"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN (md:col-span-7 flex flex-col gap-3.5) */}
          <div className="md:col-span-7 flex flex-col gap-3.5">
            
            {/* Kartu Bento 1: Core Analytical Stack (Riil Excel & SQL) */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/40 p-4 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700/80">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] tracking-wider text-zinc-500 uppercase font-semibold">
                  Core Analytical Stack
                </span>
                <span className="font-mono text-[10px] text-zinc-500">[4 SKILLS]</span>
              </div>

              {/* 4 Kotak Stack: 2 Alat Utama Berikon + 2 Metodologi Murni Tipografi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* 1. Microsoft Excel (Analytics) - Berikon Tabel/Spreadsheet */}
                <div className="group rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 p-3.5 shadow-sm transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 shrink-0">
                        <TableIcon size={14} />
                      </div>
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                        Microsoft Excel (Analytics)
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      Pivot Tables, Slicers, XLOOKUP, KPI Dashboards
                    </p>
                  </div>
                </div>

                {/* 2. SQL Querying - Berikon Database */}
                <div className="group rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 p-3.5 shadow-sm transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="p-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-500 dark:text-orange-400 shrink-0">
                        <DatabaseIcon size={14} />
                      </div>
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                        SQL Querying
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      Data Extraction, Filtering, Aggregation
                    </p>
                  </div>
                </div>

                {/* 3. Data Cleaning & Prep - Murni Tipografi Bersih */}
                <div className="group rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 p-3.5 shadow-sm transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white transition-colors mb-1">
                      Data Cleaning &amp; Prep
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {isEn ? 'Raw data validation & inconsistency handling' : 'Validasi data mentah & penanganan inkonsistensi'}
                    </p>
                  </div>
                </div>

                {/* 4. Dashboard KPI Design - Murni Tipografi Bersih */}
                <div className="group rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 p-3.5 shadow-sm transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white transition-colors mb-1">
                      Dashboard KPI Design
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {isEn ? 'Intuitive & readable business metric visuals' : 'Visualisasi metrik bisnis yang mudah dibaca'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kartu Bento 2: Studi Kasus Bisnis (Grid 2 kolom) */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/40 p-4 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700/80">
              <span className="font-mono text-[11px] tracking-wider text-zinc-500 uppercase font-semibold block mb-3">
                {isEn ? 'Business Case Studies' : 'Studi Kasus Bisnis'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Kasus 1: Retail Sales & Profit Leakage */}
                <div
                  onClick={() => setActiveTab && setActiveTab('projects')}
                  className="group rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 p-3.5 flex flex-col justify-between shadow-sm transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700/80 cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div className="flex items-center text-zinc-900 dark:text-zinc-200 font-semibold text-sm">
                      <span className="font-mono text-xs text-zinc-500 font-normal mr-2">01</span>
                      <span className="group-hover:text-black dark:group-hover:text-white transition-colors">
                        Retail Sales &amp; Profit Leakage
                      </span>
                    </div>
                    <span className="text-zinc-500 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {isEn
                      ? 'Analysis of $2.29M revenue performance, product margins, & discount profit leakage'
                      : 'Analisis performa omzet $2.29M, margin produk, & kebocoran profit diskon'}
                  </p>
                </div>

                {/* Kasus 2: Traffic Safety & Collision Risk */}
                <div
                  onClick={() => setActiveTab && setActiveTab('projects')}
                  className="group rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 p-3.5 flex flex-col justify-between shadow-sm transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700/80 cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div className="flex items-center text-zinc-900 dark:text-zinc-200 font-semibold text-sm">
                      <span className="font-mono text-xs text-zinc-500 font-normal mr-2">02</span>
                      <span className="group-hover:text-black dark:group-hover:text-white transition-colors">
                        Traffic Safety &amp; Collision Risk
                      </span>
                    </div>
                    <span className="text-zinc-500 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {isEn
                      ? 'Evaluation of 238K+ NYC traffic collisions, peak risk hours, & fatality mitigation'
                      : 'Evaluasi 238K+ kecelakaan lalu lintas NYC, pola waktu rawan, & mitigasi fatalitas'}
                  </p>
                </div>
              </div>
            </div>

            {/* Kartu Bento 3: Industry Credentials dengan shortcut */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/40 p-4 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700/80 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold flex items-center gap-1.5">
                  <AwardIcon size={13} className="text-zinc-400 dark:text-zinc-500" />
                  {isEn ? 'Verified Credentials' : 'Sertifikasi Terverifikasi'}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveTab && setActiveTab('certifications')}
                  className="text-[11px] font-mono text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 inline-flex items-center gap-1 bg-transparent border-0 cursor-pointer p-0"
                >
                  <span>{isEn ? 'View all' : 'Lihat semua'}</span>
                  <ArrowRightIcon size={11} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950/50 px-3 py-2 shadow-sm">
                  <div className="flex items-center gap-2">
                    <CheckIcon size={13} className="text-emerald-500/80 dark:text-emerald-400/80 shrink-0" />
                    <span className="text-zinc-800 dark:text-zinc-200 font-medium">Web Developer</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50">
                    BNSP
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950/50 px-3 py-2 shadow-sm">
                  <div className="flex items-center gap-2">
                    <CheckIcon size={13} className="text-emerald-500/80 dark:text-emerald-400/80 shrink-0" />
                    <span className="text-zinc-800 dark:text-zinc-200 font-medium">Artificial Intelligence</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50">
                    Certiport
                  </span>
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