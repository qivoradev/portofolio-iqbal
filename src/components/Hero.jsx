import React from 'react';

export default function Hero({ language = 'id' } = {}) {
  const isEn = language === 'en';

  const scrollTo = (id, e) => {
    if (e) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-full md:max-w-3xl lg:max-w-5xl mx-auto px-5 sm:px-8 pt-24 sm:pt-32 lg:pt-36 pb-16 flex flex-col items-center text-center relative">
      {/* Efek Ambient Glow Halus di Belakang Profil (Khusus Desktop agar ruang samping hidup) */}
      <div className="hidden lg:block absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative mb-5 flex justify-center">
        {/* Lingkaran Avatar Container */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden ring-2 ring-zinc-300 dark:ring-zinc-700/80 p-1 bg-zinc-900 shadow-xl relative flex items-center justify-center">
          <img 
            src="/profile.png" 
            alt="Iqbal Dwi Fathonah" 
            className="w-full h-full rounded-full object-cover scale-[1.85] -translate-y-3 sm:-translate-y-4 transition-transform duration-300"
            style={{ objectPosition: 'center 20%' }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/foto-nobg.png';
            }}
          />
        </div>
      </div>

      {/* Status Open for Work */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
        <span>{isEn ? 'Open for Work' : 'Terbuka untuk Kerja'}</span>
      </div>

      {/* Headline Nama: Selaras dan proporsional */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
        Iqbal Dwi Fathonah
      </h1>

      <p className="text-sm sm:text-base font-semibold tracking-wider uppercase text-emerald-700 dark:text-emerald-400 mb-4">
        DATA ANALYST • BUSINESS INTELLIGENCE & MODELING
      </p>

      {/* Paragraf Bio: Diberikan max-w-3xl di desktop agar proporsional dan tidak terjepit */}
      <p className="text-xs sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl lg:max-w-3xl leading-relaxed mb-8 px-2">
        {language === 'en'
          ? 'Information Technology Graduate (2026) specializing in Data Analytics. Focused on transforming raw datasets into interactive Excel dashboards, structured SQL queries, and strategic business insights.'
          : 'Lulusan Teknologi Informasi (2026) dengan spesialisasi Data Analytics. Berfokus menerjemahkan dataset mentah menjadi dashboard Excel interaktif, pemodelan query SQL terstruktur, dan insight bisnis yang strategis.'}
      </p>

      {/* Tombol Aksi */}
      <div className="flex flex-wrap items-center justify-center gap-3.5">
        <a
          href="#projects"
          onClick={(e) => scrollTo('projects', e)}
          className="px-6 py-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 text-xs sm:text-sm font-medium hover:opacity-90 active:scale-95 transition-all shadow-md cursor-pointer"
        >
          {language === 'en' ? 'View Projects ↓' : 'Lihat Proyek ↓'}
        </a>
        <a
          href="#about"
          onClick={(e) => scrollTo('about', e)}
          className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer"
        >
          {language === 'en' ? 'About Me' : 'Tentang Saya'}
        </a>
      </div>
    </div>
  );
}