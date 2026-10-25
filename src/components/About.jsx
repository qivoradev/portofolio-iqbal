import React from 'react';

export default function About({ language }) {
  const competencies = [
    {
      module: 'MODULE // 01',
      title: language === 'en' ? 'SQL & Data Modeling' : 'SQL & Pemodelan Data',
      desc: language === 'en'
        ? 'Relational table structuring, multi-table joins, subqueries, CTEs, aggregations, and data validation.'
        : 'Pemodelan skema relasional, multi-table joins, subqueries, CTEs, agregasi data, dan validasi data mentah.',
      tools: ['SQL', 'PostgreSQL', 'MySQL', 'DBeaver'],
    },
    {
      module: 'MODULE // 02',
      title: language === 'en' ? 'Interactive BI & Reporting' : 'BI Interaktif & Pelaporan',
      desc: language === 'en'
        ? 'Automated spreadsheet models, dynamic lookups (XLOOKUP, INDEX/MATCH), pivot tables, and executive KPI cards.'
        : 'Arsitektur spreadsheet dinamis, formula pemodelan (XLOOKUP, INDEX/MATCH), pivot interaktif, dan KPI bisnis.',
      tools: ['Microsoft Excel', 'Looker Studio', 'KPI Modeling'],
    },
    {
      module: 'MODULE // 03',
      title: language === 'en' ? 'Business Insights & UI Wireframing' : 'Analisis Bisnis & Wireframing',
      desc: language === 'en'
        ? 'Translating stakeholder questions into actionable metrics, root-cause diagnostics, and structured dashboard mockups.'
        : 'Menerjemahkan sasaran bisnis menjadi indikator terukur, analisis akar masalah (root-cause), dan wireframe dasbor.',
      tools: ['Figma', 'Problem Framing', 'Business Metrics'],
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 sm:mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold block mb-1">
            Core Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {language === 'en' ? 'Technical Competencies' : 'Kompetensi Teknis'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            {language === 'en'
              ? 'Proven tools and workflows applied across end-to-end data pipelines'
              : 'Perangkat dan alur kerja yang diterapkan dalam alur analisis data menyeluruh'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {competencies.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between shadow-sm"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-emerald-600 dark:text-emerald-400 block mb-2">
                  {item.module}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                  Primary Toolkit
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.tools.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-[11px] font-medium font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
