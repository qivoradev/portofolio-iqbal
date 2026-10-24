import React from 'react';

export default function LoadingScreen({ progress = 0 }) {
  const roundedProgress = Math.min(100, Math.round(progress));

  return (
    <div className="bg-[#0a0a0c] text-white fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 select-none">
      {/* Monogram Box */}
      <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500 font-bold font-mono text-xl mb-4 shadow-xl shadow-amber-500/10 animate-pulse">
        IDF
      </div>

      {/* Headline & Sub-label */}
      <h1 className="font-bold text-lg sm:text-xl text-zinc-100 tracking-tight mb-1">
        IQBAL DWI FATHONAH
      </h1>
      <p className="text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase mb-6">
        DATA ANALYTICS // PORTFOLIO
      </p>

      {/* Slim Progress Bar */}
      <div className="w-56 sm:w-64">
        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mb-1.5 uppercase tracking-wider">
          <span>INITIALIZING</span>
          <span className="text-amber-400 font-semibold">{roundedProgress}%</span>
        </div>
        <div className="w-full h-1 rounded-full bg-zinc-900 overflow-hidden border border-zinc-800/80">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-150 ease-out"
            style={{ width: `${roundedProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
