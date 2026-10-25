import React from 'react';

export default function Hero({ language, profilePic = '/profile.png' }) {
  return (
    <section id="home" className="pt-28 pb-14 sm:pt-36 sm:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Profil Ringkas & Elegan */}
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{language === 'en' ? 'Available for Full-time Roles' : 'Siap untuk Posisi Full-time'}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Iqbal Dwi Fathonah
            </h1>
            
            <p className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
              Data Analyst • Business Intelligence & Modeling
            </p>
            
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Yogyakarta, Indonesia • GMT+7
            </p>
          </div>

          {/* Avatar Bersih Berdiameter Kompak (Proporsional di Light & Dark Mode) */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-2 ring-zinc-200 dark:ring-zinc-800 shrink-0 bg-zinc-100 dark:bg-zinc-900 shadow-md">
            <img
              src={profilePic || '/profile.png'}
              alt="Iqbal Dwi Fathonah"
              className="w-full h-full object-cover scale-125 translate-y-1"
              style={{ objectPosition: 'center 15%' }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/foto-nobg.png';
              }}
            />
          </div>
        </div>

        {/* Value Proposition Statement */}
        <div className="pt-8">
          <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
            {language === 'en'
              ? 'Information Technology Graduate (2026) specializing in Data Analytics. Focused on transforming raw datasets into structured SQL models, automated Excel dashboards, and actionable business insights.'
              : 'Lulusan Teknologi Informasi (2026) dengan spesialisasi Data Analytics. Berfokus menerjemahkan dataset mentah menjadi model SQL terstruktur, otomatisasi dashboard Excel interaktif, serta perumusan insight bisnis strategis.'}
          </p>

          {/* Tautan Jalur Cepat Tanpa Tombol Redundan */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6 mt-6 text-xs sm:text-sm font-medium">
            <a
              href="mailto:iqbalfathonah20@gmail.com"
              className="text-zinc-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
            >
              <span>Email</span>
              <span className="text-zinc-400 text-xs">↗</span>
            </a>
            <a
              href="https://linkedin.com/in/iqbaldwifathonah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <span className="text-zinc-400 text-xs">↗</span>
            </a>
            <a
              href="https://github.com/iqbaldwifathonah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <span className="text-zinc-400 text-xs">↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}