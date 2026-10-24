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

  const projects = [
    {
      id: 'superstore-sales',
      title: 'Superstore Sales & Profitability Analysis',
      category: isEn ? 'Excel Analytics & Reporting' : 'Analisis & Pelaporan Excel',
      badge: 'Excel',
      image: '/projects/superstore-dashboard.png',
      highlight: isEn
        ? 'Executive Microsoft Excel dashboard analyzing total sales ($2.29M), profit margin (12.5%), and profit leakages across product categories and regional states.'
        : 'Dashboard eksekutif Microsoft Excel untuk menganalisis total penjualan ($2.29M), profit margin (12.5%), serta kebocoran profit pada kategori produk dan wilayah bagian tertentu.',
      stack: [
        'Margin Leakage',
        'Financial Modeling',
        'Pivot Tables',
        'Dynamic Slicers',
        'Data Cleaning',
      ],
      metrics: [
        { label: isEn ? 'Total Sales' : 'Total Penjualan', value: '$2,295,274' },
        { label: isEn ? 'Total Profit' : 'Total Profit', value: '$285,988' },
        { label: isEn ? 'Profit Margin' : 'Profit Margin', value: '12.5%' },
      ],
      insights: isEn
        ? [
            'Mapped monthly sales seasonality and revenue patterns across the 2014–2017 period.',
            'Identified loss-making product categories and mapped 5 states with negative margins (such as Texas, Ohio, and Pennsylvania).',
            'Analyzed discount elasticity and its direct impact on overall business margin erosion.',
            'Engineered dynamic slicer navigation for filtering by year, geographic region, and customer segment.',
          ]
        : [
            'Memetakan tren penjualan bulanan dan pola musiman (Monthly Sales Seasonality) periode 2014–2017.',
            'Mengidentifikasi kategori produk merugi (Loss-Making Products) dan memetakan 5 negara bagian dengan margin negatif (seperti Texas, Ohio, dan Pennsylvania).',
            'Menganalisis elastisitas dan dampak pemberian tingkat diskon terhadap penurunan profitabilitas bisnis.',
            'Membangun kontrol navigasi interaktif berbasis slicer dinamis untuk pemfilteran tahun, wilayah (region), dan segmen pasar.',
          ],
      icon: TableIcon,
    },
    {
      id: 'nyc-collisions',
      title: 'NYC Motor Vehicle Collisions & Safety Analysis',
      category: isEn ? 'Excel Modeling & Safety Analysis' : 'Pemodelan Excel & Analisis Keselamatan',
      badge: 'Excel',
      image: '/projects/nyc-collision-dashboard.png',
      highlight: isEn
        ? 'Interactive NYC traffic safety evaluation dashboard (2021–2023) analyzing 238,000+ collision records, injury rates, and primary driver distraction factors.'
        : 'Dashboard interaktif evaluasi keselamatan lalu lintas Kota New York (2021–2023) untuk menganalisis 238.000+ insiden tabrakan, tingkat cedera, dan faktor utama kelalaian pengemudi.',
      stack: [
        'Risk & Safety Analysis',
        'Time-Series Trend',
        'Root Cause Analysis',
        'Pivot Tables',
        'Executive KPIs',
      ],
      metrics: [
        { label: isEn ? 'Total Collisions' : 'Total Kecelakaan', value: '238,421' },
        { label: isEn ? 'Total Injured' : 'Korban Cedera', value: '116,227' },
        { label: isEn ? 'Total Fatalities' : 'Korban Jiwa', value: '268' },
        { label: isEn ? 'Injury Rate' : 'Tingkat Cedera', value: '48.7%' },
      ],
      insights: isEn
        ? [
            'Mapped spatial accident concentration: Brooklyn (76,416 cases / 32%) and Queens accounted for nearly 60% of all city collisions.',
            'Identified seasonal peaks and high-risk hours: collisions peaked in March and during evening rush hours (16:00 – 18:00).',
            'Analyzed contributing factors: Driver Inattention/Distraction served as the primary trigger with 58,300+ incidents.',
            'Delivered key injury metrics (Injury Rate 48.7%) providing actionable foundations for precision patrol allocation.',
          ]
        : [
            'Memetakan konsentrasi kecelakaan wilayah: Brooklyn (76.416 kasus / 32%) dan Queens menyumbang hampir 60% total insiden kota.',
            'Mengidentifikasi puncak musim dan tren waktu rawan: tabrakan memuncak di bulan Maret serta pada jam sibuk sore hari (16:00 – 18:00).',
            'Menganalisis faktor kelalaian: Driver Inattention/Distraction menjadi pemicu utama dengan lebih dari 58.300 insiden.',
            'Menyajikan matriks indikator cedera (Injury Rate 48.7%) sebagai dasar perumusan rekomendasi titik patroli presisi.',
          ],
      icon: TableIcon,
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto my-auto py-2">
      {/* Jendela Konsol Luar */}
      <div className="w-full rounded-3xl border border-zinc-200 dark:border-zinc-800/90 bg-white/90 dark:bg-zinc-950/80 text-zinc-900 dark:text-zinc-100 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col relative transition-colors duration-300">
        {/* Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* 1. Header Konsol Terminal */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900/60 font-mono text-xs transition-colors duration-300 select-none">
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
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/40 p-5 flex flex-col justify-between transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-100/60 dark:hover:bg-zinc-900/60 group shadow-sm outline-none focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-700 active:outline-none"
            >
              <div>
                {/* Visual Preview Screenshot / Dashboard Mockup */}
                <div
                  onClick={() => setActiveModalProject(project)}
                  className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 mb-4 cursor-pointer group/img outline-none focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-700 active:outline-none"
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

                {/* Kategori & Badge EXCEL */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 font-medium">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-medium">
                    Excel
                  </span>
                </div>

                {/* Judul Proyek (Selalu Putih Bersih, Tanpa Warna Oranye) */}
                <h2 className="text-base sm:text-lg font-bold text-zinc-100 group-hover:text-white transition-colors mb-2 leading-snug">
                  {project.title}
                </h2>

                {/* Highlight Ringkas */}
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                  {project.highlight}
                </p>

                {/* Metrik Kunci / KPI Chips */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-1.5 mb-3.5 p-2 rounded-xl bg-white/80 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs">
                    {project.metrics.slice(0, 3).map((metric, idx) => (
                      <div key={idx} className="flex flex-col text-center px-1">
                        <span className="text-[9px] sm:text-[10px] text-zinc-500 dark:text-zinc-400 font-mono truncate">
                          {metric.label}
                        </span>
                        <span className="text-[11px] sm:text-xs font-mono font-bold text-zinc-900 dark:text-white truncate">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Pills (Spesialisasi Metodologi) */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Trigger (Tombol Aksi Elegan) */}
              <button
                type="button"
                onClick={() => setActiveModalProject(project)}
                className="w-full py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all active:scale-[0.99] group/btn outline-none focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-700 active:outline-none cursor-pointer"
              >
                <span>{language === 'en' ? 'View Analysis Details' : 'Lihat Detail Analisis'}</span>
                <span className="text-zinc-500 group-hover/btn:text-zinc-200 transition-colors">↗</span>
              </button>
            </div>
          ))}
        </div>

        {/* 3. Footer Konsol Terminal */}
        <div className="px-5 py-2.5 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950/90 flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400 transition-colors duration-300 select-none">
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
                <p className="text-xs font-mono text-emerald-400 mt-0.5">
                  {activeModalProject.category}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer transition-colors outline-none focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-700 active:outline-none"
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

            {/* Modal Metrics Grid */}
            {activeModalProject.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {activeModalProject.metrics.map((metric, idx) => (
                  <div key={idx} className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/60 text-center">
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono block mb-0.5">{metric.label}</span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-zinc-100">{metric.value}</span>
                  </div>
                ))}
              </div>
            )}

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
