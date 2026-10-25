import React from 'react';

export default function Footer() {
  return (
    <footer
      className="bg-[#111110] text-[#8A8A86] text-xs font-mono transition-colors"
      style={{
        borderTop: '0.5px solid #252523',
        padding: '28px 24px',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Kiri */}
        <div>
          <span>
            Iqbal Dwi Fathonah — Data Analyst &amp; Business Intelligence · Yogyakarta, Indonesia
          </span>
        </div>

        {/* Kanan */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#22C55E] inline-block animate-pulse" />
          <span className="text-[#8A8A86]">Available for full-time roles</span>
        </div>
      </div>
    </footer>
  );
}
