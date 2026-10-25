import React from 'react';
import defaultAvatar from '../assets/profile.png';

export default function Hero({ language = 'id', profilePic } = {}) {
  const avatarSrc = profilePic || defaultAvatar || '/profile.png';

  const marqueeItems = [
    "SQL RELATIONAL MODELING",
    "EXCEL BI AUTOMATION",
    "INTERACTIVE DASHBOARDS",
    "KPI & MARGIN DIAGNOSTICS",
    "LOOKER STUDIO REPORTING",
    "FIGMA DASHBOARD WIREFRAMING"
  ];

  return (
    <section id="home" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#0a0a0d] text-white overflow-hidden transition-colors">
      
      {/* Sawad Subtle Ambient Glow Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-lime-500/10 via-emerald-500/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Split Grid: 7 Kolom Kiri, 5 Kolom Kanan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Kolom Kiri: Teks & Metrik */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-7">
            
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-md text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse shadow-[0_0_8px_#a3e635]" />
              <span>YOGYAKARTA, ID • GMT+7</span>
            </div>

            {/* Title & Tagline Sawad Style */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Iqbal Dwi <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                  Fathonah
                </span>
              </h1>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-lime-400/10 border border-lime-400/30 text-lime-400 font-mono text-xs font-bold tracking-wider">
                <span>DATA ANALYST & BUSINESS INTELLIGENCE</span>
              </div>
            </div>

            {/* Executive Bio Narrative */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans max-w-xl">
              {language === 'en'
                ? 'Information Technology Graduate (2026). Specializing in transforming complex relational database schemas into clean SQL pipelines, automated Excel dashboards, and actionable executive insights.'
                : 'Lulusan Teknologi Informasi (2026). Berfokus menerjemahkan dataset mentah menjadi model query SQL terstruktur, otomatisasi dashboard Microsoft Excel, serta formulasi insight bisnis terukur untuk pengambilan keputusan.'}
            </p>

            {/* Sawad Style Structured Metrics Box */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg font-mono">
              <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/[0.08] backdrop-blur-sm text-center lg:text-left">
                <span className="text-2xl sm:text-3xl font-black text-white block">
                  +2
                </span>
                <span className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider block mt-1">
                  CASE STUDIES
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/[0.08] backdrop-blur-sm text-center lg:text-left">
                <span className="text-2xl sm:text-3xl font-black text-lime-400 block">
                  100%
                </span>
                <span className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider block mt-1">
                  DATA INTEGRITY
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/[0.08] backdrop-blur-sm text-center lg:text-left">
                <span className="text-2xl sm:text-3xl font-black text-white block">
                  2026
                </span>
                <span className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider block mt-1">
                  IT GRADUATE
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(163,230,53,0.2)] inline-flex items-center gap-2 transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>{language === 'en' ? 'Explore Works' : 'Lihat Proyek'}</span>
                <span>↓</span>
              </a>

              <a
                href="https://linkedin.com/in/iqbaldwifathonah"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-zinc-900/80 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>LinkedIn</span>
                <span className="text-zinc-500 text-xs">↗</span>
              </a>
            </div>

          </div>

          {/* Kolom Kanan: Foto Profil Kartu Sawad (5 Kolom) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              
              {/* Card Container dengan Border Halus & Glow */}
              <div className="relative w-full aspect-[4/5] rounded-[32px] bg-gradient-to-b from-zinc-800/80 to-zinc-950 border border-white/10 overflow-hidden shadow-2xl flex items-end justify-center">
                
                {/* Foto Profil HD */}
                <img
                  src={avatarSrc}
                  alt="Iqbal Dwi Fathonah"
                  className="w-full h-full object-cover object-bottom scale-110 origin-bottom"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/profile.png';
                  }}
                />

                {/* Sawad Bottom Gradient Fade (Membuat badan tidak terpotong garis lurus) */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0a0d] via-[#0a0a0d]/60 to-transparent pointer-events-none" />

                {/* Floating Role Chip di Sudut Kiri Bawah */}
                <div className="absolute bottom-5 left-5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/15 backdrop-blur-md flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                  <span className="font-mono text-[11px] font-bold text-white tracking-wider">
                    BUSINESS INTELLIGENCE
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Sawad Infinite Running Ticker (Pita Berjalan Horizontal) */}
      <div className="mt-16 sm:mt-24 pt-6 pb-6 border-y border-white/[0.08] bg-black/40 backdrop-blur-sm overflow-hidden flex whitespace-nowrap">
        <div className="flex animate-marquee gap-8 font-mono text-xs uppercase tracking-widest text-zinc-400 w-max">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 shrink-0">
              <span className="text-zinc-200 font-semibold hover:text-lime-400 transition-colors">{item}</span>
              <span className="text-lime-400">•</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}