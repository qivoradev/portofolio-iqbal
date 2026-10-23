import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [statusText, setStatusText] = useState('BOOTING_CONSOLE...');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatusText('SYSTEM_READY [OK]');
          setTimeout(() => setIsFading(true), 300);
          setTimeout(() => onFinish(), 850);
          return 100;
        }

        const next = prev + 1;
        if (next === 25) setStatusText('READING_EXCEL_MODELS...');
        if (next === 60) setStatusText('COMPUTING_METRICS & KPIS...');
        if (next === 90) setStatusText('FINALIZING_DASHBOARDS...');

        return next;
      });
    }, 22);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09090b] text-white overflow-hidden transition-opacity duration-500 ease-in-out select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* 1. Ambient Glow Colors (Pendaran Cahaya Oranye & Zamrud) */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* 2. Background Grid Pattern Halus */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
        style={{
          backgroundImage: `radial-gradient(circle, #71717a 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* 3. Kotak Konsol Pemuat (Card Frame) */}
      <div className="relative z-10 w-80 max-w-[88vw] p-6 rounded-2xl border border-zinc-800/90 bg-zinc-950/70 backdrop-blur-xl shadow-2xl flex flex-col items-center">
        {/* Top Mini Header */}
        <div className="w-full flex items-center justify-between pb-3 mb-4 border-b border-zinc-800/80 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] text-zinc-500">iqbal@workspace</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden p-[1px] border border-zinc-800 mb-3 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400 rounded-full transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Subtitle & Angka Persentase */}
        <div className="w-full flex items-center justify-between font-mono text-[11px]">
          <span className="tracking-wider text-zinc-400">{statusText}</span>
          <span className="text-orange-400 font-semibold">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
