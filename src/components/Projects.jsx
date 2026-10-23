import React, { useState } from 'react';
import {
  TableIcon,
  DatabaseIcon,
  MaximizeIcon,
  CloseIcon,
  CheckIcon,
} from './Icons';

export default function Projects({ language = 'en' } = {}) {
  const isEn = language === 'en';
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      id: 'coffee-shop-sales',
      title: isEn
        ? 'Coffee Shop Sales Performance Dashboard'
        : 'Dashboard Performa Penjualan Coffee Shop',
      category: isEn ? 'Executive Business Intelligence' : 'Intelijen Bisnis Eksekutif',
      stack: ['Microsoft Excel', 'Pivot Tables', 'Interactive Slicers', 'KPI Modeling'],
      highlight: isEn
        ? 'Analyzed monthly revenue trends, product transaction volumes, and hourly peak sales intervals to boost operational efficiency.'
        : 'Menganalisis tren pendapatan bulanan, volume transaksi produk, dan segmentasi waktu puncak penjualan untuk optimasi operasional.',
      insights: isEn
        ? [
            'Identified 22% peak revenue during morning commute hours (07:00 - 10:00).',
            'Optimized inventory turnover for top 3 signature espresso beverages.',
            'Interactive slicers enabled multi-store drill-downs in real time.',
          ]
        : [
            'Mengidentifikasi 22% lonjakan omzet pada jam sibuk pagi (07:00 - 10:00).',
            'Mengoptimalkan perputaran stok 3 varian minuman espresso terlaris.',
            'Slicer interaktif memungkinkan perbandingan performa antar gerai.',
          ],
      image: '/projects/superstore-dashboard.png',
      badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      icon: TableIcon,
    },
    {
      id: 'bank-customer-churn',
      title: isEn
        ? 'Bank Customer Churn Risk Analysis'
        : 'Analisis Risiko Churn Nasabah Bank',
      category: isEn ? 'Risk & Retention Analytics' : 'Analisis Risiko & Retensi',
      stack: ['SQL (PostgreSQL)', 'Excel Modeling', 'Demographic Cohorts', 'Attrition Modeling'],
      highlight: isEn
        ? 'Segmented customer cohorts by balance tier, credit activity, and tenure to identify key indicators and formulate attrition prevention.'
        : 'Segmentasi demografi nasabah berdasarkan saldo dan tingkat retensi untuk merumuskan strategi pencegahan churn nasabah prioritas.',
      insights: isEn
        ? [
            'Isolated high-balance churn trigger when credit score falls below 620.',
            'Discovered 34% lower attrition in multi-product account holders.',
            'Built predictive churn matrix for retention outreach campaigns.',
          ]
        : [
            'Menemukan anomali churn nasabah bersaldo tinggi saat skor kredit < 620.',
            'Nasabah dengan kepemilikan >2 produk perbankan memiliki retensi 34% lebih kuat.',
            'Menyusun matriks preventif untuk kampanye retensi tim pemasaran.',
          ],
      image: '/projects/nyc-collision-dashboard.png',
      badgeColor: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
      icon: DatabaseIcon,
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto my-auto py-2">
      {/* Jendela Konsol Luar */}
      <div className="w-full rounded-3xl border border-zinc-800/90 bg-zinc-950/80 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col relative">
        {/* Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* 1. Header Konsol Terminal */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800/80 bg-zinc-900/60 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-[#eab308]" />
            <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
            <span className="ml-2 text-zinc-300 font-semibold flex items-center gap-1.5">
              projects-catalog.sql
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-medium">
            <span>SELECT * FROM projects</span>
          </div>
        </div>

        {/* 2. Grid Proyek Utama (2 Bento Cards Berdampingan) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          {projects.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <div
                key={project.id}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 flex flex-col justify-between transition-all duration-300 hover:border-orange-500/40 hover:bg-zinc-900/60 group"
              >
                <div>
                  {/* Visual Preview Screenshot / Dashboard Mockup */}
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 mb-4 cursor-pointer group/img"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveModalProject(project);
                      }
                    }}
                    title={isEn ? 'Click to enlarge dashboard' : 'Klik untuk perbesar dashboard'}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 text-white text-xs font-mono border border-zinc-700 shadow-lg">
                        <MaximizeIcon size={13} />
                        {isEn ? 'Enlarge' : 'Perbesar'}
                      </span>
                    </div>
                  </div>

                  {/* Kategori Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono text-zinc-400 font-medium">
                      {project.category}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${project.badgeColor}`}>
                      BI Active
                    </span>
                  </div>

                  {/* Judul Proyek */}
                  <h2 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h2>

                  {/* Highlight Ringkas */}
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {project.highlight}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md border border-zinc-800 bg-zinc-950/70 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Trigger */}
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-zinc-700/80 bg-zinc-800/40 hover:bg-orange-500 hover:border-orange-500 hover:text-white text-zinc-300 text-xs font-semibold transition-all cursor-pointer"
                >
                  <ProjectIcon size={14} />
                  <span>{isEn ? 'Inspect Visual Analytics' : 'Lihat Detail Analisis'}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* 3. Footer Konsol Terminal */}
        <div className="px-5 py-2.5 border-t border-zinc-800/80 bg-zinc-900/60 flex items-center justify-between text-[10px] font-mono text-zinc-500">
          <span>QUERY_STATUS: 2 ROWS RETURNED</span>
          <span>EXEC_TIME: 12ms // CONSOLE_READY</span>
        </div>
      </div>

      {/* Modal Detail / Preview Dashboard */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs font-mono text-orange-400 mt-0.5">
                  {activeModalProject.category}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white cursor-pointer transition-colors"
                aria-label="Close"
              >
                <CloseIcon size={18} />
              </button>
            </div>

            {/* Modal Image */}
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-black mb-4">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Key Business Insights */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                {isEn ? 'Key Business Takeaways' : 'Insight Kunci Bisnis'}
              </h4>
              <ul className="space-y-1.5">
                {activeModalProject.insights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckIcon size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
