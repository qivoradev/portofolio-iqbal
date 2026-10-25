import React from 'react';

export default function Hero({ language, profilePic = '/profile.png' }) {
  return (
    <section id="home" className="pt-28 pb-20 sm:pt-40 sm:pb-32 bg-zinc-50 dark:bg-[#0a0a0b] text-zinc-900 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* KIRI: Narasi & Metrik */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-lime-400 animate-pulse" />
              Yogyakarta, ID • Available for Roles
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15] mb-6">
              Hi, I'm Iqbal. <br />
              <span className="text-emerald-600 dark:text-lime-400">Data Analyst & BI Specialist.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mb-10">
              {language === 'en'
                ? 'Information Technology Graduate (2026). Specializing in transforming complex relational database schemas into clean SQL models, automated Microsoft Excel dashboards, and executive insights.'
                : 'Lulusan Teknologi Informasi (2026). Berfokus menerjemahkan dataset mentah menjadi model query SQL terstruktur, otomatisasi dashboard Microsoft Excel, serta formulasi insight bisnis.'}
            </p>

            <div className="grid grid-cols-3 gap-6 sm:gap-12 w-full max-w-xl border-y border-zinc-200 dark:border-white/10 py-6 mb-10 font-mono">
              <div className="text-center lg:text-left">
                <span className="text-3xl font-bold text-zinc-900 dark:text-white block mb-1">+2</span>
                <span className="text-[11px] text-zinc-500 uppercase tracking-widest">Dashboards</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="text-3xl font-bold text-emerald-600 dark:text-lime-400 block mb-1">100%</span>
                <span className="text-[11px] text-zinc-500 uppercase tracking-widest">Data Cleansed</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="text-3xl font-bold text-zinc-900 dark:text-white block mb-1">2026</span>
                <span className="text-[11px] text-zinc-500 uppercase tracking-widest">IT Graduate</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-zinc-900 dark:bg-lime-400 hover:bg-zinc-800 dark:hover:bg-lime-300 text-white dark:text-zinc-950 font-bold text-sm transition-all shadow-md"
              >
                {language === 'en' ? 'Explore Works' : 'Lihat Proyek'}
              </a>
              <a
                href="mailto:iqbalfathonah20@gmail.com"
                className="px-8 py-3.5 rounded-full bg-white dark:bg-transparent border border-zinc-300 dark:border-white/20 hover:border-zinc-400 dark:hover:border-white/40 text-zinc-700 dark:text-zinc-300 font-bold text-sm transition-all"
              >
                {language === 'en' ? 'Contact Me' : 'Hubungi Saya'}
              </a>
            </div>
            
          </div>

          {/* KANAN: Foto Profil Elegan */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-white/10 overflow-hidden shadow-2xl">
              <img
                src={profilePic || '/profile.png'}
                alt="Iqbal Dwi Fathonah"
                className="w-full h-full object-cover object-bottom scale-105 origin-bottom"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/profile.png';
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}