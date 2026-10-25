import React from 'react';

export default function Hero({ language = 'id' } = {}) {
  const scrollTo = (id, e) => {
    if (e) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Efek Ambient Glow Halus di Belakang Profil */}
      <div className="hidden lg:block absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Container Responsif: Col di Mobile, Row Seimbang di Desktop */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-14 text-center lg:text-left">
          
          {/* SISI KIRI (DESKTOP) / ATAS (MOBILE): Foto Profil & Badge */}
          <div className="flex flex-col items-center lg:items-start shrink-0">
            <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-full overflow-hidden ring-2 ring-zinc-300 dark:ring-zinc-700/80 p-1.5 bg-zinc-900 shadow-2xl relative flex items-center justify-center">
              <img 
                src="/profile.png" 
                alt="Iqbal Dwi Fathonah" 
                className="w-full h-full rounded-full object-cover scale-[1.85] -translate-y-3 sm:-translate-y-4 lg:-translate-y-5 transition-transform duration-300"
                style={{ objectPosition: 'center 20%' }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/foto-nobg.png';
                }}
              />
            </div>
          </div>

          {/* SISI KANAN (DESKTOP) / BAWAH (MOBILE): Teks & Tombol Aksi */}
          <div className="flex-1 max-w-2xl flex flex-col items-center lg:items-start">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{language === 'en' ? 'Open for Work' : 'Terbuka untuk Kerja'}</span>
            </div>

            {/* Nama Utama */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
              Iqbal Dwi Fathonah
            </h1>

            {/* Subtitle Role */}
            <p className="text-xs sm:text-sm lg:text-base font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-4">
              DATA ANALYST • BUSINESS INTELLIGENCE & MODELING
            </p>

            {/* Paragraf Deskripsi */}
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
              {language === 'en'
                ? 'Information Technology Graduate (2026) specializing in Data Analytics. Focused on transforming raw datasets into interactive Excel dashboards, structured SQL queries, and strategic business insights.'
                : 'Lulusan Teknologi Informasi (2026) dengan spesialisasi Data Analytics. Berfokus menerjemahkan dataset mentah menjadi dashboard Excel interaktif, pemodelan query SQL terstruktur, dan insight bisnis yang strategis.'}
            </p>

            {/* Tombol CTA */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => scrollTo('projects', e)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-sm cursor-pointer text-center"
              >
                {language === 'en' ? 'View Projects ↓' : 'Lihat Proyek ↓'}
              </a>
              <a
                href="#about"
                onClick={(e) => scrollTo('about', e)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm cursor-pointer text-center"
              >
                {language === 'en' ? 'About Me' : 'Tentang Saya'}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}