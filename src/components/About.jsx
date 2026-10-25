import React from 'react';

export default function About({ language }) {
  const capabilities = [
    {
      num: '01',
      title: language === 'en' ? 'SQL & RELATIONAL DATA MODELING' : 'SQL & PEMODELAN DATA RELASIONAL',
      desc: language === 'en'
        ? 'Relational table structuring, multi-table joins, subqueries, CTEs, and data integrity verification.'
        : 'Pemodelan skema relasional, multi-table joins, subqueries, CTEs, agregasi data, dan validasi data mentah.',
      stack: 'SQL, PostgreSQL, MySQL, DBeaver',
    },
    {
      num: '02',
      title: language === 'en' ? 'EXECUTIVE BI & INTERACTIVE REPORTING' : 'BI EKSEKUTIF & PELAPORAN INTERAKTIF',
      desc: language === 'en'
        ? 'Dynamic spreadsheet architecture, lookup modeling, automated KPI cards, and stakeholder dashboards.'
        : 'Arsitektur spreadsheet dinamis, formula pemodelan (XLOOKUP, INDEX/MATCH), pivot interaktif, dan visualisasi dasbor eksekutif.',
      stack: 'Microsoft Excel, Looker Studio',
    },
    {
      num: '03',
      title: language === 'en' ? 'BUSINESS DIAGNOSTICS & UI WIREFRAMING' : 'DIAGNOSIS BISNIS & WIREFRAMING',
      desc: language === 'en'
        ? 'Translating operational business goals into measurable indicators, root-cause diagnostics, and structured dashboard UI.'
        : 'Menerjemahkan sasaran bisnis menjadi indikator terukur, analisis akar masalah (root-cause), dan perancangan wireframe dasbor terstruktur.',
      stack: 'Figma, Problem Framing, Business Metrics',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 uppercase block mb-2">
              [ 02 ] CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white uppercase">
              {language === 'en' ? 'CORE COMPETENCIES' : 'KOMPETENSI TEKNIS'}
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400 uppercase">
            END-TO-END ANALYTICS WORKFLOW
          </span>
        </div>

        {/* Editorial Index Rows */}
        <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
          {capabilities.map((item) => (
            <div
              key={item.num}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-colors px-2 sm:px-4"
            >
              <div className="lg:col-span-1 font-mono text-sm text-zinc-400 font-bold">
                /{item.num}
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
                  {item.title}
                </h3>
              </div>

              <div className="lg:col-span-4">
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="lg:col-span-3 lg:text-right font-mono text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                {item.stack}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
