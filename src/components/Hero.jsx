import React, { useState, useEffect } from 'react';
import defaultAvatar from '../assets/profile.png';

const ROLES = [
  "I'M A DATA ANALYST",
  "I'M A BI SPECIALIST",
  "I'M A SQL MODELER"
];

export default function Hero({ language = 'id', profilePic } = {}) {
  const imageSrc = profilePic || defaultAvatar || '/profile.png';
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setText(currentRole.substring(0, isDeleting ? text.length - 1 : text.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-zinc-50 dark:bg-[#0a0a0c] text-zinc-900 dark:text-white transition-colors overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Grid: Rata tengah di Mobile, Split di Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Kolom Teks (7 Kolom) */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/70 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
              <span>YOGYAKARTA, ID • GMT+7</span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 dark:text-white leading-none">
                I'm Iqbal
              </h1>

              {/* Tag Box Aksen Neon Hijau dengan Typewriter */}
              <div className="mt-4 inline-block">
                <div className="px-4 py-2 bg-white dark:bg-zinc-900 border-2 border-lime-500 dark:border-lime-400 rounded-lg shadow-[0_0_20px_rgba(132,204,22,0.2)] flex items-center gap-1 font-mono font-bold text-lg sm:text-2xl text-lime-600 dark:text-lime-400 tracking-wider">
                  <span>{text}</span>
                  <span className="w-2.5 h-6 bg-lime-500 dark:bg-lime-400 inline-block animate-pulse ml-1" />
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl font-sans">
              {language === 'en'
                ? 'Information Technology Graduate (2026). Specializing in turning complex relational schemas into clean SQL models, automated Microsoft Excel dashboards, and executive business insights.'
                : 'Lulusan Teknologi Informasi (2026). Berfokus menerjemahkan dataset mentah menjadi model query SQL terstruktur, otomatisasi dashboard Microsoft Excel, serta perumusan insight bisnis strategis.'}
            </p>

            {/* Tombol Tunggal (Lihat Proyek) */}
            <div className="pt-2">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-lime-400 hover:bg-lime-300 text-black font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-lime-400/25 inline-flex items-center gap-2 transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>{language === 'en' ? 'Explore Works' : 'Lihat Proyek'}</span>
                <span className="text-base">→</span>
              </a>
            </div>

            {/* Metrik Statistik */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-zinc-200 dark:border-zinc-800/80 w-full max-w-lg font-mono text-center lg:text-left">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white block">
                  2<span className="text-lime-500 dark:text-lime-400">+</span>
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mt-0.5">
                  Production BI
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white block">
                  100<span className="text-lime-500 dark:text-lime-400">%</span>
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

          {/* Kolom Kanan: Blok Neon Green + Foto Profil Besar HD Menjulang */}
          <div className="lg:col-span-5 relative flex justify-center mt-4 lg:mt-0">
            
            {/* Box Neon Green Besar */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[440px] sm:h-[500px] rounded-3xl bg-lime-400 dark:bg-lime-400 overflow-hidden shadow-2xl flex items-end justify-center">
              
              {/* Foto Profil: Skala besar mengisi box dari dasar */}
              <img
                src={imageSrc}
                alt="Iqbal Dwi Fathonah"
                className="w-full h-full object-cover object-bottom scale-125 origin-bottom"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/profile.png';
                }}
              />

              {/* Tag Status di sudut kiri atas foto */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-white font-mono text-[11px] font-bold">
                DATA SPECIALIST
              </div>
            </div>

            {/* Floating Tools Badges Melayang di Kanan */}
            <div className="absolute -right-2 sm:-right-6 top-10 flex flex-col gap-3">
              <div className="px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center gap-2 text-xs font-mono font-bold text-zinc-900 dark:text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>EXCEL</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center gap-2 text-xs font-mono font-bold text-zinc-900 dark:text-white">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <span>SQL</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center gap-2 text-xs font-mono font-bold text-zinc-900 dark:text-white">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>LOOKER</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center gap-2 text-xs font-mono font-bold text-zinc-900 dark:text-white">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span>FIGMA</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}