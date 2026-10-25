import React from 'react';

export default function Hero({ language = 'id', profilePic = '/profile.png' } = {}) {
  const domainTags = language === 'en'
    ? ['Sales Analytics', 'Dashboard Reporting', 'SQL Modeling']
    : ['Analisis Penjualan', 'Dashboard KPI', 'Pemodelan SQL'];

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{language === 'en' ? 'Open for Work' : 'Terbuka untuk Kerja'}</span>
        </div>

        {/* Headline Utama Ala Matt Farley */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
          Data Analyst & Business Intelligence
        </h1>

        {/* Subtitle Value Proposition */}
        <p className="max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
          {language === 'en'
            ? 'Information Technology Graduate (2026) specializing in Data Analytics. Focused on transforming raw datasets into interactive Excel dashboards, structured SQL queries, and strategic business insights.'
            : 'Lulusan Teknologi Informasi (2026) dengan spesialisasi Data Analytics. Berfokus menerjemahkan dataset mentah menjadi dashboard Excel interaktif, pemodelan query SQL terstruktur, dan insight bisnis yang strategis.'}
        </p>

        {/* Avatar Profil Tengah (Lingkaran Bersih Tanpa Balok Hitam Berat) */}
        <div className="mb-6">
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-zinc-200 dark:ring-zinc-800 shadow-xl bg-zinc-900 relative flex items-center justify-center">
            <img
              src={profilePic || '/profile.png'}
              alt="Iqbal Dwi Fathonah"
              className="w-full h-full rounded-full object-cover scale-[1.42] -translate-y-2 transition-transform duration-300"
              style={{ objectPosition: 'center 4%' }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/foto-nobg.png';
              }}
            />
          </div>
        </div>

        {/* Nama & Status Ringkas */}
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
          Iqbal Dwi Fathonah
        </h2>
        <p className="text-xs uppercase tracking-widest font-semibold text-emerald-600 dark:text-emerald-400 mb-6">
          YOGYAKARTA, INDONESIA
        </p>

        {/* Domain Tags Pilihan */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {domainTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium font-sans border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-300 rounded-lg shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Indikator Halus Scroll ke Proyek */}
        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-xs font-sans text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors group cursor-pointer"
        >
          <span>{language === 'en' ? 'Explore selected works' : 'Eksplorasi proyek pilihan'}</span>
          <span className="group-hover:translate-y-1 transition-transform inline-block">↓</span>
        </a>

      </div>
    </section>
  );
}