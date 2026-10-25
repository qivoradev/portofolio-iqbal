import React from 'react';

export default function Hero({ language = 'id', profilePic = '/profile.png' } = {}) {
  return (
    <section id="home" className="pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Header Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Bento 1: Profil Utama & Value Proposition (8 Kolom) */}
          <div className="md:col-span-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{language === 'en' ? 'Available for Full-time Roles' : 'Siap untuk Posisi Full-time'}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-2">
                Iqbal Dwi Fathonah
              </h1>

              <p className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                Data Analyst • Business Intelligence & Modeling
              </p>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans max-w-xl">
                {language === 'en'
                  ? 'Information Technology Graduate (2026). Specializing in transforming complex datasets into structured SQL pipelines, interactive Excel dashboards, and executive insights.'
                  : 'Lulusan Teknologi Informasi (2026). Berfokus menerjemahkan dataset mentah menjadi alur query SQL terstruktur, otomatisasi dashboard Excel interaktif, serta insight bisnis yang terukur.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800/80 text-xs sm:text-sm font-medium">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-emerald-600 dark:hover:bg-emerald-400 dark:hover:text-black font-semibold transition-all inline-flex items-center gap-2"
              >
                <span>{language === 'en' ? 'View Dashboards' : 'Lihat Dashboard'}</span>
                <span>↓</span>
              </a>
              <a
                href="https://linkedin.com/in/iqbaldwifathonah"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 text-zinc-700 dark:text-zinc-300 transition-colors inline-flex items-center gap-1.5"
              >
                <span>LinkedIn</span>
                <span className="text-zinc-400 text-xs">↗</span>
              </a>
              <a
                href="https://github.com/iqbaldwifathonah"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 text-zinc-700 dark:text-zinc-300 transition-colors inline-flex items-center gap-1.5"
              >
                <span>GitHub</span>
                <span className="text-zinc-400 text-xs">↗</span>
              </a>
            </div>
          </div>

          {/* Bento 2: Avatar Profile Card (4 Kolom) */}
          <div className="md:col-span-4 p-6 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden ring-4 ring-emerald-500/20 bg-zinc-950 shadow-md mb-4 flex items-center justify-center">
              <img
                src={profilePic || '/profile.png'}
                alt="Iqbal Dwi Fathonah"
                className="w-full h-full object-cover scale-[1.4] -translate-y-2 transition-transform duration-300"
                style={{ objectPosition: 'center 5%' }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/foto-nobg.png';
                }}
              />
            </div>
            <span className="text-xs font-mono font-semibold text-zinc-900 dark:text-white">
              Yogyakarta, Indonesia
            </span>
            <span className="text-[11px] text-zinc-400 font-mono mt-0.5">
              GMT+7 • Remote / Hybrid / On-site
            </span>
          </div>

          {/* Bento 3: Metrik Operasional Riil (12 Kolom Terbagi 3) */}
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                Completed Analytics
              </span>
              <span className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                2 Production
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 block mt-1">
                Superstore & Incident Dashboards
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                Core Stack
              </span>
              <span className="text-2xl font-bold font-mono text-zinc-900 dark:text-white">
                Excel & SQL
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 block mt-1">
                Pivot, Dynamic Formulas, Joins, CTEs
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                BI & Design
              </span>
              <span className="text-2xl font-bold font-mono text-sky-600 dark:text-sky-400">
                Looker & Figma
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 block mt-1">
                Interactive Reporting & Wireframing
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}