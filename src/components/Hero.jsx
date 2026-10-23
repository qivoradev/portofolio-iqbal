import React from 'react';
import {
  DatabaseIcon,
  TableIcon,
  BarChartIcon,
  AwardIcon,
  ArrowRightIcon,
  CheckIcon,
} from './Icons';

export default function Hero({ setActiveTab, language = 'en' } = {}) {
  const isEn = language === 'en';

  return (
    <section className="w-full max-w-4xl mx-auto my-auto py-2">
      {/* Jendela Konsol Luar */}
      <div className="w-full rounded-3xl border border-zinc-200 dark:border-zinc-800/90 bg-white/90 dark:bg-zinc-950/80 text-zinc-900 dark:text-zinc-100 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col relative transition-colors duration-300">
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* 1. Header Konsol Terminal */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900/60 font-mono text-xs transition-colors duration-300">
          {/* Traffic light dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-[#eab308]" />
            <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
            <span className="ml-2 text-zinc-600 dark:text-zinc-400 hidden sm:inline-block">
              iqbal@analytics-workspace:~
            </span>
          </div>

          {/* Status Kapsul Hijau */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            <span>{isEn ? 'Open for Opportunities' : 'Terbuka untuk Kerja'}</span>
          </div>
        </div>

        {/* 2. Body Grid 2-Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 items-stretch">
          
          {/* KOLOM KIRI (md:col-span-5) */}
          <div className="md:col-span-5 flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900/40 p-5 sm:p-6 text-center md:text-left transition-colors duration-300">
            <div>
              {/* Avatar bulat toska */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-b from-teal-400 to-emerald-600 border-2 border-emerald-300/40 p-1 flex items-center justify-center overflow-hidden mb-4 shrink-0 mx-auto md:mx-0 shadow-[0_8px_20px_rgba(20,184,166,0.25)]">
                <img
                  src="/profile.png"
                  alt="Iqbal Dwi Fathonah"
                  className="w-full h-full object-cover object-[center_18%] scale-[1.7] -translate-y-3 select-none pointer-events-none drop-shadow-md transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/foto-nobg.png';
                  }}
                />
              </div>

              {/* Nama & Role Murni Data Analyst */}
              <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-1">
                Iqbal Dwi Fathonah
              </h1>
              <p className="text-sm font-semibold text-orange-500 mb-3 font-mono">
                Data Analyst
              </p>

              {/* Bio Profil Membumi */}
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 font-normal">
                {isEn
                  ? 'Data Analyst with an Information Technology background, focused on turning raw data into interactive dashboards, automated reporting, and strategic business insights.'
                  : 'Data Analyst berlatar belakang Teknologi Informasi yang berfokus menerjemahkan data mentah menjadi dashboard interaktif, pelaporan otomatis, dan insight bisnis yang strategis.'}
              </p>
            </div>

            <div>
              {/* Tombol CTA Utama */}
              <button
                type="button"
                onClick={() => setActiveTab && setActiveTab('projects')}
                className="group inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-orange-500/20 cursor-pointer mb-3"
              >
                <span>{isEn ? 'Explore Projects' : 'Jelajahi Proyek'}</span>
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowRightIcon size={14} />
                </span>
              </button>

              {/* Warna Asli Brand pada 3 Icon Sosial Media (GitHub, LinkedIn, Instagram) */}
              <div className="flex items-center gap-2.5 mt-2 justify-center md:justify-start">
                {/* GitHub */}
                <a
                  href="https://github.com/qivoradev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-800/80 text-zinc-100 hover:bg-zinc-700 hover:scale-105 transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/iqbaldwifathonah"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#0A66C2]/40 bg-[#0A66C2]/15 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:scale-105 transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="group flex h-9 w-9 items-center justify-center rounded-xl border border-[#E4405F]/40 bg-[#E4405F]/15 text-[#E4405F] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent hover:scale-105 transition-all shadow-sm"
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
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold flex items-center gap-1.5">
                  <DatabaseIcon size={13} className="text-orange-400" />
                  Core Analytical Stack
                </span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded bg-emerald-500/10">
                  Ready
                </span>
              </div>

              {/* 4 Kotak Stack Riil */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {/* 1. Microsoft Excel (Analytics) */}
                <div className="flex flex-col justify-between rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950/50 p-2.5 text-zinc-800 dark:text-zinc-200 shadow-sm">
                  <div className="flex items-center gap-1.5 font-semibold text-zinc-900 dark:text-zinc-100 mb-0.5">
                    <TableIcon size={14} className="text-emerald-500 dark:text-emerald-400 shrink-0" />
                    <span>Microsoft Excel (Analytics)</span>
                  </div>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
                    Pivot Tables, Slicers, XLOOKUP, KPI Dashboards
                  </span>
                </div>

                {/* 2. SQL Querying */}
                <div className="flex flex-col justify-between rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950/50 p-2.5 text-zinc-800 dark:text-zinc-200 shadow-sm">
                  <div className="flex items-center gap-1.5 font-semibold text-zinc-900 dark:text-zinc-100 mb-0.5">
                    <DatabaseIcon size={14} className="text-sky-500 dark:text-sky-400 shrink-0" />
                    <span>SQL Querying</span>
                  </div>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
                    Data Extraction, Filtering, Aggregation
                  </span>
                </div>

                {/* 3. Data Cleaning & Prep */}
                <div className="flex flex-col justify-between rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950/50 p-2.5 text-zinc-800 dark:text-zinc-200 shadow-sm">
                  <div className="flex items-center gap-1.5 font-semibold text-zinc-900 dark:text-zinc-100 mb-0.5">
                    <CheckIcon size={14} className="text-orange-500 dark:text-orange-400 shrink-0" />
                    <span>Data Cleaning &amp; Prep</span>
                  </div>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
                    {isEn ? 'Raw data validation & inconsistency handling' : 'Validasi data mentah & penanganan inkonsistensi'}
                  </span>
                </div>

                {/* 4. Dashboard KPI Design */}
                <div className="flex flex-col justify-between rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950/50 p-2.5 text-zinc-800 dark:text-zinc-200 shadow-sm">
                  <div className="flex items-center gap-1.5 font-semibold text-zinc-900 dark:text-zinc-100 mb-0.5">
                    <BarChartIcon size={14} className="text-amber-500 dark:text-amber-400 shrink-0" />
                    <span>Dashboard KPI Design</span>
                  </div>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
                    {isEn ? 'Intuitive & readable business metric visuals' : 'Visualisasi metrik bisnis yang mudah dibaca'}
                  </span>
                </div>
              </div>
            </div>

            {/* Kartu Bento 2: Studi Kasus Bisnis (Grid 2 kolom) */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/40 p-4 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700/80">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold block mb-3">
                {isEn ? 'Business Case Studies' : 'Studi Kasus Bisnis'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {/* Kasus 1: Sales Performance */}
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950/50 p-3 flex flex-col justify-between shadow-sm">
                  <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-medium mb-1">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    Sales Performance
                  </div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal">
                    {isEn ? 'Revenue trends, product margins, & transaction volume analysis' : 'Analisis tren omzet, margin produk, & volume transaksi'}
                  </p>
                </div>

                {/* Kasus 2: Customer Churn Risk */}
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950/50 p-3 flex flex-col justify-between shadow-sm">
                  <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-medium mb-1">
                    <span className="w-2 h-2 rounded-full bg-teal-400" />
                    Customer Churn Risk
                  </div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal">
                    {isEn ? 'Demographic patterns & customer retention mitigation' : 'Analisis pola demografi & mitigasi tingkat retensi nasabah'}
                  </p>
                </div>
              </div>
            </div>

            {/* Kartu Bento 3: Industry Credentials dengan shortcut */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/40 p-4 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700/80 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold flex items-center gap-1.5">
                  <AwardIcon size={13} className="text-emerald-500 dark:text-emerald-400" />
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
                    <CheckIcon size={13} className="text-emerald-500 dark:text-emerald-400 shrink-0" />
                    <span className="text-zinc-800 dark:text-zinc-200 font-medium">Web Developer</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-transparent">
                    BNSP
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950/50 px-3 py-2 shadow-sm">
                  <div className="flex items-center gap-2">
                    <CheckIcon size={13} className="text-emerald-500 dark:text-emerald-400 shrink-0" />
                    <span className="text-zinc-800 dark:text-zinc-200 font-medium">Artificial Intelligence</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-transparent">
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