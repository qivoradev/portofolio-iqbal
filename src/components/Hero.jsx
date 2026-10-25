import React from 'react';
import defaultAvatar from '../assets/profile.png';

export default function Hero({ language = 'id', profilePic } = {}) {
  const avatarSrc = profilePic || defaultAvatar || '/profile.png';

  return (
    <section id="home" className="pt-28 pb-14 sm:pt-36 sm:pb-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* macOS Main Window Container */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 shadow-2xl backdrop-blur-md overflow-hidden transition-all">
          
          {/* macOS Window Topbar */}
          <div className="px-4 py-3 bg-zinc-100/90 dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 inline-block shadow-sm" />
              <span className="ml-2 font-mono text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                Iqbal_Dwi_Fathonah — Finder — 80×24
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>YOGYAKARTA • GMT+7</span>
            </div>
          </div>

          {/* Window Body: Profil & Detail */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              
              {/* Profile Avatar Frame macOS Style */}
              <div className="relative shrink-0">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-lg ring-1 ring-zinc-200 dark:ring-zinc-700 bg-zinc-950 flex items-center justify-center">
                  <img
                    src={avatarSrc}
                    alt="Iqbal Dwi Fathonah"
                    className="w-full h-full object-cover scale-[1.4] -translate-y-2 transition-transform duration-300"
                    style={{ objectPosition: 'center 5%' }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/foto-nobg.png';
                    }}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-emerald-500 text-black font-mono font-bold text-[10px] shadow">
                  ONLINE
                </div>
              </div>

              {/* Bio & Identitas */}
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono mb-2">
                  <span>● {language === 'en' ? 'Open for Full-time Roles' : 'Siap untuk Posisi Full-time'}</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-1">
                  Iqbal Dwi Fathonah
                </h1>

                <p className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                  Data Analyst • Business Intelligence & Modeling
                </p>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl mb-6">
                  {language === 'en'
                    ? 'Information Technology Graduate (2026). Specializing in transforming raw relational datasets into structured SQL models, automated Excel dashboards, and executive insights.'
                    : 'Lulusan Teknologi Informasi (2026). Berfokus menerjemahkan dataset mentah menjadi model SQL terstruktur, otomatisasi dashboard Excel interaktif, serta perumusan insight bisnis strategis.'}
                </p>

                {/* macOS Action Buttons */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <a
                    href="#projects"
                    className="px-5 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white text-white dark:text-zinc-900 text-xs font-semibold shadow transition-all inline-flex items-center gap-2"
                  >
                    <span>{language === 'en' ? 'Open Projects' : 'Buka Proyek'}</span>
                    <span className="text-xs">↓</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/iqbaldwifathonah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 text-zinc-700 dark:text-zinc-300 text-xs font-medium transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>LinkedIn</span>
                    <span className="text-xs text-zinc-400">↗</span>
                  </a>

                  <a
                    href="mailto:iqbalfathonah20@gmail.com"
                    className="px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 text-zinc-700 dark:text-zinc-300 text-xs font-medium transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Email</span>
                    <span className="text-xs text-zinc-400">↗</span>
                  </a>
                </div>

              </div>

            </div>

            {/* macOS Status Footer */}
            <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="text-zinc-400">STACK:</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">Excel • SQL • Looker Studio • Figma</span>
              </div>
              <div className="flex items-center gap-2">
                <span>STATUS: VERIFIED CANDIDATE</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}