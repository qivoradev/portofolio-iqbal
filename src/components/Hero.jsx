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
    <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
      {/* Efek Ambient Glow Halus di Belakang Profil */}
      <div className="hidden lg:block absolute top-1/4 right-1/4 translate-x-1/2 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-10 lg:gap-16 items-center">
          
          {/* Kolom Kiri (Teks & CTA - order-2 di mobile, order-1 di desktop) */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{language === 'en' ? 'Open for Work' : 'Terbuka untuk Kerja'}</span>
            </div>

            {/* Nama Utama */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2 whitespace-nowrap">
              Iqbal Dwi Fathonah
            </h1>

            {/* Subtitle Role */}
            <p className="text-xs sm:text-sm lg:text-base font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-4">
              DATA ANALYST • BUSINESS INTELLIGENCE & MODELING
            </p>

            {/* Paragraf Narasi */}
            <p className="max-w-xl text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
              {language === 'en'
                ? 'Information Technology Graduate (2026) specializing in Data Analytics. Focused on transforming raw datasets into interactive Excel dashboards, structured SQL queries, and strategic business insights.'
                : 'Lulusan Teknologi Informasi (2026) dengan spesialisasi Data Analytics. Berfokus menerjemahkan dataset mentah menjadi dashboard Excel interaktif, pemodelan query SQL terstruktur, dan insight bisnis yang strategis.'}
            </p>

            {/* Tombol CTA (Berdampingan flex-1 di Mobile, w-auto di Desktop) */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => scrollTo('projects', e)}
                className="flex-1 sm:flex-none w-auto px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-sm text-center whitespace-nowrap cursor-pointer"
              >
                {language === 'en' ? 'View Projects ↓' : 'Lihat Proyek ↓'}
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollTo('contact', e)}
                className="flex-1 sm:flex-none w-auto px-6 py-3 rounded-full bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm text-center whitespace-nowrap cursor-pointer"
              >
                {language === 'en' ? 'Contact Me' : 'Hubungi Saya'}
              </a>
            </div>

          </div>

          {/* Kolom Kanan (Foto Profil - order-1 di mobile, order-2 di desktop) */}
          <div className="flex justify-center shrink-0 order-1 lg:order-2">
            <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-[340px] lg:h-[340px] aspect-square shrink-0 rounded-full overflow-hidden ring-2 ring-zinc-300 dark:ring-zinc-700/80 p-1.5 bg-zinc-900 shadow-2xl relative flex items-center justify-center">
              <img 
                src="/profile.png" 
                alt="Iqbal Dwi Fathonah" 
                className="w-full h-full rounded-full object-cover scale-[1.85] -translate-y-2.5 sm:-translate-y-3.5 lg:-translate-y-6 transition-transform duration-300"
                style={{ objectPosition: 'center 20%' }}
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