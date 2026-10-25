import React from 'react';
import defaultAvatar from '../assets/profile.png';

export default function Hero({ language = 'id', profilePic } = {}) {
  const avatarSrc = profilePic || defaultAvatar || '/profile.png';

  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-zinc-50 dark:bg-[#0a0a0c] text-zinc-900 dark:text-white transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Mengikuti Layout Sawad (Teks & Metrik di Kiri, Frame Foto di Kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Kolom Kiri: 7 Kolom */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status & Domisili Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/70 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-lime-500 dark:bg-lime-400 animate-pulse" />
              <span>YOGYAKARTA, ID • GMT+7</span>
            </div>

            {/* Title & Role Badge ala Sawad */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
                Iqbal Dwi Fathonah
              </h1>
              
              <div className="inline-block px-3 py-1 rounded-md bg-zinc-900 dark:bg-zinc-800 text-lime-400 font-mono text-xs font-bold tracking-widest uppercase">
                DATA ANALYST & BUSINESS INTELLIGENCE
              </div>
            </div>

            {/* Deskripsi Nilai Utama */}
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans max-w-xl">
              {language === 'en'
                ? 'Information Technology Graduate (2026). Specializing in transforming raw relational datasets into structured SQL models, automated Microsoft Excel dashboards, and executive insights that drive strategic business decisions.'
                : 'Lulusan Teknologi Informasi (2026). Berfokus menerjemahkan dataset mentah menjadi model query SQL terstruktur, otomatisasi dashboard Microsoft Excel, serta perumusan insight bisnis strategis untuk pengambilan keputusan.'}
            </p>

            {/* Metrik Angka Statik ala Sawad (+2 Projects, +100% Cleansed, 2026 Graduate) */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800/80 w-full max-w-lg font-mono">
              <div className="text-center lg:text-left">
                <span className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white block">
                  +2
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mt-0.5">
                  FEATURED DASHBOARDS
                </span>
              </div>
              <div className="text-center lg:text-left">
                <span className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white block">
                  +100%
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mt-0.5">
                  DATA INTEGRITY
                </span>
              </div>
              <div className="text-center lg:text-left">
                <span className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white block">
                  2026
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mt-0.5">
                  IT GRADUATE
                </span>
              </div>
            </div>

            {/* Skill / Focus Ticker Teks ala Sawad */}
            <div className="pt-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1">
              <span className="text-zinc-900 dark:text-zinc-200 font-semibold">CAPABILITIES:</span>
              <span>SQL DATA MODELING</span>
              <span>•</span>
              <span>EXCEL BI AUTOMATION</span>
              <span>•</span>
              <span>KPI WIREFRAMING</span>
            </div>

            {/* Tombol Aksi */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-lime-500 dark:hover:bg-lime-400 dark:hover:text-black font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{language === 'en' ? 'Explore Projects' : 'Lihat Proyek'}</span>
                <span>↓</span>
              </a>

              <a
                href="https://linkedin.com/in/iqbaldwifathonah"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl border border-zinc-300 dark:border-zinc-800 hover:border-zinc-500 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm font-medium transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>LinkedIn</span>
                <span className="text-xs text-zinc-400">↗</span>
              </a>
            </div>

          </div>

          {/* Kolom Kanan: Foto Profil Proporsional Frame ala Sawad (5 Kolom) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] aspect-[4/5] rounded-3xl bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 overflow-hidden shadow-xl flex items-end justify-center">
              <img
                src={avatarSrc}
                alt="Iqbal Dwi Fathonah"
                className="w-full h-full object-cover object-bottom scale-105 origin-bottom"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/profile.png';
                }}
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 font-mono text-[10px] font-bold">
                DATA SPECIALIST
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}