import React from 'react';

export default function About({ language = 'id' } = {}) {
  const isEn = language === 'en';

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Header Section */}
      <div className="mb-8 text-center sm:text-left">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
          // BACKGROUND &amp; EXPERTISE
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">
          {isEn ? 'About Me' : 'Tentang Saya'}
        </h2>
      </div>

      {/* Narasi Profil Otentik */}
      <div className="max-w-none text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-4 mb-10">
        <p>
          {isEn
            ? 'As an Information Technology graduate (2026) specializing in Data Analytics, I combine programming logic and database understanding with practical business analytics. I am accustomed to processing raw datasets, performing data cleaning, and building interactive analytical dashboards that deliver clear, measurable metric summaries for decision-makers.'
            : 'Sebagai lulusan Teknologi Informasi (2026) yang mendalami bidang Data Analytics, saya menggabungkan logika pemrograman dan pemahaman database dengan analisis bisnis praktis. Saya terbiasa mengolah dataset mentah, melakukan pembersihan data (cleaning), serta membangun dashboard analitik interaktif yang menyajikan ringkasan metrik secara jelas dan terukur bagi pengambil keputusan.'}
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
                ? 'Checking anomalies, handling missing values, and structuring tables before analytical processing.'
                : 'Memeriksa anomali, menangani nilai kosong (missing values), dan merapikan struktur tabel sebelum proses analisis.'}
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
              {isEn ? 'Query Logic & Relations' : 'Logika Query & Relasi'}
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {isEn
                ? 'Data grouping, relational filtering, and multi-table integration using SQL logic and Excel lookup formulas.'
                : 'Pengelompokan data, filtering relasional, dan integrasi multi-tabel menggunakan logika SQL dan formula lookup Excel.'}
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
                ? 'Visualizing core business metrics with Pivot Tables, dynamic slicers, and easy-to-understand performance charts.'
                : 'Visualisasi metrik bisnis utama dengan Pivot Tables, dynamic slicer, dan chart performa yang mudah dipahami.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
