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
    <div className="max-w-4xl mx-auto px-4 pt-24 sm:pt-32 pb-16 text-center flex flex-col items-center">
      {/* Avatar Foto dengan ring halus & status dot */}
      <div className="relative mb-5">
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-2 ring-zinc-700/80 dark:ring-zinc-700 p-1 bg-zinc-900 shadow-2xl relative">
          <img
            src="/profile.png"
            alt="Iqbal Dwi Fathonah"
            className="w-full h-full rounded-full object-cover object-center scale-110"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/foto-nobg.png';
            }}
          />
        </div>
        <span
          className="absolute bottom-1.5 right-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500 ring-4 ring-[#0a0a0c]"
          title={isEn ? 'Available for hire' : 'Terbuka untuk peluang kerja'}
        />
      </div>

      {/* Status Open for Work */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>{isEn ? 'Open for Work' : 'Terbuka untuk Kerja'}</span>
      </div>

      {/* Headline Utama */}
      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
        Iqbal Dwi Fathonah
      </h1>
      <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-amber-500 font-semibold mb-5">
        Data Analyst • Business Intelligence &amp; Modeling
      </p>

      {/* Bio Hero: Lulusan TI */}
      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-8">
        {isEn
          ? 'Information Technology Graduate (2026) specializing in Data Analytics. Focused on transforming raw datasets into interactive Excel dashboards, structured SQL queries, and strategic business insights.'
          : 'Lulusan Teknologi Informasi (2026) dengan spesialisasi Data Analytics. Berfokus menerjemahkan dataset mentah menjadi dashboard Excel interaktif, pemodelan query SQL terstruktur, dan insight bisnis yang strategis.'}
      </p>

      {/* Tombol Aksi Hero */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="#projects"
          onClick={(e) => scrollTo('projects', e)}
          className="px-6 py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 text-xs sm:text-sm font-medium hover:opacity-90 active:scale-95 transition-all shadow-md cursor-pointer"
        >
          {isEn ? 'View Projects ↓' : 'Lihat Proyek ↓'}
        </a>
        <a
          href="#about"
          onClick={(e) => scrollTo('about', e)}
          className="px-6 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer shadow-sm"
        >
          {isEn ? 'About Me' : 'Tentang Saya'}
        </a>
      </div>
    </div>
  );
}