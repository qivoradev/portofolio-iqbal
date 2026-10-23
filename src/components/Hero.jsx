import React from 'react';
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
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
      <div className="w-full rounded-3xl border border-zinc-800/90 bg-zinc-950/80 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col relative">
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* 1. Header Konsol Terminal */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800/80 bg-zinc-900/60 font-mono text-xs">
          {/* Traffic light dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-[#eab308]" />
            <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
            <span className="ml-2 text-zinc-400 hidden sm:inline-block">
              iqbal@analytics-workspace:~
            </span>
          </div>

          {/* Status Kapsul Hijau */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{isEn ? 'Open for Opportunities' : 'Terbuka untuk Kerja'}</span>
          </div>
        </div>

        {/* 2. Body Grid 2-Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 items-stretch">
          
          {/* KOLOM KIRI (md:col-span-5) */}
          <div className="md:col-span-5 flex flex-col justify-between rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-5 sm:p-6 text-center md:text-left">
            <div>
              {/* Avatar bulat toska */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-b from-teal-400 to-emerald-600 border-2 border-emerald-300/40 p-1 flex items-center justify-center overflow-hidden mb-4 shrink-0 mx-auto md:mx-0 shadow-[0_8px_20px_rgba(20,184,166,0.25)]">
                <img
                  src="/profile.png"
                  alt="Iqbal Dwi Fathonah"
                  className="w-full h-full object-cover object-[center_25%] scale-[1.65] -translate-y-1 select-none pointer-events-none drop-shadow-md"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/foto-nobg.png';
                  }}
                />
              </div>

              {/* Nama & Sub-header */}
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">
                Iqbal Dwi Fathonah
              </h1>
              <p className="text-sm font-semibold text-orange-500 mb-3 font-mono">
                Data Analyst &amp; BI
              </p>

              {/* Deskripsi ringkas */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                {isEn
                  ? 'Turning complex operational datasets into interactive executive dashboards and strategic business intelligence.'
                  : 'Menerjemahkan dataset operasional kompleks menjadi dashboard eksekutif interaktif dan insight bisnis strategis.'}
              </p>
            </div>

            <div>
              {/* Tombol CTA Utama */}
              <button
                type="button"
                onClick={() => setActiveTab && setActiveTab('projects')}
                className="group inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-orange-500/20 cursor-pointer mb-5"
              >
                <span>{isEn ? 'Explore Projects' : 'Jelajahi Proyek'}</span>
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowRightIcon size={14} />
                </span>
              </button>

              {/* Tautan Sosial Media */}
              <div className="flex items-center justify-center md:justify-start gap-2.5 text-zinc-400">
                <a
                  href="https://github.com/qivoradev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950/70 hover:border-orange-500/40 hover:text-white transition-all"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/iqbaldwifathonah"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950/70 hover:border-orange-500/40 hover:text-white transition-all"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950/70 hover:border-orange-500/40 hover:text-white transition-all"
                >
                  <InstagramIcon size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN (md:col-span-7 flex flex-col gap-3.5) */}
          <div className="md:col-span-7 flex flex-col gap-3.5">
            
            {/* Kartu Bento 1: Core Tools */}
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-4 transition-all hover:border-zinc-700/80">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-1.5">
                  <DatabaseIcon size={13} className="text-orange-400" />
                  Core Analytical Stack
                </span>
                <span className="text-[10px] font-mono text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded bg-emerald-500/10">
                  Ready
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-950/50 px-3 py-2 text-zinc-200">
                  <DatabaseIcon size={14} className="text-sky-400 shrink-0" />
                  <span>SQL / PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-950/50 px-3 py-2 text-zinc-200">
                  <TableIcon size={14} className="text-emerald-400 shrink-0" />
                  <span>Excel (Pivot/VLOOKUP)</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-950/50 px-3 py-2 text-zinc-200">
                  <BarChartIcon size={14} className="text-amber-400 shrink-0" />
                  <span>Power BI &amp; DAX</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-950/50 px-3 py-2 text-zinc-200">
                  <CheckIcon size={14} className="text-orange-400 shrink-0" />
                  <span>Data Modeling</span>
                </div>
              </div>
            </div>

            {/* Kartu Bento 2: Focus Domain (Grid 2 kolom) */}
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-4 transition-all hover:border-zinc-700/80">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-3">
                {isEn ? 'Analytical Focus Domains' : 'Domain Analisis Utama'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 p-3 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-white font-medium mb-1">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    Sales Performance
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    {isEn ? 'Revenue trends, product margin, & transaction cycles.' : 'Tren omzet, margin produk, & siklus transaksi.'}
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 p-3 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-white font-medium mb-1">
                    <span className="w-2 h-2 rounded-full bg-teal-400" />
                    Customer Churn Risk
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    {isEn ? 'Retention cohorts, balance tiers, & churn mitigation.' : 'Kohort retensi, tier saldo, & mitigasi churn nasabah.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Kartu Bento 3: Industry Credentials dengan shortcut */}
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-4 transition-all hover:border-zinc-700/80 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-1.5">
                  <AwardIcon size={13} className="text-emerald-400" />
                  {isEn ? 'Verified Credentials' : 'Sertifikasi Terverifikasi'}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveTab && setActiveTab('certifications')}
                  className="text-[11px] font-mono text-orange-400 hover:text-orange-300 inline-flex items-center gap-1 bg-transparent border-0 cursor-pointer p-0"
                >
                  <span>{isEn ? 'View all' : 'Lihat semua'}</span>
                  <ArrowRightIcon size={11} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between rounded-lg border border-zinc-800/80 bg-zinc-950/50 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <CheckIcon size={13} className="text-emerald-400 shrink-0" />
                    <span className="text-zinc-200 font-medium">Web Developer</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">
                    BNSP
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-zinc-800/80 bg-zinc-950/50 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <CheckIcon size={13} className="text-emerald-400 shrink-0" />
                    <span className="text-zinc-200 font-medium">Artificial Intelligence</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">
                    Certiport
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 3. Footer Konsol Terminal */}
        <div className="px-5 py-2.5 border-t border-zinc-800/80 bg-zinc-900/60 flex items-center justify-between text-[10px] font-mono text-zinc-500">
          <span>PORTFOLIO_OS // BUILD: 2026.10</span>
          <span>ID - ASIA_JAKARTA</span>
        </div>
      </div>
    </section>
  );
}