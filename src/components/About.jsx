import React from 'react';

export default function About({ language = 'id' } = {}) {
  const isEn = language === 'en';

  return (
    <div className="w-full max-w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-5 sm:px-8 py-16">
      {/* Header Section Rata Kiri */}
      <div className="border-b border-zinc-200 dark:border-zinc-800/80 pb-4 mb-8 text-left">
        <span className="font-sans text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-medium block mb-1">
          {language === 'en' ? 'Background & Expertise' : 'Latar Belakang & Spesialisasi'}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {language === 'en' ? 'About Me' : 'Tentang Saya'}
        </h2>
      </div>

      {/* Paragraf Narasi: Lebih lega di desktop */}
      <p className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-10 text-left max-w-4xl">
        {isEn
          ? 'Information Technology Graduate (2026) specializing in Data Analytics. Armed with standardized competencies through Web Development (BNSP) and Artificial Intelligence (Certiport) certifications, I integrate computational logic and data architecture into strategic business analysis. My focus is on processing raw datasets, ensuring data integrity, and building accurate executive dashboards to drive decision-making.'
          : 'Lulusan Teknologi Informasi (2026) dengan spesialisasi Data Analytics. Berbekal kompetensi terstandarisasi melalui sertifikasi Web Development (BNSP) serta Artificial Intelligence (Certiport), saya mengintegrasikan logika komputasi dan arsitektur data ke dalam analisis bisnis strategis. Fokus saya adalah mengolah dataset mentah, memastikan integritas data, dan membangun dashboard eksekutif yang akurat untuk mendukung pengambilan keputusan.'}
      </p>

      {/* 3 Kartu Keahlian: Rentangkan rapi di Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {/* Kartu 1: DATA PREPARATION */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-between">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold mb-2 block">
              Data Preparation
            </span>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base mb-2">
              {isEn ? 'Data Cleaning & Validation' : 'Data Cleaning & Validasi'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {isEn
                ? 'Handling missing values, anomalies, and data type validation before analysis.'
                : 'Menangani nilai hilang (missing values), anomali, dan validasi tipe data sebelum analisis.'}
            </p>
          </div>
        </div>

        {/* Kartu 2: DATA MODELING */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-between">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold mb-2 block">
              Data Modeling
            </span>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base mb-2">
              {isEn ? 'Structured Calculations & Relations' : 'Logika Pemodelan & Relasi'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {isEn
                ? 'Lookup formulas, structured calculations, and multi-table relations based on query logic.'
                : 'Formula lookup, kalkulasi terstruktur, dan relasi multi-tabel berbasis logika query.'}
            </p>
          </div>
        </div>

        {/* Kartu 3: VISUALIZATION */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-between">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold mb-2 block">
              Data Visualization
            </span>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base mb-2">
              {isEn ? 'KPI Dashboards & Reporting' : 'Dashboard & Pelaporan KPI'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {isEn
                ? 'Intuitive Excel interface design with Pivot Tables, dynamic slicers, and executive visualizations.'
                : 'Desain antarmuka Excel intuitif dengan Pivot Tables, dynamic slicers, dan visualisasi eksekutif.'}
            </p>
          </div>
        </div>
      </div>

      {/* Sub-section Tools & Tech Stack */}
      <div className="mt-14 pt-10 border-t border-zinc-200 dark:border-zinc-800/80">
        {/* Header Ringkas Sejajar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 text-left">
          <div>
            <span className="font-sans text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-medium block mb-0.5">
              {language === 'en' ? 'Stack & Toolkit' : 'Perangkat & Alur Kerja'}
            </span>
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
              {language === 'en' ? 'Core Technologies & Workflow' : 'Perangkat Analisis & Alur Kerja'}
            </h3>
          </div>
        </div>

        {/* Grid 4 Kolom di Desktop (Membentang Penuh), 2 Kolom di Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full">
          
          {/* 1. EXCEL */}
          <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 flex items-center gap-3 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm h-full">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none">
                <rect x="18" y="7" width="24" height="34" rx="2" fill="#107C41" />
                <path d="M24 15H36M24 21H36M24 27H36M24 33H36" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
                <path d="M29 11V37" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
                <path d="M6 11L21 8V40L6 37V11Z" fill="#0E6435" />
                <text x="13.5" y="27.5" fill="white" fontSize="15" fontWeight="bold" fontFamily="system-ui, sans-serif" textAnchor="middle">X</text>
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-sans font-semibold text-zinc-900 dark:text-zinc-100 truncate">Microsoft Excel</p>
              <p className="text-xs font-sans text-zinc-500 dark:text-zinc-400 truncate">Lookup, Pivot & KPIs</p>
            </div>
          </div>

          {/* 2. LOOKER STUDIO */}
          <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 flex items-center gap-3 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm h-full">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 120 120" fill="none">
                <circle cx="68" cy="74" r="28" stroke="#1A73E8" strokeWidth="14" fill="none" />
                <path d="M48 42A16 16 0 1 0 48 10" stroke="#EA4335" strokeWidth="12" strokeLinecap="round" fill="none"/>
                <path d="M48 42A16 16 0 0 0 62 30" stroke="#F9AB00" strokeWidth="12" strokeLinecap="round" fill="none"/>
                <line x1="56" y1="46" x2="64" y2="58" stroke="#1A73E8" strokeWidth="12" strokeLinecap="round" />
                <circle cx="78" cy="18" r="9" stroke="#34A853" strokeWidth="9" fill="none" />
                <line x1="68" y1="24" x2="72" y2="20" stroke="#34A853" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-sans font-semibold text-zinc-900 dark:text-zinc-100 truncate">Looker Studio</p>
              <p className="text-xs font-sans text-zinc-500 dark:text-zinc-400 truncate">Cloud BI & Reports</p>
            </div>
          </div>

          {/* 3. FIGMA */}
          <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 flex items-center gap-3 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm h-full">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 38 57" fill="none">
                <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-sans font-semibold text-zinc-900 dark:text-zinc-100 truncate">Figma</p>
              <p className="text-xs font-sans text-zinc-500 dark:text-zinc-400 truncate">UI/UX Canvas</p>
            </div>
          </div>

          {/* 4. SQL */}
          <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 flex items-center gap-3 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm h-full">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 100 100" fill="none">
                <path d="M18 32V72C18 83 82 83 82 72V32H18Z" fill="#0072C6" />
                <ellipse cx="50" cy="72" rx="32" ry="12" fill="#0072C6" />
                <ellipse cx="50" cy="28" rx="32" ry="12" fill="#29B6F6" stroke="#0072C6" strokeWidth="2.5" />
                <text x="50" y="63" fill="white" fontSize="24" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5" textAnchor="middle">SQL</text>
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-sans font-semibold text-zinc-900 dark:text-zinc-100 truncate">SQL</p>
              <p className="text-xs font-sans text-zinc-500 dark:text-zinc-400 truncate">Queries & Relations</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
