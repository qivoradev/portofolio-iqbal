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
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
      {/* Efek Ambient Glow Halus di Belakang Profil */}
      <div className="hidden lg:block absolute top-1/4 right-1/4 translate-x-1/2 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-6 lg:gap-16 items-center text-center lg:text-left">
          
          {/* SISI KIRI (DESKTOP) / BAWAH (MOBILE): Teks Pernyataan Diri (order-2 di mobile, order-1 di desktop) */}
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

            {/* Subtitle Role */}
            <p className="text-xs sm:text-sm lg:text-base font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-4 sm:mb-5">
              DATA ANALYST • BUSINESS INTELLIGENCE & MODELING
            </p>

            {/* Paragraf Deskripsi */}
            <p className="max-w-xl text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 lg:mb-8">
              {language === 'en'
                ? 'Information Technology Graduate (2026) specializing in Data Analytics. Focused on transforming raw datasets into interactive Excel dashboards, structured SQL queries, and strategic business insights.'
                : 'Lulusan Teknologi Informasi (2026) dengan spesialisasi Data Analytics. Berfokus menerjemahkan dataset mentah menjadi dashboard Excel interaktif, pemodelan query SQL terstruktur, dan insight bisnis yang strategis.'}
            </p>

            {/* Indikator Halus ke Seksi Bawah (Tanpa Tombol/Kotak) */}
            <a
              href="#projects"
              onClick={(e) => scrollTo('projects', e)}
              className="inline-flex items-center gap-2 text-xs font-sans text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors cursor-pointer"
            >
              <span>{language === 'en' ? 'Explore selected works' : 'Eksplorasi proyek pilihan'}</span>
              <span className="animate-bounce">↓</span>
            </a>

          </div>

          {/* SISI KANAN (DESKTOP) / ATAS (MOBILE): Foto Profil */}
          <div className="flex justify-center shrink-0 order-1 lg:order-2">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-[340px] lg:h-[340px] aspect-square shrink-0 rounded-full overflow-hidden ring-2 ring-zinc-300 dark:ring-zinc-700/80 p-1.5 bg-zinc-900 shadow-2xl relative flex items-center justify-center">
              <img 
                src="/profile.png" 
                alt="Iqbal Dwi Fathonah" 
                className="w-full h-full rounded-full object-cover scale-[1.18] -translate-y-1 transition-transform duration-300"
                style={{ objectPosition: 'center 8%' }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/foto-nobg.png';
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}