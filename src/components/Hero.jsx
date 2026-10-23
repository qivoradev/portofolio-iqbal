import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Hero = ({ setActiveTab, language = 'en' } = {}) => {
  const isEn = language === 'en';

  return (
    <section className="w-full max-w-xl mx-auto rounded-3xl bg-zinc-900/50 border border-zinc-800/80 p-8 sm:p-10 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center relative overflow-hidden my-auto">
      
      {/* Subtle Ambient Glow di dalam kartu */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      {/* 1. Foto Profil Lingkaran Avatar Emerald */}
      <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-gradient-to-b from-teal-400 to-emerald-600 border-2 border-emerald-300/40 shadow-[0_10px_25px_rgba(20,184,166,0.3)] flex items-center justify-center mx-auto mb-5 shrink-0">
        <img
          src="/profile.png"
          alt="Iqbal Dwi Fathonah"
          className="w-full h-full object-cover object-[center_25%] scale-[1.65] -translate-y-1 select-none pointer-events-none drop-shadow-md"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/foto-nobg.png';
          }}
        />
      </div>

      {/* 2. Status Badge Ketersediaan */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-3">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        {isEn ? 'Available for Work' : 'Terbuka untuk Peluang Kerja'}
      </div>

      {/* 3. Identitas & Role */}
      <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">
        Iqbal Dwi Fathonah
      </h1>
      <p className="text-sm sm:text-base font-semibold text-orange-500 mb-3">
        Data Analyst
      </p>

      {/* 4. Tautan Sosial Media */}
      <div className="flex items-center justify-center gap-4 text-zinc-400 mb-4">
        <a
          href="https://github.com/qivoradev"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:text-white hover:bg-zinc-800/60 transition-colors"
          aria-label="GitHub"
        >
          <FiGithub className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/iqbaldwifathonah"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:text-white hover:bg-zinc-800/60 transition-colors"
          aria-label="LinkedIn"
        >
          <FiLinkedin className="w-5 h-5" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:text-white hover:bg-zinc-800/60 transition-colors"
          aria-label="Instagram"
        >
          <FiInstagram className="w-5 h-5" />
        </a>
      </div>

      {/* 5. Bio Singkat & Ringkas */}
      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-md mb-6 font-normal">
        {isEn
          ? 'Data Analyst with an Information Technology background, turning raw data into interactive dashboards and actionable strategic insights.'
          : 'Data Analyst berlatar belakang Teknologi Informasi yang berfokus mengolah data mentah menjadi dashboard interaktif dan insight bisnis strategis.'}
      </p>

      {/* 6. Single Primary CTA Button */}
      <button
        type="button"
        onClick={() => setActiveTab && setActiveTab('projects')}
        className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-medium text-xs sm:text-sm transition-all shadow-lg shadow-orange-500/20 cursor-pointer"
      >
        <span>{isEn ? 'View Projects' : 'Lihat Proyek'}</span>
        <span className="text-base leading-none">&rarr;</span>
      </button>

    </section>
  );
};

export default Hero;
