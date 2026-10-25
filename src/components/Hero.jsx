import React from 'react';

export default function Hero({ language = 'id' } = {}) {
  return (
    <section id="home" className="pt-28 pb-14 sm:pt-36 sm:pb-20 border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Minimal Status Bar */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-zinc-200 dark:border-zinc-800 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-base font-bold text-zinc-900 dark:text-white tracking-wider">
              IDF
            </span>
            <span className="text-zinc-400 dark:text-zinc-600">/</span>
            <span className="text-zinc-500 dark:text-zinc-400">Yogyakarta, ID • GMT+7</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden sm:inline">{language === 'en' ? 'AVAILABLE FOR FULL-TIME' : 'SIAP UNTUK FULL-TIME'}</span>
          </div>
        </div>

        {/* Hero Narrative */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Iqbal Dwi Fathonah
          </h1>
          <p className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
            Data Analyst & Business Intelligence Specialist
          </p>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans max-w-2xl pt-2">
            {language === 'en'
              ? 'Information Technology Graduate (2026). Focused on transforming raw relational datasets into structured SQL models, automated Excel dashboards, and measurable business insights for decision-makers.'
              : 'Lulusan Teknologi Informasi (2026). Berfokus menerjemahkan dataset mentah menjadi model query SQL terstruktur, otomatisasi dashboard analitik di Microsoft Excel, serta perumusan insight bisnis yang terukur untuk mendukung pengambilan keputusan.'}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-5 sm:gap-6 pt-8 text-xs sm:text-sm font-mono font-medium">
          <a
            href="#projects"
            className="text-zinc-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
          >
            <span>{language === 'en' ? 'SELECTED WORKS ↓' : 'PROYEK ANALITIK ↓'}</span>
          </a>
          <a
            href="mailto:iqbalfathonah20@gmail.com"
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            EMAIL ↗
          </a>
          <a
            href="https://linkedin.com/in/iqbaldwifathonah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            LINKEDIN ↗
          </a>
          <a
            href="https://github.com/iqbaldwifathonah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            GITHUB ↗
          </a>
        </div>

      </div>
    </section>
  );
}