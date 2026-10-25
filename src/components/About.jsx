import React from 'react';

export default function About({ language }) {
  const isEn = language === 'en';

  const competencies = [
    {
      num: '/01',
      title: 'SQL & RELATIONAL DATA MODELING',
      desc: isEn
        ? 'Relational table structuring, multi-table joins, subqueries, CTEs, and data integrity verification.'
        : 'Pemodelan skema relasional, multi-table joins, subqueries, CTEs, agregasi data, dan validasi data mentah.',
      tools: 'SQL, PostgreSQL, MySQL, DBeaver',
    },
    {
      num: '/02',
      title: 'EXECUTIVE BI & INTERACTIVE REPORTING',
      desc: isEn
        ? 'Dynamic spreadsheet architecture, lookup modeling, automated KPI cards, and stakeholder dashboards.'
        : 'Arsitektur spreadsheet dinamis, formula pemodelan (XLOOKUP, INDEX/MATCH), pivot interaktif, dan visualisasi dasbor eksekutif.',
      tools: 'Microsoft Excel, Looker Studio',
    },
    {
      num: '/03',
      title: 'BUSINESS DIAGNOSTICS & UI WIREFRAMING',
      desc: isEn
        ? 'Translating operational business goals into measurable indicators, root-cause diagnostics, and structured dashboard UI.'
        : 'Menerjemahkan sasaran bisnis menjadi indikator terukur, analisis akar masalah (root-cause), dan perancangan wireframe dasbor terstruktur.',
      tools: 'Figma, KPI Metrics Design',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#111110] text-[#E8E6DF] scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-12"
          style={{ borderBottom: '0.5px solid #252523' }}
        >
          <div>
            <span
              className="text-[11px] font-mono font-bold tracking-widest text-[#22C55E] uppercase block mb-2"
              style={{ letterSpacing: '0.1em' }}
            >
              [ 02 ] CAPABILITIES
            </span>
            <h2
              className="font-extrabold uppercase text-[#E8E6DF]"
              style={{
                fontSize: 'clamp(32px, 5vw, 52px)',
                letterSpacing: '-0.025em',
                lineHeight: 1.08,
              }}
            >
              CORE COMPETENCIES
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#3E3E3B] uppercase tracking-wider">
            END-TO-END ANALYTICS WORKFLOW
          </span>
        </div>

        {/* 4-Column Table Rows (TIDAK ada card/box, border separator 0.5px antar row) */}
        <div style={{ borderTop: '0.5px solid #252523' }}>
          {competencies.map((item) => (
            <div
              key={item.num}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start transition-colors"
              style={{
                borderBottom: '0.5px solid #252523',
                transitionDuration: '0.15s',
              }}
            >
              {/* Kolom 1: Nomor */}
              <div className="md:col-span-1 font-mono text-xs sm:text-sm font-bold text-[#3E3E3B]">
                {item.num}
              </div>

              {/* Kolom 2: Judul */}
              <div className="md:col-span-4">
                <h3 className="text-base sm:text-lg font-bold text-[#E8E6DF] tracking-tight leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Kolom 3: Deskripsi */}
              <div className="md:col-span-4">
                <p
                  className="text-[#8A8A86]"
                  style={{ fontSize: '15px', lineHeight: 1.7 }}
                >
                  {item.desc}
                </p>
              </div>

              {/* Kolom 4: Tools */}
              <div className="md:col-span-3 md:text-right font-mono text-xs font-semibold text-[#8A8A86] tracking-wide pt-1 md:pt-0">
                {item.tools}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
