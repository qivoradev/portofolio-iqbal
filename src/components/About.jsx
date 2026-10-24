import React from 'react';

export default function About({ language = 'id' } = {}) {
  const isEn = language === 'en';

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Header Section */}
      <div className="mb-8 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {isEn ? 'About Me' : 'Tentang Saya'}
        </h2>
      </div>

      {/* Narasi Profil Otentik */}
      <div className="max-w-none text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-4 mb-10">
        <p>
          {isEn
            ? 'Information Technology Graduate (2026) specializing in Data Analytics. Armed with standardized competencies through Web Development (BNSP) and Artificial Intelligence (Certiport) certifications, I integrate computational logic and data architecture into strategic business analysis. My focus is on processing raw datasets, ensuring data integrity, and building accurate executive dashboards to drive decision-making.'
            : 'Lulusan Teknologi Informasi (2026) dengan spesialisasi Data Analytics. Berbekal kompetensi terstandarisasi melalui sertifikasi Web Development (BNSP) serta Artificial Intelligence (Certiport), saya mengintegrasikan logika komputasi dan arsitektur data ke dalam analisis bisnis strategis. Fokus saya adalah mengolah dataset mentah, memastikan integritas data, dan membangun dashboard eksekutif yang akurat untuk mendukung pengambilan keputusan.'}
        </p>
      </div>

      {/* 3 Kartu Keahlian (Skema Warna Seragam) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Kartu 1: DATA PREPARATION */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-between">
          <div>
            <div className="text-amber-500 font-mono text-xs font-bold mb-2 tracking-wider">
              01 // DATA PREPARATION
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-2">
              {isEn ? 'Data Cleaning & Validation' : 'Data Cleaning & Validasi'}
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {isEn
                ? 'Handling missing values, anomalies, and data type validation before analysis.'
                : 'Menangani nilai hilang (missing values), anomali, dan validasi tipe data sebelum analisis.'}
            </p>
          </div>
        </div>

        {/* Kartu 2: DATA MODELING */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-between">
          <div>
            <div className="text-amber-500 font-mono text-xs font-bold mb-2 tracking-wider">
              02 // DATA MODELING
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-2">
              {isEn ? 'Structured Calculations & Relations' : 'Logika Pemodelan & Relasi'}
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {isEn
                ? 'Lookup formulas, structured calculations, and multi-table relations based on query logic.'
                : 'Formula lookup, kalkulasi terstruktur, dan relasi multi-tabel berbasis logika query.'}
            </p>
          </div>
        </div>

        {/* Kartu 3: VISUALIZATION */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-between">
          <div>
            <div className="text-amber-500 font-mono text-xs font-bold mb-2 tracking-wider">
              03 // VISUALIZATION
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-2">
              {isEn ? 'KPI Dashboards & Reporting' : 'Dashboard & Pelaporan KPI'}
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {isEn
                ? 'Intuitive Excel interface design with Pivot Tables, dynamic slicers, and executive visualizations.'
                : 'Desain antarmuka Excel intuitif dengan Pivot Tables, dynamic slicers, dan visualisasi eksekutif.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
