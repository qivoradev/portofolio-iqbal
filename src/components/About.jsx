import React from 'react';

export default function About({ language }) {
  const modules = [
    {
      num: '01',
      title: language === 'en' ? 'SQL & Data Modeling' : 'SQL & Pemodelan Data',
      desc: language === 'en'
        ? 'Relational table structuring, multi-table joins, subqueries, CTEs, aggregations, and data validation.'
        : 'Pemodelan skema relasional, multi-table joins, subqueries, CTEs, agregasi data, dan validasi data mentah.',
      stack: 'PostgreSQL, MySQL, DBeaver',
    },
    {
      num: '02',
      title: language === 'en' ? 'Interactive BI & Reporting' : 'BI Interaktif & Pelaporan',
      desc: language === 'en'
        ? 'Automated spreadsheet models, dynamic lookups (XLOOKUP, INDEX/MATCH), pivot tables, and executive KPI cards.'
        : 'Arsitektur spreadsheet dinamis, formula pemodelan (XLOOKUP, INDEX/MATCH), pivot interaktif, dan KPI bisnis.',
      stack: 'Microsoft Excel, Looker Studio',
    },
    {
      num: '03',
      title: language === 'en' ? 'Business Insights & Wireframing' : 'Analisis Bisnis & Wireframing',
      desc: language === 'en'
        ? 'Translating stakeholder questions into actionable metrics, root-cause diagnostics, and structured dashboard UI.'
        : 'Menerjemahkan sasaran bisnis menjadi indikator terukur, analisis akar masalah (root-cause), dan wireframe dasbor.',
      stack: 'Figma, Problem Framing, Business KPIs',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-t border-zinc-200 dark:border-zinc-800/80 scroll-mt-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* macOS Window for Capabilities */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-xl overflow-hidden">
          
          <div className="px-4 py-2.5 bg-zinc-100/90 dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
              <span className="ml-2 font-mono text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                system_preferences — technical_competencies
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
              ● SYNCED
            </span>
          </div>

          <div className="p-6 sm:p-8 divide-y divide-zinc-100 dark:divide-zinc-800">
            {modules.map((m) => (
              <div key={m.num} className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="max-w-md">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                      [{m.num}]
                    </span>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                      {m.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
                <div className="sm:text-right font-mono text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                  <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 inline-block">
                    {m.stack}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
