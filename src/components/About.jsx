import React from 'react';

const tools = [
  {
    name: "Microsoft Excel",
    category: "Data Modeling & BI",
    color: "#107C41",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Lembar Tabel / Sheet Grid di Belakang */}
        <rect x="18" y="6" width="24" height="36" rx="2" fill="#107C41" />
        <path d="M25 14H36M25 20H36M25 26H36M25 32H36" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity="0.9" />
        <path d="M30 11V37" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity="0.9" />
        {/* Map Cover Depan Berlogo X */}
        <path d="M6 10L22 7V41L6 38V10Z" fill="#0E6435" />
        <text x="14" y="28" fill="white" fontSize="16" fontWeight="bold" fontFamily="system-ui, sans-serif" textAnchor="middle">X</text>
      </svg>
    )
  },
  {
    name: "Looker Studio",
    category: "Cloud BI Dashboards",
    color: "#4285F4",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Lingkaran Bawah Besar (Biru) */}
        <path d="M47 48.5A30 30 0 1 1 52 50.5" stroke="#1A73E8" strokeWidth="15" strokeLinecap="round"/>
        {/* Batang Penghubung */}
        <line x1="43" y1="46" x2="38" y2="35" stroke="#F9AB00" strokeWidth="9" strokeLinecap="round" />
        {/* Lingkaran Tengah (Merah & Kuning) */}
        <path d="M35 15A15 15 0 0 0 35 45" stroke="#EA4335" strokeWidth="9" strokeLinecap="round"/>
        <path d="M35 15A15 15 0 0 1 45 35" stroke="#F9AB00" strokeWidth="9" strokeLinecap="round"/>
        {/* Batang ke Cincin Hijau */}
        <line x1="45" y1="20" x2="52" y2="14" stroke="#34A853" strokeWidth="7" strokeLinecap="round" />
        {/* Lingkaran Atas Kecil (Hijau) */}
        <circle cx="56" cy="11" r="7.5" stroke="#34A853" strokeWidth="7" fill="none"/>
      </svg>
    )
  },
  {
    name: "Figma",
    category: "UI/UX & Dashboard Canvas",
    color: "#F24E1E",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
      </svg>
    )
  },
  {
    name: "SQL / Relational DB",
    category: "Data Querying & Schema",
    color: "#0072C6",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body Tabung Silinder Biru */}
        <path d="M15 30V75C15 88 85 88 85 75V30H15Z" fill="#0072C6" />
        {/* Ellipse Dasar Bawah */}
        <ellipse cx="50" cy="75" rx="35" ry="14" fill="#0072C6" />
        {/* Tutup Silinder Atas (Biru Muda / Cyan Halus) */}
        <ellipse cx="50" cy="28" rx="35" ry="14" fill="#29B6F6" stroke="#0072C6" strokeWidth="3" />
        {/* Teks "SQL" Tebal di Tengah */}
        <text x="50" y="66" fill="white" fontSize="26" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1" textAnchor="middle">SQL</text>
      </svg>
    )
  }
];

export default function About({ language = 'id' } = {}) {
  const isEn = language === 'en';

  return (
    <div className="w-full max-w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-5 sm:px-8 py-16">
      {/* Header Section Rata Kiri */}
      <div className="border-b border-zinc-200 dark:border-zinc-800/80 pb-4 mb-8 text-left">
        <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold block mb-1">
          // BACKGROUND & EXPERTISE
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          {language === 'en' ? 'About Me' : 'Tentang Saya'}
        </h2>
      </div>

      {/* Paragraf Narasi: Lebih lega di desktop */}
      <p className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 text-left max-w-4xl">
        {isEn
          ? 'Information Technology Graduate (2026) specializing in Data Analytics. Armed with standardized competencies through Web Development (BNSP) and Artificial Intelligence (Certiport) certifications, I integrate computational logic and data architecture into strategic business analysis. My focus is on processing raw datasets, ensuring data integrity, and building accurate executive dashboards to drive decision-making.'
          : 'Lulusan Teknologi Informasi (2026) dengan spesialisasi Data Analytics. Berbekal kompetensi terstandarisasi melalui sertifikasi Web Development (BNSP) serta Artificial Intelligence (Certiport), saya mengintegrasikan logika komputasi dan arsitektur data ke dalam analisis bisnis strategis. Fokus saya adalah mengolah dataset mentah, memastikan integritas data, dan membangun dashboard eksekutif yang akurat untuk mendukung pengambilan keputusan.'}
      </p>

      {/* 3 Kartu Keahlian: Rentangkan rapi di Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {/* Kartu 1: DATA PREPARATION */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-between">
          <div>
            <div className="text-amber-500 font-mono text-xs font-bold mb-2.5 tracking-wider">
              01 // DATA PREPARATION
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base mb-2">
              {isEn ? 'Data Cleaning & Validation' : 'Data Cleaning & Validasi'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {isEn
                ? 'Handling missing values, anomalies, and data type validation before analysis.'
                : 'Menangani nilai hilang (missing values), anomali, dan validasi tipe data sebelum analisis.'}
            </p>
          </div>
        </div>

        {/* Kartu 2: DATA MODELING */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-between">
          <div>
            <div className="text-amber-500 font-mono text-xs font-bold mb-2.5 tracking-wider">
              02 // DATA MODELING
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base mb-2">
              {isEn ? 'Structured Calculations & Relations' : 'Logika Pemodelan & Relasi'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {isEn
                ? 'Lookup formulas, structured calculations, and multi-table relations based on query logic.'
                : 'Formula lookup, kalkulasi terstruktur, dan relasi multi-tabel berbasis logika query.'}
            </p>
          </div>
        </div>

        {/* Kartu 3: VISUALIZATION */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-between">
          <div>
            <div className="text-amber-500 font-mono text-xs font-bold mb-2.5 tracking-wider">
              03 // VISUALIZATION
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base mb-2">
              {isEn ? 'KPI Dashboards & Reporting' : 'Dashboard & Pelaporan KPI'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {isEn
                ? 'Intuitive Excel interface design with Pivot Tables, dynamic slicers, and executive visualizations.'
                : 'Desain antarmuka Excel intuitif dengan Pivot Tables, dynamic slicers, dan visualisasi eksekutif.'}
            </p>
          </div>
        </div>
      </div>

      {/* Sub-section Tools & Tech Stack */}
      <div className="mt-14 pt-10 border-t border-zinc-200 dark:border-zinc-800/80">
        <div className="mb-6 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold block mb-1">
            // STACK & TOOLKIT
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {language === 'en' ? 'Core Tools & Technologies' : 'Perangkat Analisis & Desain'}
          </h3>
        </div>

        {/* Grid 4 Kolom di Desktop, 2 Kolom di Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
          {tools.map((item, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-3.5 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 group"
            >
              <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate">
                  {item.name}
                </p>
                <p className="text-[10px] sm:text-[11px] font-mono text-zinc-500 truncate">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
