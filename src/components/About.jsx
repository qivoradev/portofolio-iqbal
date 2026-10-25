import React from 'react';

export default function About({ language = 'id' } = {}) {
  const competencies = [
    {
      index: '01',
      title: language === 'en' ? 'SQL & Relational Data Modeling' : 'SQL & Pemodelan Data Relasional',
      desc: language === 'en'
        ? 'Structuring normalized database schemas, complex multi-table joins, CTEs, subqueries, and validating data integrity.'
        : 'Pemodelan skema relasional, multi-table joins, subqueries, CTEs, agregasi data, dan pembersihan anomali data mentah.',
      tools: 'SQL, PostgreSQL, MySQL, DBeaver',
    },
    {
      index: '02',
      title: language === 'en' ? 'Interactive BI & Executive Dashboards' : 'BI Interaktif & Dashboard Eksekutif',
      desc: language === 'en'
        ? 'Dynamic spreadsheet architecture, lookup modeling (XLOOKUP, INDEX/MATCH), automated pivot cards, and interactive stakeholder reporting.'
        : 'Arsitektur spreadsheet dinamis, formula pemodelan (XLOOKUP, INDEX/MATCH), pivot interaktif, dan visualisasi dasbor eksekutif.',
      tools: 'Microsoft Excel, Looker Studio',
    },
    {
      index: '03',
      title: language === 'en' ? 'Business Insights & Problem Framing' : 'Analisis Bisnis & Diagnostik Akar Masalah',
      desc: language === 'en'
        ? 'Formulating data questions from business objectives, root-cause diagnostics, and wireframing dashboard interfaces.'
        : 'Menerjemahkan sasaran bisnis menjadi indikator terukur, diagnosis akar masalah (root-cause), dan perancangan wireframe dasbor.',
      tools: 'Figma, KPI Design, Root-Cause Analysis',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/80 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between pb-6 mb-10 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold block mb-1">
              TECHNICAL COMPETENCY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {language === 'en' ? 'Capabilities & Toolkits' : 'Kompetensi & Perangkat Kerja'}
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
            Analytics Lifecycle
          </span>
        </div>

        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {competencies.map((item) => (
            <div key={item.index} className="py-8 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-1 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                /{item.index}
              </div>
              <div className="md:col-span-4">
                <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <div className="md:col-span-4">
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
              <div className="md:col-span-3 md:text-right font-mono text-xs text-zinc-700 dark:text-zinc-300 font-semibold">
                {item.tools}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
