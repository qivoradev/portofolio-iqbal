import React from 'react';

export default function Hero({ language = 'id', profilePic = '/profile.png' } = {}) {
  const domainTags = language === 'en' 
    ? ['Sales Analytics', 'Dashboard Reporting', 'SQL Modeling']
    : ['Analisis Penjualan', 'Dashboard KPI', 'Pemodelan SQL'];

  return (
    <section
      id="home"
      className="min-h-[calc(100svh-4.5rem)] flex flex-col justify-between pt-24 pb-8 overflow-hidden relative"
    >
      {/* Efek Ambient Glow Halus di Belakang Profil */}
      <div className="hidden lg:block absolute top-1/4 right-1/4 translate-x-1/2 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Spacer fleksibel atas */}
      <div className="hidden lg:block h-2" />

      {/* Konten Utama: Terpusat Sempurna secara Vertikal di Layar Desktop */}
      <div className="flex-1 flex items-center w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-10 lg:gap-16 items-center text-center lg:text-left">
            
            {/* SISI KIRI (DESKTOP) / BAWAH (MOBILE): Teks & Domain Tags */}
            <div className="flex flex-col items-center lg:items-start order-2 lg:order-1">
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{language === 'en' ? 'Open for Work' : 'Terbuka untuk Kerja'}</span>
              </div>

              {/* Nama Utama */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2 whitespace-nowrap">
                Iqbal Dwi Fathonah
              </h1>

              {/* Subtitle Peran */}
              <p className="text-xs sm:text-sm lg:text-base font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-4 sm:mb-5">
                DATA ANALYST • BUSINESS INTELLIGENCE & MODELING
              </p>

              {/* Paragraf Deskripsi */}
              <p className="max-w-xl text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                {language === 'en'
                  ? 'Information Technology Graduate (2026) specializing in Data Analytics. Focused on transforming raw datasets into interactive Excel dashboards, structured SQL queries, and strategic business insights.'
                  : 'Lulusan Teknologi Informasi (2026) dengan spesialisasi Data Analytics. Berfokus menerjemahkan dataset mentah menjadi dashboard Excel interaktif, pemodelan query SQL terstruktur, dan insight bisnis yang strategis.'}
              </p>

              {/* Domain Specialization Tags (Pengisi ruang elegan & kontekstual) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                {domainTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-medium font-sans border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-300 rounded-lg shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            {/* SISI KANAN (DESKTOP) / ATAS (MOBILE): Foto Profil Rounded Rectangle */}
            <div className="flex justify-center shrink-0 order-1 lg:order-2">
              <div className="relative w-40 h-52 sm:w-52 sm:h-64 lg:w-[280px] lg:h-[350px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 ring-1 ring-zinc-300 dark:ring-zinc-700/50 shadow-2xl bg-zinc-950 flex items-center justify-center">
                <img
                  src={profilePic || '/profile.png'}
                  alt="Iqbal Dwi Fathonah"
                  className="w-full h-full object-cover scale-[1.05] transition-transform duration-300"
                  style={{ objectPosition: 'center 12%' }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/foto-nobg.png';
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ANCHOR BAWAH HERO: Indikator Scroll */}
      <div className="flex justify-center pt-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors group cursor-pointer"
        >
          <span>{language === 'en' ? 'Explore selected works' : 'Eksplorasi proyek pilihan'}</span>
          <span className="group-hover:translate-y-1 transition-transform inline-block">↓</span>
        </a>
      </div>
    </section>
  );
}