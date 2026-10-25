import React from 'react';

export default function About({ language = 'id' } = {}) {
  const isEn = language === 'en';

  const tools = [
    {
      name: 'Microsoft Excel',
      category: isEn ? 'Spreadsheet & Modeling' : 'Spreadsheet & Pemodelan',
      desc: isEn
        ? 'Dynamic formula architecture (XLOOKUP, INDEX/MATCH), multi-slicer pivot tables, and automated executive dashboards.'
        : 'Arsitektur formula dinamis (XLOOKUP, INDEX/MATCH), pivot table multi-slicer, dan otomatisasi dashboard eksekutif.',
      tag: 'PRIMARY',
    },
    {
      name: 'SQL (PostgreSQL / MySQL)',
      category: isEn ? 'Database & Cleansing' : 'Basis Data & Pembersihan',
      desc: isEn
        ? 'Relational table structuring, multi-table joins, CTEs, subqueries, and validating data integrity from raw tables.'
        : 'Struktur tabel relasional, multi-table joins, CTEs, subqueries, dan validasi integritas data dari tabel mentah.',
      tag: 'BACKEND',
    },
    {
      name: 'Looker Studio',
      category: isEn ? 'Business Intelligence' : 'Business Intelligence',
      desc: isEn
        ? 'Connecting relational data sources into cloud-accessible stakeholder reporting with interactive drill-downs.'
        : 'Menghubungkan sumber data relasional ke pelaporan cloud yang interaktif dengan kemampuan drill-down untuk stakeholder.',
      tag: 'REPORTING',
    },
    {
      name: 'Figma',
      category: isEn ? 'Interface & Framing' : 'Antarmuka & Wireframing',
      desc: isEn
        ? 'Wireframing dashboard layouts, aligning business metrics into clean visual hierarchies before implementation.'
        : 'Perancangan wireframe dasbor, menyelaraskan metrik bisnis ke dalam hierarki visual yang jelas sebelum implementasi.',
      tag: 'DESIGN',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-zinc-50 dark:bg-[#0a0a0c] text-zinc-900 dark:text-white border-t border-zinc-200 dark:border-zinc-800/80 transition-colors scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-lime-600 dark:text-lime-400 font-bold block mb-2">
              PREMIUM TOOLKIT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white uppercase">
              {isEn ? 'Core Technologies' : 'Perangkat Analisis Utama'}
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500 uppercase">
            APPLIED TECHNICAL ARSENAL
          </span>
        </div>

        {/* Tools Grid ala Sawad */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((item) => (
            <div
              key={item.name}
              className="p-6 rounded-3xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-lime-500/50 dark:hover:border-lime-400/50 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-lime-600 dark:text-lime-400">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1">
                  {item.name}
                </h3>
                <span className="text-xs font-mono text-zinc-500 block mb-3">
                  {item.category}
                </span>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
