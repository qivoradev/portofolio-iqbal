import React from 'react';

export default function LoadingScreen({ progress = 0 }) {
  const currentProgress = Math.min(100, Math.max(0, Math.round(progress)));

  return (
    <div className="bg-[#0a0a0c] text-white fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 select-none">
      {/* Kategori Tipis */}
      <p className="text-[11px] font-mono tracking-[0.3em] text-zinc-500 uppercase mb-4 text-center">
        DATA ANALYTICS // PORTFOLIO
      </p>

      {/* Progress Bar Ramping */}
      <div className="w-60 h-1 bg-zinc-900 rounded-full border border-zinc-800 overflow-hidden mb-3">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full transition-all duration-75"
          style={{ width: `${currentProgress}%` }}
        />
      </div>

      {/* Teks Status Animasi di Bawah Progress Bar */}
      <div className="flex justify-between items-center w-60 text-[10px] font-mono text-zinc-400 px-0.5">
        <span className="animate-pulse">
          {currentProgress < 30 && "Memuat arsitektur data..."}
          {currentProgress >= 30 && currentProgress < 65 && "Mengompilasi formula & metrik KPI..."}
          {currentProgress >= 65 && currentProgress < 90 && "Menyiapkan visualisasi dashboard..."}
          {currentProgress >= 90 && "Sistem siap."}
        </span>
        <span className="text-zinc-300 font-bold">{currentProgress}%</span>
      </div>
    </div>
  );
}
