import React from 'react';

export default function LoadingScreen({ progress = 0 }) {
  return (
    <div className="bg-[#0a0a0c] text-white fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 transition-opacity duration-500 select-none">
      {/* Logo / Inisial */}
      <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500 font-bold font-mono text-lg mb-4 shadow-xl animate-pulse">
        IDF
      </div>

      {/* Teks Sambutan Hangat */}
      <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1">
        PORTFOLIO // 2026
      </p>
      <h2 className="text-base sm:text-lg font-bold text-zinc-100 mb-4 text-center">
        Selamat Datang di Portofolio Iqbal D.F
      </h2>

      {/* Minimalist Progress Bar */}
      <div className="w-48 h-1 rounded-full bg-zinc-900 overflow-hidden border border-zinc-800/60">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
