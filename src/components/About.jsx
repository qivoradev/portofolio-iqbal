import React from 'react';

export default function About({ language }) {
  const tracks = [
    {
      id: '01',
      title: language === 'en' ? 'SQL & Relational Data Modeling' : 'SQL & Pemodelan Data Relasional',
      category: 'DATABASE / BACKEND',
      desc: language === 'en'
        ? 'Relational table structuring, multi-table joins, subqueries, CTEs, and anomaly cleansing.'
        : 'Pemodelan skema relasional, multi-table joins, subqueries, CTEs, agregasi data, dan pembersihan anomali data.',
      toolkit: 'SQL, PostgreSQL, MySQL, DBeaver',
      duration: '4:20',
    },
    {
      id: '02',
      title: language === 'en' ? 'Interactive BI & Executive Dashboards' : 'BI Interaktif & Dashboard Eksekutif',
      category: 'BUSINESS INTELLIGENCE',
      desc: language === 'en'
        ? 'Dynamic spreadsheet architecture, lookup modeling, automated KPI cards, and interactive stakeholder dashboards.'
        : 'Arsitektur spreadsheet dinamis, formula pemodelan (XLOOKUP, INDEX/MATCH), pivot interaktif, dan visualisasi dasbor eksekutif.',
      toolkit: 'Microsoft Excel, Looker Studio',
      duration: '3:45',
    },
    {
      id: '03',
      title: language === 'en' ? 'Business Insights & UI Wireframing' : 'Analisis Bisnis & Wireframing',
      category: 'PRODUCT ANALYTICS',
      desc: language === 'en'
        ? 'Formulating data questions from business objectives, root-cause diagnostics, and wireframing dashboard layouts.'
        : 'Menerjemahkan sasaran bisnis menjadi indikator terukur, analisis akar masalah (root-cause), dan perancangan wireframe dasbor terstruktur.',
      toolkit: 'Figma, KPI Design, Problem Framing',
      duration: '5:10',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 border-t border-zinc-900 scroll-mt-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
              Top Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {language === 'en' ? 'Technical Repertory' : 'Kompetensi Utama'}
            </h2>
          </div>
          <span className="text-xs text-zinc-500 font-mono hidden sm:inline-block">3 tracks curated</span>
        </div>

        {/* Tracklist Container ala Spotify */}
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 divide-y divide-zinc-900 overflow-hidden">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 hover:bg-zinc-900/50 transition-colors group"
            >
              <div className="flex items-start sm:items-center gap-4">
                <span className="text-sm font-mono text-zinc-500 group-hover:text-emerald-400 font-bold w-6 pt-0.5 sm:pt-0">
                  {track.id}
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                    {track.desc}
                  </p>
                  <div className="flex items-center gap-2 mt-2 sm:hidden">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-emerald-400">
                      {track.toolkit}
                    </span>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex flex-col items-end shrink-0">
                <span className="text-xs font-medium text-emerald-400 font-mono">
                  {track.toolkit}
                </span>
                <span className="text-[10px] text-zinc-500 font-mono mt-1">
                  {track.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
