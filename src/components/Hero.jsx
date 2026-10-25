import React, { useState, useEffect } from 'react';
import defaultAvatar from '../assets/profile.png';

export default function Hero({ language = 'id', profilePic } = {}) {
  const avatarSrc = profilePic || defaultAvatar || '/profile.png';
  const fullWord = "DATA ANALYST";
  const [displayedWord, setDisplayedWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Animasi Typewriter khusus untuk kata "DATA ANALYST"
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedWord === fullWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedWord === '') {
        setIsDeleting(false);
      } else {
        setDisplayedWord(fullWord.substring(0, isDeleting ? displayedWord.length - 1 : displayedWord.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedWord, isDeleting]);

  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-zinc-50 dark:bg-[#0a0a0c] text-zinc-900 dark:text-white transition-colors overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Kolom Kiri: Teks & Metrik (7 Kolom) */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/60 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>YOGYAKARTA, ID • GMT+7</span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 dark:text-white leading-none">
                I'm Iqbal
              </h1>

              {/* Tag Box: "I'M A " Statis, Hanya "DATA ANALYST" yang Mengetik */}
              <div className="mt-4 inline-block">
                <div className="px-4 py-2 bg-white dark:bg-zinc-900 border-2 border-emerald-500/80 dark:border-emerald-400 rounded-xl shadow-sm flex items-center font-mono font-bold text-lg sm:text-2xl text-emerald-600 dark:text-emerald-400 tracking-wider">
                  <span className="mr-2">I'M A</span>
                  <span>{displayedWord}</span>
                  <span className="w-2 h-5 sm:h-6 bg-emerald-500 dark:bg-emerald-400 inline-block animate-pulse ml-1" />
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl font-sans">
              {language === 'en'
                ? 'Information Technology Graduate (2026). Specializing in turning complex relational schemas into clean SQL models, automated Microsoft Excel dashboards, and executive business insights.'
                : 'Lulusan Teknologi Informasi (2026). Berfokus menerjemahkan dataset mentah menjadi model query SQL terstruktur, otomatisasi dashboard Microsoft Excel, serta perumusan insight bisnis strategis.'}
            </p>

            {/* Tombol Utama Tunggal */}
            <div className="pt-2">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-emerald-600 dark:hover:bg-emerald-400 font-bold text-sm tracking-wide transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{language === 'en' ? 'Explore Works' : 'Lihat Proyek'}</span>
                <span>→</span>
              </a>
            </div>

            {/* Metrik Portofolio Bersih */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-200 dark:border-zinc-800/80 w-full max-w-md font-mono text-center lg:text-left">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white block">
                  2<span className="text-emerald-500">+</span>
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mt-0.5">
                  Production BI
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white block">
                  100<span className="text-emerald-500">%</span>
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mt-0.5">
                  SQL Cleansed
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white block">
                  2026
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mt-0.5">
                  IT Graduate
                </span>
              </div>
            </div>

          </div>

          {/* Kolom Kanan: Foto Profil Studio Card + Logo Tools Asli (5 Kolom) */}
          <div className="lg:col-span-5 relative flex justify-center mt-2 lg:mt-0">
            
            {/* Studio Card (Bukan Green Screen, Melainkan Modern Studio Card) */}
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] h-[430px] sm:h-[490px] rounded-3xl bg-gradient-to-b from-zinc-200 via-zinc-100 to-zinc-300 dark:from-zinc-800 dark:via-zinc-850 dark:to-zinc-900 border border-zinc-300 dark:border-zinc-700/80 overflow-hidden shadow-2xl flex items-end justify-center">
              
              <img
                src={avatarSrc}
                alt="Iqbal Dwi Fathonah"
                className="w-full h-full object-cover object-bottom scale-110 origin-bottom"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/profile.png';
                }}
              />

              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-[11px] font-semibold shadow-sm">
                DATA SPECIALIST
              </div>
            </div>

            {/* Floating Tools Badges dengan Logo Asli */}
            <div className="absolute -right-2 sm:-right-6 top-10 flex flex-col gap-3">
              
              {/* Microsoft Excel */}
              <div className="w-11 h-11 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl flex items-center justify-center p-2 transform hover:scale-110 transition-transform cursor-pointer" title="Microsoft Excel">
                <svg className="w-full h-full" viewBox="0 0 24 24">
                  <path fill="#107C41" d="M16.5 2H7.5A2.5 2.5 0 0 0 5 4.5v15A2.5 2.5 0 0 0 7.5 22h9a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 16.5 2z"/>
                  <path fill="#FFF" d="M7.7 7.5l2.6 4.5-2.6 4.5h2.1l1.5-2.9 1.5 2.9h2.1l-2.6-4.5 2.6-4.5h-2.1l-1.5 2.9-1.5-2.9H7.7z"/>
                </svg>
              </div>

              {/* PostgreSQL / SQL */}
              <div className="w-11 h-11 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl flex items-center justify-center p-2.5 transform hover:scale-110 transition-transform cursor-pointer" title="SQL / PostgreSQL">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="#336791">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c2.76 0 5 1.79 5 4 0 1.54-1.09 2.87-2.69 3.56l1.92 5.44-1.88.66-1.74-4.94C12.4 13.9 12.2 13.9 12 13.9c-2.76 0-5-1.79-5-4s2.24-4 5-4z"/>
                </svg>
              </div>

              {/* Looker Studio */}
              <div className="w-11 h-11 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl flex items-center justify-center p-2.5 transform hover:scale-110 transition-transform cursor-pointer" title="Google Looker Studio">
                <svg className="w-full h-full" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M3 13h4v8H3z"/>
                  <path fill="#34A853" d="M10 7h4v14h-4z"/>
                  <path fill="#FBBC05" d="M17 3h4v18h-4z"/>
                </svg>
              </div>

              {/* Figma */}
              <div className="w-11 h-11 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl flex items-center justify-center p-2.5 transform hover:scale-110 transition-transform cursor-pointer" title="Figma">
                <svg className="w-full h-full" viewBox="0 0 38 57">
                  <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
                  <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/>
                  <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
                  <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
                  <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
                </svg>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}