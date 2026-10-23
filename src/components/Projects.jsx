import React, { useState } from 'react';
import {
  TableIcon,
  MaximizeIcon,
  CloseIcon,
  CheckIcon,
} from './Icons';

export default function Projects({ language = 'en' } = {}) {
  const isEn = language === 'en';
  const [activeModalProject, setActiveModalProject] = useState(null);

  const excelTags = [
    'Microsoft Excel',
    'Pivot Tables',
    'Dynamic Slicers',
    'Data Cleaning',
    'Executive KPI Cards',
  ];

  const projects = [
    {
      id: 'coffee-shop-sales',
      title: isEn
        ? 'Coffee Shop Sales Performance Dashboard'
        : 'Dashboard Performa Penjualan Coffee Shop',
      category: isEn ? 'Excel Analytics & Reporting' : 'Analisis & Pelaporan Excel',
      stack: excelTags,
      highlight: isEn
        ? 'Built comprehensively in Microsoft Excel: from raw dataset cleaning and pivot table modeling to dynamic slicers analyzing hourly transaction volume and revenue trends.'
        : 'Dibangun secara komprehensif menggunakan Microsoft Excel: mulai dari pembersihan dataset mentah, pemodelan pivot table, hingga slicer dinamis untuk menganalisis tren omzet dan volume transaksi per jam.',
      insights: isEn
        ? [
            'Cleaned and validated 50,000+ transactional records using Excel formulas.',
            'Identified peak revenue intervals (07:00 - 10:00) with dynamic time slicers.',
            'Optimized beverage inventory turnarounds via pivot-driven margin rankings.',
            'Constructed interactive multi-store performance summary cards.',
          ]
        : [
            'Membersihkan dan memvalidasi 50.000+ data transaksi menggunakan formula Excel.',
            'Mengidentifikasi lonjakan omzet jam sibuk pagi (07:00 - 10:00) dengan slicer waktu dinamis.',
            'Mengoptimalkan perputaran stok minuman espresso melalui ranking margin pivot table.',
            'Menyusun kartu ringkasan KPI eksekutif antar gerai yang responsif.',
          ],
      image: '/projects/superstore-dashboard.png',
      badgeColor: 'text-emerald-500 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      icon: TableIcon,
    },
    {
      id: 'bank-customer-churn',
      title: isEn
        ? 'Bank Customer Churn Risk Analysis'
        : 'Analisis Risiko Churn Nasabah Bank',
      category: isEn ? 'Excel Modeling & Cohort Analysis' : 'Pemodelan Excel & Analisis Kohort',
      stack: excelTags,
      highlight: isEn
        ? 'Engineered entirely in Microsoft Excel: structured customer cohorts by balance tier, credit activity, and tenure to identify key indicators and formulate retention strategies.'
        : 'Dianalisis dan dimodelkan sepenuhnya di Microsoft Excel: segmentasi kohort demografi nasabah berdasarkan saldo, aktivitas kredit, dan masa rekening untuk merumuskan strategi pencegahan churn.',
      insights: isEn
        ? [
            'Structured demographic cohorts and retention tiers directly in Excel spreadsheets.',
            'Isolated high-balance churn indicators when credit score falls below 620.',
            'Demonstrated 34% stronger customer retention in multi-product account holders.',
            'Delivered intuitive executive risk matrix with conditional formatting.',
          ]
        : [
            'Menyusun kohort demografi dan tier retensi langsung di spreadsheet Excel.',
            'Menemukan indikator churn nasabah prioritas bersaldo tinggi saat skor kredit < 620.',
            'Nasabah dengan kepemilikan >2 produk perbankan terbukti memiliki retensi 34% lebih kuat.',
            'Menghadirkan matriks risiko eksekutif intuitif dengan conditional formatting.',
          ],
      image: '/projects/nyc-collision-dashboard.png',
      badgeColor: 'text-orange-500 dark:text-orange-400 border-orange-500/30 bg-orange-500/10',
      icon: TableIcon,
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto my-auto py-2">
      {/* Jendela Konsol Luar */}
      <div className="w-full rounded-3xl border border-zinc-200 dark:border-zinc-800/90 bg-white/90 dark:bg-zinc-950/80 text-zinc-900 dark:text-zinc-100 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col relative transition-colors duration-300">
        {/* Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* 1. Header Konsol Terminal */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900/60 font-mono text-xs transition-colors duration-300">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-[#eab308]" />
            <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
            <span className="ml-2 text-zinc-700 dark:text-zinc-300 font-semibold flex items-center gap-1.5">
              projects-catalog.xlsx
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
            <span>2 WORKBOOKS VERIFIED</span>
          </div>
        </div>

        {/* 2. Grid Proyek Utama (2 Bento Cards Berdampingan) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          {projects.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <div
                key={project.id}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/40 p-5 flex flex-col justify-between transition-all duration-300 hover:border-orange-500/40 hover:bg-zinc-100/60 dark:hover:bg-zinc-900/60 group shadow-sm"
              >
                <div>
                  {/* Visual Preview Screenshot / Dashboard Mockup */}
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 mb-4 cursor-pointer group/img"
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
                    <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 font-medium">
                      {project.category}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${project.badgeColor}`}>
                      Excel
                    </span>
                  </div>

                  {/* Judul Proyek */}
                  <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white mb-2 leading-snug group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h2>

                  {/* Highlight Ringkas */}
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {project.highlight}
                  </p>

                  {/* Tech Stack Pills (Murni Excel) */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/70 text-zinc-700 dark:text-zinc-300 shadow-xs"
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
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700/80 bg-white dark:bg-zinc-800/40 hover:bg-orange-500 hover:border-orange-500 hover:text-white text-zinc-700 dark:text-zinc-300 text-xs font-semibold transition-all cursor-pointer shadow-xs"
                >
                  <ProjectIcon size={14} />
                  <span>{isEn ? 'Inspect Visual Analytics' : 'Lihat Detail Analisis'}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* 3. Footer Konsol Terminal */}
        <div className="px-5 py-2.5 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950/90 flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
          <span>CATALOG_STATUS: 2 WORKBOOKS LOADED</span>
          <span>COMPREHENSIVE_EXCEL_STACK // VERIFIED</span>
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
            className="w-full max-w-3xl rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 shadow-2xl relative text-zinc-900 dark:text-zinc-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800 mb-4">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs font-mono text-orange-500 mt-0.5">
                  {activeModalProject.category}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer transition-colors"
                aria-label="Close"
              >
                <CloseIcon size={18} />
              </button>
            </div>

            {/* Modal Image */}
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-black mb-4">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Key Business Insights */}
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/40 p-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-2">
                {isEn ? 'Key Analytical Takeaways (Excel)' : 'Insight Kunci Analisis (Excel)'}
              </h4>
              <ul className="space-y-1.5">
                {activeModalProject.insights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                    <CheckIcon size={14} className="text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
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
