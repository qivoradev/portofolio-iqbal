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
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-2 ring-zinc-300 dark:ring-zinc-700 p-1 bg-zinc-100 dark:bg-zinc-900 shadow-xl select-none">
          <img
            src="/profile.png"
            alt="Iqbal Dwi Fathonah"
            className="w-full h-full rounded-full object-cover object-[center_18%] scale-[1.5] -translate-y-1 select-none pointer-events-none drop-shadow-sm"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/foto-nobg.png';
            }}
          />
        </div>
        <span
          className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-black"
          title={isEn ? 'Available for hire' : 'Terbuka untuk peluang kerja'}
        />
      </div>

      {/* Status Open for Work */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
        <span>
          {isEn
            ? 'Available for Full-time & Project Roles'
            : 'Terbuka untuk Peluang Kerja & Proyek'}
        </span>
      </div>

      {/* Headline Utama */}
      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
        Iqbal Dwi Fathonah
      </h1>
      <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-amber-500 font-semibold mb-5">
        Data Analyst • Business Intelligence &amp; Modeling
      </p>

      {/* Subtitle Ringkas Berbobot */}
      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-8">
        {isEn
          ? 'Bridging IT systems and business intelligence. I transform complex operational data into intuitive Excel dashboards, structured SQL queries, and strategic decision-making insights.'
          : 'Menjembatani sistem teknologi informasi dan intelijen bisnis. Berfokus mentransformasi dataset mentah yang kompleks menjadi dashboard analitik Excel, pemodelan SQL terstruktur, dan insight strategis untuk keputusan bisnis.'}
      </p>

      {/* Tombol Aksi Hero */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="#projects"
          onClick={(e) => scrollTo('projects', e)}
          className="px-6 py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 text-xs sm:text-sm font-medium hover:opacity-90 active:scale-95 transition-all shadow-md cursor-pointer"
        >
          {isEn ? 'View Case Studies ↓' : 'Lihat Studi Kasus ↓'}
        </a>
        <a
          href="#about"
          onClick={(e) => scrollTo('about', e)}
          className="px-6 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer shadow-sm"
        >
          {isEn ? 'About My Approach' : 'Tentang Saya'}
        </a>
      </div>
    </div>
  );
}