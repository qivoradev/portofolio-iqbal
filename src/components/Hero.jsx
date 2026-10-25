import React from 'react';

export default function Hero({ language = 'id', profilePic = '/profile.png' } = {}) {
  return (
    <section id="home" className="pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Meta Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-10 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
            <span className="text-zinc-900 dark:text-zinc-200 font-medium">
              {language === 'en' ? 'AVAILABLE FOR FULL-TIME ROLES' : 'TERBUKA UNTUK POSISI FULL-TIME'}
            </span>
          </div>
          <div>
            <span>YOGYAKARTA, ID • GMT+7</span>
          </div>
        </div>

        {/* Editorial Oversized Title */}
        <div className="space-y-1 mb-8">
          <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 font-semibold block">
            IQBAL DWI FATHONAH
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 dark:text-white uppercase leading-[1.05]">
            DATA ANALYST & <br />
            <span className="text-zinc-400 dark:text-zinc-500">BUSINESS INTELLIGENCE</span>
          </h1>
        </div>

        {/* Subtitle & Profile Avatar Integration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 border-t border-zinc-200 dark:border-zinc-800/60">
          
          <div className="lg:col-span-8">
            <p className="text-base sm:text-xl text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
              {language === 'en'
                ? 'Information Technology Graduate (2026). Bridging the gap between raw database schemas and strategic boardroom decisions through structured SQL modeling and automated executive dashboards.'
                : 'Lulusan Teknologi Informasi (2026). Menghubungkan skema basis data mentah dengan keputusan strategis bisnis melalui pemodelan SQL terstruktur dan otomatisasi dashboard eksekutif.'}
            </p>

            {/* Direct Links */}
            <div className="flex flex-wrap items-center gap-6 mt-8 font-mono text-xs uppercase tracking-wider">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors inline-flex items-center gap-2"
              >
                <span>{language === 'en' ? 'SELECTED WORKS' : 'PROYEK PILIHAN'}</span>
                <span>↓</span>
              </a>
              <a
                href="mailto:iqbalfathonah20@gmail.com"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                EMAIL ↗
              </a>
              <a
                href="https://linkedin.com/in/iqbaldwifathonah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                LINKEDIN ↗
              </a>
              <a
                href="https://github.com/iqbaldwifathonah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                GITHUB ↗
              </a>
            </div>
          </div>

          {/* Minimalist Profile Picture Badge */}
          <div className="lg:col-span-4 flex items-center lg:justify-end gap-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-2 ring-zinc-300 dark:ring-zinc-700 bg-zinc-950 shrink-0">
              <img
                src={profilePic || '/profile.png'}
                alt="Iqbal Dwi Fathonah"
                className="w-full h-full object-cover scale-[1.35] -translate-y-1.5"
                style={{ objectPosition: 'center 5%' }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/foto-nobg.png';
                }}
              />
            </div>
            <div className="font-mono text-xs text-zinc-500 leading-tight">
              <span className="block font-bold text-zinc-900 dark:text-white">CORE TOOLKIT</span>
              <span>EXCEL • SQL • BI</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}