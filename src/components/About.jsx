import React from 'react';

export default function About({ language = 'id' } = {}) {
  return (
    <section id="about" className="py-20 sm:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Statement Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold block mb-2">
            {language === 'en' ? 'Core Methodology' : 'Metodologi Utama'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            {language === 'en' 
              ? 'Turning Raw Data Into Confident Decisions'
              : 'Mengubah Data Mentah Menjadi Keputusan Bisnis'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {language === 'en'
              ? 'I bridge the gap between relational databases and business stakeholders through structured querying, clean modeling, and intuitive interactive visualization.'
              : 'Saya menghubungkan database relasional dengan pengambil keputusan bisnis melalui pemodelan query terstruktur, pembersihan data yang teliti, dan visualisasi dashboard yang intuitif.'}
          </p>
        </div>

        {/* 3-Column Matrix Card (Khas Matt Farley) */}
        <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 shadow-xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800">
          
          {/* Kolom 1: Data Preparation & SQL */}
          <div className="p-8 sm:p-10 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 text-zinc-800 dark:text-zinc-200 flex items-center justify-center font-mono text-xs font-bold mb-5 shadow-sm">
              &gt;_
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
              {language === 'en' ? 'Data Prep & Modeling' : 'Pemodelan & Persiapan Data'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              {language === 'en'
                ? 'Structuring raw tables, validating anomalies, and writing clean queries for reliable analysis.'
                : 'Menata tabel mentah, memvalidasi anomali data, dan merancang query yang bersih untuk analisis akurat.'}
            </p>
            <div className="mt-auto w-full pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-2">
                Tech & Skills
              </span>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                SQL, Joins, CTEs, Aggregations, DBeaver
              </p>
            </div>
          </div>

          {/* Kolom 2: Interactive BI & Dashboarding */}
          <div className="p-8 sm:p-10 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 text-zinc-800 dark:text-zinc-200 flex items-center justify-center mb-5 shadow-sm">
              <svg className="w-5 h-5 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 12a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
              {language === 'en' ? 'Interactive BI & Reporting' : 'BI Interaktif & Pelaporan'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              {language === 'en'
                ? 'Building automated, drillable dashboards that highlight actionable trends at a glance.'
                : 'Membangun dashboard interaktif otomatis yang menampilkan tren actionable secara cepat.'}
            </p>
            <div className="mt-auto w-full pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-2">
                Tech & Skills
              </span>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                Microsoft Excel, Looker Studio, Pivot Tables, Dynamic Formulas
              </p>
            </div>
          </div>

          {/* Kolom 3: Business Insights & Prototyping */}
          <div className="p-8 sm:p-10 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 text-zinc-800 dark:text-zinc-200 flex items-center justify-center font-mono text-xs font-bold mb-5 shadow-sm">
              &Delta;KPI
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
              {language === 'en' ? 'Business Insights & UI' : 'Insight Bisnis & Wireframing'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              {language === 'en'
                ? 'Defining clear business KPIs and wireframing dashboard layouts for intuitive user experience.'
                : 'Menentukan metrik KPI bisnis serta merancang wireframe layout dashboard yang intuitif.'}
            </p>
            <div className="mt-auto w-full pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-2">
                Tech & Skills
              </span>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                Figma, Wireframing, KPI Metrics, Root-Cause Analysis
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

