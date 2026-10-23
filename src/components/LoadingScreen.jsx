import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [statusText, setStatusText] = useState('BOOTING_CONSOLE...');

  useEffect(() => {
    // Interval lebih rapat (30ms) dengan kenaikan kecil (1-3%) agar pergerakan bar sangat mulus
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatusText('SYSTEM_READY [OK]');
          // Tahan sejenak di 100% agar terbaca selesai
          setTimeout(() => setIsFading(true), 300);
          setTimeout(() => onFinish(), 850);
          return 100;
        }

        // Kenaikan bertahap halus (total waktu ~2.2 detik)
        const next = prev + 1;
        
        // Update teks status analitis seiring kenaikan persentase
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
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09090b] text-white transition-opacity duration-500 ease-in-out select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-72 max-w-[85vw] flex flex-col items-center">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4 font-mono text-xs text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
          <span>iqbal@analytics-workspace:~</span>
        </div>

        {/* Progress Bar Konsol */}
        <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden p-[1px] border border-zinc-800 mb-3 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400 rounded-full transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Subtitle & Angka Persentase */}
        <div className="w-full flex items-center justify-between font-mono text-[11px] text-zinc-500">
          <span className="tracking-wider text-zinc-400">{statusText}</span>
          <span className="text-orange-400 font-semibold">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
