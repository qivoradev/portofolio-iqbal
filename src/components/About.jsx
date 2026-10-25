import React from 'react';

export default function About({ language = 'id' } = {}) {
  const capabilities = [
    {
      num: '01',
      title: language === 'en' ? 'SQL & Data Modeling' : 'SQL & Pemodelan Data',
      desc: language === 'en'
        ? 'Relational table structuring, multi-table joins, CTEs, subqueries, and validating data integrity.'
        : 'Pemodelan skema relasional, multi-table joins, subqueries, CTEs, agregasi data, dan pembersihan anomali data mentah.',
      tools: 'SQL, PostgreSQL, MySQL, DBeaver',
    },
    {
      num: '02',
      title: language === 'en' ? 'Executive BI & Reporting' : 'BI Eksekutif & Pelaporan',
      desc: language === 'en'
        ? 'Dynamic spreadsheet architecture, lookup modeling (XLOOKUP, INDEX/MATCH), pivot tables, and KPI cards.'
        : 'Arsitektur spreadsheet dinamis, formula pemodelan (XLOOKUP, INDEX/MATCH), pivot interaktif, dan KPI bisnis.',
      tools: 'Microsoft Excel, Looker Studio',
    },
    {
      num: '03',
      title: language === 'en' ? 'Business Insights & Wireframing' : 'Analisis Bisnis & Wireframing',
      desc: language === 'en'
        ? 'Translating stakeholder questions into actionable metrics, root-cause diagnostics, and structured dashboard UI.'
        : 'Menerjemahkan sasaran bisnis menjadi indikator terukur, analisis akar masalah (root-cause), dan wireframe dasbor.',
      tools: 'Figma, KPI Design, Framing',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-zinc-50 dark:bg-[#0a0a0c] text-zinc-900 dark:text-white border-t border-zinc-200 dark:border-zinc-800/80 transition-colors scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 font-bold block mb-2">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              {language === 'en' ? 'Technical Competencies' : 'Kompetensi Teknis'}
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500 uppercase">
            End-to-End Analytics Workflow
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((item) => (
            <div
              key={item.num}
              className="p-7 rounded-3xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-colors flex flex-col justify-between shadow-sm"
            >
              <div>
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 block mb-3">
                  {item.num}
                </span>
                <h3 className="text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                {item.tools}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
