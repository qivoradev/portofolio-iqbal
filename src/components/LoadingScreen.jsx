import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Animasi kenaikan angka progress bar (0 -> 100%)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFading(true), 150);
          setTimeout(() => onFinish(), 650);
          return 100;
        }
        // Naik bertahap cepat
        const increment = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09090b] text-white transition-opacity duration-500 select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-64 max-w-[85vw] flex flex-col items-center">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4 font-mono text-xs text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
          <span>iqbal@workspace:~</span>
        </div>

        {/* Progress Bar Konsol */}
        <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden p-[1px] border border-zinc-700/50 mb-3">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Subtitle & Angka Persentase */}
        <div className="w-full flex items-center justify-between font-mono text-[11px] text-zinc-500">
          <span className="tracking-wider">INITIALIZING_DATA...</span>
          <span className="text-zinc-300 font-semibold">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
