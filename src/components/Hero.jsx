import React from 'react';
import defaultAvatar from '../assets/profile.png';

export default function Hero({ language, profilePic }) {
  const avatarSrc = profilePic || defaultAvatar || '/profile.png';

  return (
    <section id="home" className="pt-28 pb-14 sm:pt-36 sm:pb-20 bg-[#111110] text-[#E8E6DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-8 text-[11px] font-mono tracking-wider">
          <div className="flex items-center gap-2 text-[#22C55E]">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] inline-block animate-pulse shrink-0" />
            <span className="font-bold">
              {language === 'en' ? 'AVAILABLE FOR FULL-TIME ROLES' : 'TERBUKA UNTUK POSISI FULL-TIME'}
            </span>
          </div>
          <div className="text-[#3E3E3B] font-bold">
            <span>YOGYAKARTA, ID · GMT+7</span>
          </div>
        </div>

        {/* Name Eyebrow */}
        <div className="mb-3">
          <span
            className="text-[11px] font-bold uppercase block text-[#22C55E]"
            style={{ letterSpacing: '0.14em' }}
          >
            IQBAL DWI FATHONAH
          </span>
        </div>

        {/* H1 Hero Headline */}
        <h1
          className="font-extrabold uppercase mb-8"
          style={{
            fontSize: 'clamp(44px, 7.5vw, 88px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.02,
          }}
        >
          <span className="text-[#E8E6DF] block">DATA ANALYST &</span>
          <span className="text-[#2E2E2C] block">BUSINESS INTELLIGENCE</span>
        </h1>

        {/* Divider Full-Width */}
        <div className="w-full my-8" style={{ borderTop: '0.5px solid #252523' }} />

        {/* Bottom Sub-grid: Description & Avatar/Toolkit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          
          {/* Left Column: Narrative & Action Links */}
          <div className="lg:col-span-8">
            <p
              className="text-[#8A8A86] max-w-2xl"
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
              }}
            >
              {language === 'en'
                ? 'Information Technology Graduate (2026). Bridging the gap between raw database schemas and strategic boardroom decisions through structured SQL modeling and automated executive dashboards.'
                : 'Lulusan Teknologi Informasi (2026). Menghubungkan skema basis data mentah dengan keputusan strategis bisnis melalui pemodelan SQL terstruktur dan otomatisasi dashboard eksekutif.'}
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7 mt-8 text-xs font-mono tracking-wider uppercase">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-full text-[#E8E6DF] hover:text-white transition-colors inline-flex items-center gap-2 cursor-pointer font-bold"
                style={{
                  background: '#1A1A18',
                  border: '0.5px solid #2E2E2C',
                  transitionDuration: '0.15s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#22C55E';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2E2E2C';
                }}
              >
                <span>{language === 'en' ? 'SELECTED WORKS' : 'PROYEK PILIHAN'}</span>
                <span>↓</span>
              </a>

              <a
                href="mailto:iqbalfathonah20@gmail.com"
                className="text-[#8A8A86] hover:text-[#E8E6DF] transition-colors"
                style={{ transitionDuration: '0.15s' }}
              >
                EMAIL ↗
              </a>

              <a
                href="https://linkedin.com/in/iqbaldwifathonah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8A8A86] hover:text-[#E8E6DF] transition-colors"
                style={{ transitionDuration: '0.15s' }}
              >
                LINKEDIN ↗
              </a>

              <a
                href="https://github.com/iqbaldwifathonah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8A8A86] hover:text-[#E8E6DF] transition-colors"
                style={{ transitionDuration: '0.15s' }}
              >
                GITHUB ↗
              </a>
            </div>
          </div>

          {/* Right Column: Avatar & Core Toolkit */}
          <div className="lg:col-span-4 flex items-center lg:justify-end gap-4">
            <div
              className="w-[72px] h-[72px] rounded-full overflow-hidden bg-[#1A1A18] shrink-0"
              style={{ border: '0.5px solid #2E2E2C' }}
            >
              <img
                src={avatarSrc}
                alt="Iqbal Dwi Fathonah"
                className="w-full h-full object-cover scale-125 -translate-y-1"
                style={{ objectPosition: 'center 10%' }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/foto-nobg.png';
                }}
              />
            </div>
            <div className="font-mono text-left">
              <span className="block text-[10px] font-bold text-[#3E3E3B] tracking-widest uppercase mb-0.5">
                CORE TOOLKIT
              </span>
              <span className="block text-xs font-semibold text-[#8A8A86] tracking-wider">
                EXCEL · SQL · BI
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}