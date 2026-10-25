import React from 'react';
import defaultAvatar from '../assets/profile.png';

export default function Hero({ language = 'id', profilePic } = {}) {
  const imageSrc = profilePic || defaultAvatar || '/profile.png';

  return (
    <section id="home" className="pt-24 sm:pt-28 pb-16 bg-[#0a0a0c] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid: Teks di Kiri, Banner Foto di Kanan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Kolom Kiri: Teks & Metrik (7 Kolom) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              <span>YOGYAKARTA, ID • GMT+7</span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
                I'm Iqbal
              </h1>

              {/* Tag Box Aksen Neon Hijau ala Mikon */}
              <div className="mt-4 inline-block">
                <div className="px-4 py-2 bg-zinc-900 border-2 border-lime-400 rounded-lg shadow-[0_0_15px_rgba(163,230,53,0.15)] flex items-center gap-1 font-mono font-bold text-lg sm:text-2xl text-lime-400 tracking-wider">
                  <span>I'M A DATA ANALYST</span>
                  <span className="w-2.5 h-6 bg-lime-400 inline-block animate-pulse ml-1" />
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl font-sans">
              {language === 'en'
                ? 'Information Technology Graduate (2026). Specializing in turning complex relational schemas into clean SQL models, automated Microsoft Excel dashboards, and executive business insights.'
                : 'Lulusan Teknologi Informasi (2026). Berfokus menerjemahkan dataset mentah menjadi model query SQL terstruktur, otomatisasi dashboard Microsoft Excel, serta perumusan insight bisnis strategis.'}
            </p>

            {/* Tombol Aksi */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg hover:shadow-lime-400/20 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{language === 'en' ? 'Explore Works' : 'Lihat Proyek'}</span>
                <span>→</span>
              </a>

              <a
                href="mailto:iqbalfathonah20@gmail.com"
                className="px-6 py-3 rounded-full border border-zinc-800 hover:border-zinc-600 bg-zinc-900/60 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                {language === 'en' ? 'Get in touch →' : 'Hubungi Saya →'}
              </a>
            </div>

            {/* Metrik Bawah ala Mikon */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-800/80 font-mono">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white block">
                  2<span className="text-lime-400">+</span>
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider block mt-0.5">
                  Production BI
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white block">
                  100<span className="text-lime-400">%</span>
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider block mt-0.5">
                  SQL Cleansed
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white block">
                  2026
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider block mt-0.5">
                  IT Graduate
                </span>
              </div>
            </div>

          </div>

          {/* Kolom Kanan: Blok Neon Green + Foto Asli HD Penuh (5 Kolom) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Box Background Neon Khas Mikon */}
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl bg-lime-400 overflow-hidden shadow-2xl flex items-end justify-center">
              
              {/* Foto Profil Tampil Penuh HD (Tidak terpotong lingkaran) */}
              <img
                src={imageSrc}
                alt="Iqbal Dwi Fathonah"
                className="w-full h-full object-cover object-top scale-105 translate-y-1"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/profile.png';
                }}
              />

              {/* Tag Overlay Status */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-white font-mono text-[11px] font-bold">
                DATA SPECIALIST
              </div>
            </div>

            {/* Label Vertikal & Tool Stack Floater di Tepi Kanan */}
            <div className="hidden sm:flex flex-col items-center justify-between absolute -right-6 top-6 bottom-6 py-2">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase [writing-mode:vertical-lr] rotate-180">
                TECH EXPERTISE
              </span>
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] font-mono font-bold text-lime-400" title="Excel">
                  XL
                </div>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] font-mono font-bold text-lime-400" title="SQL">
                  SQL
                </div>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] font-mono font-bold text-lime-400" title="Figma">
                  FIG
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}