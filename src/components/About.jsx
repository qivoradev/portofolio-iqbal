import React from 'react';

export default function About({ language = 'id' } = {}) {
  const isEn = language === 'en';

  const tools = [
    {
      name: 'Microsoft Excel',
      category: isEn ? 'Modeling' : 'Pemodelan',
      desc: isEn
        ? 'Dynamic formula architecture, multi-slicer pivot tables, and automated executive dashboards.'
        : 'Arsitektur formula dinamis, pivot table multi-slicer, dan otomatisasi dashboard eksekutif.',
    },
    {
      name: 'SQL Databases',
      category: isEn ? 'Cleansing' : 'Pembersihan',
      desc: isEn
        ? 'Relational table structuring, complex joins, CTEs, and validating data integrity.'
        : 'Struktur tabel relasional, query joins kompleks, CTEs, dan validasi integritas data.',
    },
    {
      name: 'Looker Studio',
      category: isEn ? 'Reporting' : 'Pelaporan',
      desc: isEn
        ? 'Connecting relational data sources into cloud-accessible stakeholder reporting.'
        : 'Menghubungkan sumber data relasional ke pelaporan stakeholder berbasis cloud interaktif.',
    },
    {
      name: 'Figma',
      category: isEn ? 'Design' : 'Desain',
      desc: isEn
        ? 'Wireframing dashboard layouts and aligning metrics into visual hierarchies.'
        : 'Perancangan tata letak dashboard dan penyelarasan metrik ke hierarki visual yang jelas.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-[#0a0a0b] text-zinc-900 dark:text-white border-t border-zinc-200 dark:border-white/5 transition-colors scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            {isEn ? 'Core Capabilities' : 'Kompetensi Utama'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((item) => (
            <div
              key={item.name}
              className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 shadow-sm flex flex-col h-full"
            >
              <div className="text-xs font-mono font-bold text-emerald-600 dark:text-lime-400 mb-4 uppercase tracking-widest">
                {item.category}
              </div>
              <h3 className="text-lg font-bold mb-3">{item.name}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-grow">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
