import React from 'react';

export default function About({ language }) {
  const competencies = [
    {
      title: language === 'en' ? 'SQL & Data Modeling' : 'SQL & Pemodelan Data',
      desc: language === 'en'
        ? 'Relational database schema modeling, complex multi-table joins, CTEs, window functions, and structured data validation.'
        : 'Pemodelan skema relasional, multi-table joins, subqueries, CTEs, agregasi data, dan validasi integritas data mentah.',
      stack: 'SQL, PostgreSQL, MySQL, DBeaver',
    },
    {
      title: language === 'en' ? 'Interactive BI & Reporting' : 'BI Interaktif & Pelaporan',
      desc: language === 'en'
        ? 'Dynamic spreadsheet architecture, lookup modeling, automated KPI cards, and interactive stakeholder dashboards.'
        : 'Arsitektur spreadsheet dinamis, formula pemodelan (XLOOKUP, INDEX/MATCH), pivot interaktif, dan visualisasi dasbor eksekutif.',
      stack: 'Microsoft Excel, Looker Studio',
    },
    {
      title: language === 'en' ? 'Business Insights & UI' : 'Analisis Bisnis & Wireframing',
      desc: language === 'en'
        ? 'Formulating data questions from business objectives, root-cause diagnostics, and wireframing dashboard layouts.'
        : 'Menerjemahkan sasaran bisnis menjadi indikator terukur, analisis akar masalah (root-cause), dan perancangan wireframe dasbor terstruktur.',
      stack: 'Figma, KPI Design, Problem Framing',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {language === 'en' ? 'Technical Competencies' : 'Kompetensi Teknis'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            {language === 'en'
              ? 'Core toolkits and methodologies applied across analytics case studies'
              : 'Perangkat dan metodologi kerja yang diterapkan dalam studi kasus analitik'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {competencies.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 flex flex-col justify-between shadow-sm"
            >
              <div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                  Toolkit
                </span>
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  {item.stack}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
