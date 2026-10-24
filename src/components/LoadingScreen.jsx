import React from 'react';

export default function LoadingScreen({ progress = 0 }) {
  return (
    <div className="fixed inset-0 z-50 bg-[#09090b] flex flex-col items-center justify-center p-4 select-none">
      {/* Brand Tagline Monospace */}
      <p className="font-mono text-[11px] tracking-[0.25em] text-zinc-500 uppercase mb-3 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        IQBAL.DF // SYSTEM_INITIALIZATION
      </p>

      {/* Angka Persentase Digital */}
      <div className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-4">
        {Math.round(progress)}
        <span className="text-orange-500 text-lg sm:text-xl font-normal ml-0.5">%</span>
      </div>

      {/* Progress Bar Ultra Ramping (2px Line) */}
      <div className="w-64 sm:w-80 h-[2px] bg-zinc-800 rounded-full overflow-hidden relative mb-4">
        <div
          className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(249,115,22,0.4)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Status Log Dinamis */}
      <p className="font-mono text-[11px] text-zinc-500 tracking-wider h-4">
        {progress < 35 && '> READING_DATA_MODELS...'}
        {progress >= 35 && progress < 70 && '> COMPILING_SQL_QUERIES...'}
        {progress >= 70 && progress < 100 && '> INITIALIZING_DASHBOARDS...'}
        {progress >= 100 && '> SYSTEM_READY'}
      </p>
    </div>
  );
}
