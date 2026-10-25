import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0c] text-zinc-500 text-xs font-mono border-t border-zinc-800/80 py-8 px-6 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Kiri */}
        <div>
          <span>
            Iqbal Dwi Fathonah — Data Analyst &amp; Business Intelligence · Yogyakarta, Indonesia
          </span>
        </div>

        {/* Kanan */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-lime-400 inline-block animate-pulse" />
          <span className="text-zinc-400">Available for full-time roles</span>
        </div>
      </div>
    </footer>
  );
}
