import React, { useState, useRef } from 'react';

export default function Hero({ language, profilePic = '/profile.png' }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.log("Audio play error:", e);
      });
    }
  };

  const metrics = [
    { label: language === 'en' ? 'Data Modeled' : 'Volume Data Dimodelkan', value: '$2.29M+' },
    { label: language === 'en' ? 'Core Tech Stack' : 'Toolkit Utama', value: 'Excel & SQL' },
    { label: language === 'en' ? 'Data Quality' : 'Integritas Data', value: '100% Cleansed' },
  ];

  return (
    <section id="home" className="pt-24 pb-12 sm:pt-32 sm:pb-16">
      {/* Background Chill Lo-fi Audio */}
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"
        loop
        preload="auto"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Spotify Artist Card */}
        <div className="rounded-3xl bg-gradient-to-b from-zinc-800/90 via-zinc-900/90 to-zinc-950 border border-zinc-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-8">
            
            {/* Spotify Circular Artist Avatar */}
            <div className="relative group shrink-0">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-2xl ring-4 ring-emerald-500/20 bg-zinc-900">
                <img
                  src={profilePic || '/profile.png'}
                  alt="Iqbal Dwi Fathonah"
                  className="w-full h-full rounded-full object-cover scale-[1.3] -translate-y-1 transition-transform duration-500 group-hover:scale-125"
                  style={{ objectPosition: 'center 12%' }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/foto-nobg.png';
                  }}
                />
              </div>

              {/* Play/Pause Button on Avatar */}
              <button
                type="button"
                onClick={togglePlay}
                title={isPlaying ? "Pause Ambient Music" : "Play Ambient Music"}
                aria-label={isPlaying ? "Pause Ambient Music" : "Play Ambient Music"}
                className="absolute bottom-1 right-1 w-11 h-11 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-black flex items-center justify-center font-bold shadow-xl transition-all hover:scale-110 active:scale-95 cursor-pointer border-0"
              >
                {isPlaying ? (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
            </div>

            {/* Profile Meta Details */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold tracking-wide">
                  <svg className="w-3.5 h-3.5 fill-current text-emerald-400" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  VERIFIED DATA ANALYST
                </span>
                <span className="text-zinc-500 text-xs font-mono">• Yogyakarta, ID</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-2">
                Iqbal Dwi Fathonah
              </h1>

              <p className="text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed mb-5">
                {language === 'en'
                  ? 'Information Technology Graduate (2026). Curating data tracks: turning raw database tables into structured SQL models and automated Excel dashboards.'
                  : 'Lulusan Teknologi Informasi (2026). Mengkurasi track data: menerjemahkan tabel mentah menjadi model SQL terstruktur dan dashboard Excel otomatis.'}
              </p>

              {/* Action Buttons */}
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
                  href="https://linkedin.com/in/iqbaldwifathonah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-zinc-700 hover:border-zinc-400 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all inline-flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                  <span className="text-xs text-zinc-500">↗</span>
                </a>
              </div>

            </div>

          </div>

          {/* Spotify "Data Metrics Analyzed" Bar */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-zinc-800 text-center font-mono">
            {metrics.map((m) => (
              <div key={m.label}>
                <span className="text-lg sm:text-2xl font-black text-emerald-400 block tracking-tight">
                  {m.value}
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider block mt-0.5">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Mini Now Playing Bar */}
          <div className="mt-6 pt-4 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-3">
              <button 
                type="button"
                onClick={togglePlay}
                className="flex items-end gap-0.5 h-4 cursor-pointer bg-transparent border-0 p-0"
                title="Toggle Music"
                aria-label="Toggle Music"
              >
                <span className={`w-1 bg-[#1DB954] rounded-full transition-all ${isPlaying ? 'h-4 animate-[bounce_0.8s_infinite]' : 'h-1.5'}`} />
                <span className={`w-1 bg-[#1DB954] rounded-full transition-all ${isPlaying ? 'h-3 animate-[bounce_1.2s_infinite]' : 'h-3'}`} />
                <span className={`w-1 bg-[#1DB954] rounded-full transition-all ${isPlaying ? 'h-4 animate-[bounce_0.6s_infinite]' : 'h-2'}`} />
              </button>
              <span className="text-zinc-400 text-[11px]">
                {isPlaying ? 'NOW STREAMING' : 'PAUSED'}: <strong className="text-white">Chill_Data_Workflow.mp3</strong>
              </span>
            </div>

            <div className="flex items-center gap-3 text-zinc-400 text-[11px]">
              <span className="text-emerald-400">● Available for Hire</span>
              <span>•</span>
              <span>Status: Active</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}