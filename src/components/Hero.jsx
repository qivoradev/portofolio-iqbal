import React, { useState } from 'react';

export default function Hero({ language, profilePic = '/profile.png' }) {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section id="home" className="pt-24 pb-14 sm:pt-32 sm:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Spotify-like Header Card */}
        <div className="rounded-3xl bg-gradient-to-b from-zinc-800/80 to-zinc-950 border border-zinc-800/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-8">
            
            {/* Album Cover / Profile Avatar */}
            <div className="relative group shrink-0">
              <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-emerald-500/30 bg-zinc-900">
                <img
                  src={profilePic || '/profile.png'}
                  alt="Iqbal Dwi Fathonah"
                  className="w-full h-full object-cover scale-125 translate-y-2 transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: 'center 10%' }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/foto-nobg.png';
                  }}
                />
              </div>
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#1DB954] text-black flex items-center justify-center font-bold shadow-lg hover:scale-110 active:scale-95 transition-transform cursor-pointer border-0"
                aria-label={isPlaying ? 'Pause' : 'Play'}
                title={isPlaying ? 'Pause Track' : 'Play Track'}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  {isPlaying ? (
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  ) : (
                    <path d="M8 5v14l11-7z" />
                  )}
                </svg>
              </button>
            </div>

            {/* Profile Meta Details */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-semibold tracking-wide">
                  <svg className="w-3 h-3 fill-current text-emerald-400" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  VERIFIED DATA ANALYST
                </span>
                <span className="text-zinc-500 text-xs">• Yogyakarta, ID</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-2">
                Iqbal Dwi Fathonah
              </h1>

              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed mb-4">
                {language === 'en'
                  ? 'Information Technology Graduate (2026). Curating data tracks: turning raw tables into structured SQL models and automated Excel dashboards.'
                  : 'Lulusan Teknologi Informasi (2026). Mengkurasi playlist data: menerjemahkan tabel mentah menjadi model SQL terstruktur dan dashboard Excel otomatis.'}
              </p>

              {/* Action Buttons (Spotify Style) */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <a
                  href="#projects"
                  className="px-6 py-2.5 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-black text-xs sm:text-sm font-bold tracking-wide transition-all transform hover:scale-105 shadow-md inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span>{language === 'en' ? 'Play Case Studies' : 'Putar Studi Kasus'}</span>
                </a>

                <a
                  href="mailto:iqbalfathonah20@gmail.com"
                  className="px-5 py-2.5 rounded-full border border-zinc-700 hover:border-white text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all"
                >
                  Contact
                </a>
              </div>

            </div>

          </div>

          {/* Mini "Now Playing Bar" Inside Hero */}
          <div className="mt-8 pt-5 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <div className="flex items-end gap-0.5 h-4">
                <span className={`w-1 bg-[#1DB954] rounded-full ${isPlaying ? 'animate-[bounce_0.8s_infinite]' : 'h-2'}`} />
                <span className={`w-1 bg-[#1DB954] rounded-full ${isPlaying ? 'animate-[bounce_1.2s_infinite]' : 'h-3'}`} />
                <span className={`w-1 bg-[#1DB954] rounded-full ${isPlaying ? 'animate-[bounce_0.6s_infinite]' : 'h-1'}`} />
              </div>
              <span className="text-zinc-400">
                CURRENT TRACK: <strong className="text-white">Superstore_Profitability_Analysis.xlsx</strong>
              </span>
            </div>

            <div className="flex items-center gap-4 text-zinc-400">
              <span className="text-emerald-400">● 100% SQL Cleansed</span>
              <span>•</span>
              <span>Available for Hire</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}