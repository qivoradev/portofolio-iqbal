import React from 'react';

const tools = [
  {
    name: "Microsoft Excel",
    category: "Data Modeling & BI",
    color: "#107C41",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M14.5 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V7.5L14.5 2Z" fill="#107C41"/>
        <path d="M14 2V7C14 7.55228 14.4477 8 15 8H20L14 2Z" fill="#185ABD"/>
        <path d="M7 11.5L9.5 15.5L7 19.5H8.8L10.4 16.8L12 19.5H13.8L11.3 15.5L13.8 11.5H12L10.4 14.2L8.8 11.5H7Z" fill="white"/>
      </svg>
    )
  },
  {
    name: "Looker Studio",
    category: "Cloud BI Dashboards",
    color: "#4285F4",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M19.5 3H4.5C3.67 3 3 3.67 3 4.5V19.5C3 20.33 3.67 21 4.5 21H19.5C20.33 21 21 20.33 21 19.5V4.5C21 3.67 20.33 3 19.5 3Z" fill="#EA4335" opacity="0.1"/>
        <path d="M7 17V12" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 17V7" stroke="#EA4335" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M17 17V10" stroke="#FBBC04" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="12" cy="7" r="1.5" fill="#34A853"/>
      </svg>
    )
  },
  {
    name: "Figma",
    category: "UI/UX & Dashboard Canvas",
    color: "#F24E1E",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4H12V12H8Z" fill="#F24E1E"/>
        <path d="M12 4H16C18.2091 4 20 5.79086 20 8C20 10.2091 18.2091 12 16 12C13.7909 12 12 10.2091 12 8V4Z" fill="#FF7262"/>
        <path d="M12 12H16C18.2091 12 20 13.7909 20 16C20 18.2091 18.2091 20 16 20C13.7909 20 12 18.2091 12 16V12Z" fill="#1ABCFE"/>
        <path d="M8 20C5.79086 20 4 18.2091 4 16C4 13.7909 5.79086 12 8 12H12V16C12 18.2091 10.2091 20 8 20Z" fill="#0ACF83"/>
        <circle cx="8" cy="8" r="4" fill="#F24E1E"/>
        <circle cx="16" cy="16" r="4" fill="#1ABCFE"/>
        <circle cx="8" cy="16" r="4" fill="#A259FF"/>
      </svg>
    )
  },
  {
    name: "SQL / Relational DB",
    category: "Data Querying & Schema",
    color: "#336791",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="5" rx="8" ry="3" stroke="#336791" strokeWidth="2" fill="#336791" fillOpacity="0.15"/>
        <path d="M4 5V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V5" stroke="#336791" strokeWidth="2"/>
        <path d="M4 12V19C4 20.66 7.58 22 12 22C16.42 22 20 20.66 20 19V12" stroke="#336791" strokeWidth="2"/>
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
              className="p-4 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm flex items-center gap-3.5 transition-all group"
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
