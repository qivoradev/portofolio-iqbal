import React from 'react';
import defaultAvatar from '../assets/profile.png';

const tickerItems = [
  "SQL RELATIONAL DATA MODELING",
  "MICROSOFT EXCEL BI AUTOMATION",
  "EXECUTIVE KPI DASHBOARDS",
  "ROOT-CAUSE & MARGIN DIAGNOSTICS",
  "GOOGLE LOOKER STUDIO REPORTING",
  "FIGMA DASHBOARD WIREFRAMING"
];

export default function Hero({ language = 'id', profilePic } = {}) {
  const avatarSrc = profilePic || defaultAvatar || '/profile.png';

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-white transition-colors overflow-hidden">
      
      {/* Subtle Ambient Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-gradient-to-b from-lime-500/10 via-emerald-500/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid 2 Kolom Seimbang: 7 Kiri, 5 Kanan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4">
          
          {/* Kolom Kiri */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-200/60 dark:bg-white/[0.04] border border-zinc-300 dark:border-white/10 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-lime-500 dark:bg-lime-400 animate-pulse shadow-[0_0_8px_#a3e635]" />
              <span>YOGYAKARTA, ID • AVAILABLE FOR ROLES</span>
            </div>

            {/* Nama Besar & Role Badge */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.08]">
                Iqbal Dwi <br className="hidden sm:inline" />
                <span className="text-zinc-400 dark:text-zinc-500">Fathonah</span>
              </h1>
              
              <div className="inline-block px-3 py-1 rounded-md bg-zinc-200/80 dark:bg-lime-400/10 border border-zinc-300 dark:border-lime-400/30 text-lime-700 dark:text-lime-400 font-mono text-xs font-bold tracking-widest uppercase">
                DATA ANALYST & BUSINESS INTELLIGENCE
              </div>
            </div>

            {/* Deskripsi Nilai Bisnis */}
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl font-sans">
              {language === 'en'
                ? 'Information Technology Graduate (2026). Specializing in transforming complex relational database schemas into clean SQL models, automated Microsoft Excel dashboards, and executive insights that drive strategic business decisions.'
                : 'Lulusan Teknologi Informasi (2026). Berfokus menerjemahkan dataset mentah menjadi model query SQL terstruktur, otomatisasi dashboard Microsoft Excel, serta formulasi insight bisnis terukur untuk pengambilan keputusan strategis.'}
            </p>

            {/* Metrik Garis Pemisah Vertikal Sawad (Bukan Kotak Bertingkat) */}
            <div className="flex items-center justify-center lg:justify-start divide-x divide-zinc-200 dark:divide-white/10 pt-4 border-t border-zinc-200 dark:border-white/10 w-full max-w-lg font-mono">
              <div className="pr-6 text-left">
                <span className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white block leading-none">
                  +2
                </span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mt-1.5">
                  Case Studies
                </span>
              </div>
              <div className="px-6 text-left">
                <span className="text-3xl sm:text-4xl font-extrabold text-lime-600 dark:text-lime-400 block leading-none">
                  100%
                </span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mt-1.5">
                  SQL Cleansed
                </span>
              </div>
              <div className="pl-6 text-left">
                <span className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white block leading-none">
                  2026
                </span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mt-1.5">
                  IT Graduate
                </span>
              </div>
            </div>

            {/* Tombol Aksi */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-7 py-3 rounded-full bg-zinc-900 dark:bg-lime-400 hover:bg-zinc-800 dark:hover:bg-lime-300 text-white dark:text-black font-extrabold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_15px_rgba(163,230,53,0.2)] inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{language === 'en' ? 'Explore Works' : 'Lihat Proyek'}</span>
                <span>↓</span>
              </a>

              <a
                href="https://linkedin.com/in/iqbaldwifathonah"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/30 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white font-medium text-xs sm:text-sm transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>LinkedIn</span>
                <span className="text-zinc-400 text-xs">↗</span>
              </a>
            </div>

          </div>

          {/* Kolom Kanan: Foto Profil Kartu Sawad (5 Kolom) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              
              {/* Kartu Border Framer Sawad */}
              <div className="relative w-full aspect-[4/5] rounded-[32px] bg-gradient-to-b from-zinc-200 via-zinc-100 to-zinc-300 dark:from-white/[0.08] dark:to-white/[0.02] border border-zinc-300 dark:border-white/10 overflow-hidden shadow-2xl flex items-end justify-center">
                
                {/* Foto Profil HD */}
                <img
                  src={avatarSrc}
                  alt="Iqbal Dwi Fathonah"
                  className="w-full h-full object-cover object-bottom scale-105 origin-bottom"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/profile.png';
                  }}
                />

                {/* Fade-out Gradasi Transparan Bawah (Menghilangkan kesan kemeja terpotong kaku) */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-50 dark:from-[#09090b] via-zinc-50/60 dark:via-[#09090b]/60 to-transparent pointer-events-none" />

                {/* Role Chip di Bawah Foto */}
                <div className="absolute bottom-5 left-5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-white/15 backdrop-blur-md flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-lime-500 dark:bg-lime-400 animate-pulse" />
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-zinc-900 dark:text-white tracking-wider uppercase">
                    DATA SPECIALIST
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Infinite Running Ticker Sawad */}
      <div className="mt-16 sm:mt-24 py-4 border-y border-zinc-200 dark:border-white/[0.08] bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex gap-8 font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 w-max">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 shrink-0">
              <span className="text-zinc-800 dark:text-zinc-300 font-semibold hover:text-lime-500 dark:hover:text-lime-400 transition-colors">{item}</span>
              <span className="text-lime-500 dark:text-lime-400">•</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}