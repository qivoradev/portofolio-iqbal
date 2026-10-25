import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

export default function Projects({ language = 'id' } = {}) {
  const isEn = language === 'en';
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projectsData = [
    {
      id: 'superstore-sales',
      title: 'Superstore Sales & Profitability Analysis',
      category: isEn ? 'Excel Analytics & Reporting' : 'Analisis & Pelaporan Excel',
      badge: 'MICROSOFT EXCEL',
      image: '/projects/superstore-dashboard.png',
      description: isEn
        ? 'Executive Microsoft Excel dashboard analyzing total sales ($2.29M), profit margin (12.5%), and profit leakages across product categories and regional states.'
        : 'Dashboard eksekutif Microsoft Excel untuk menganalisis total penjualan ($2.29M), profit margin (12.5%), serta kebocoran profit pada kategori produk dan wilayah bagian tertentu.',
      coreTools: ['Microsoft Excel', 'Pivot Tables', 'Executive KPIs'],
      detailedTools: ['Microsoft Excel', 'Data Cleaning', 'Pivot Tables', 'Dynamic Slicers', 'Margin Analysis', 'Seasonality Trends', 'Executive KPIs'],
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
    },
    {
      id: 'nyc-collisions',
      title: 'NYC Motor Vehicle Collisions & Safety Analysis',
      category: isEn ? 'Excel Modeling & Safety Analysis' : 'Pemodelan Excel & Analisis Keselamatan',
      badge: 'MICROSOFT EXCEL',
      image: '/projects/nyc-collision-dashboard.png',
      description: isEn
        ? 'Interactive NYC traffic safety evaluation dashboard (2021–2023) analyzing 238,000+ collision records, injury rates, and primary driver distraction factors.'
        : 'Dashboard interaktif evaluasi keselamatan lalu lintas Kota New York (2021–2023) untuk menganalisis 238.000+ insiden tabrakan, tingkat cedera, dan faktor utama kelalaian pengemudi.',
      coreTools: ['Microsoft Excel', 'Pivot Tables', 'Executive KPIs'],
      detailedTools: ['Microsoft Excel', 'Data Preparation', 'Pivot Tables', 'Geospatial Trends', 'Driver Distraction Analysis', 'Executive KPIs'],
      metrics: [
        { label: isEn ? 'Total Collisions' : 'Total Kecelakaan', value: '238,421' },
        { label: isEn ? 'Total Injured' : 'Korban Cedera', value: '116,227' },
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
    },
  ];

  const handleOpenModal = (project) => {
    setActiveModalProject(project);
  };

  return (
    <section id="projects" className="pt-20 pb-16 sm:pt-24 sm:pb-20 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Section Header */}
        <div className="border-b border-zinc-200 dark:border-zinc-800/80 pb-4 mb-8 text-left">
          <span className="font-sans text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-medium block mb-1">
            {language === 'en' ? 'Case Studies & Dashboards' : 'Studi Kasus & Dashboard'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {language === 'en' ? 'Featured Projects' : 'Proyek Pilihan'}
          </h2>
        </div>

      {/* 2. Layout Proyek: "Split Case Study" Vertikal */}
      <div className="space-y-12">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="p-5 sm:p-8 lg:p-9 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col lg:flex-row gap-8 lg:gap-10 items-start lg:items-center"
          >
            {/* Kolom Kiri / Atas: Visual Dashboard (Mendapatkan porsi lapang di Desktop) */}
            <div className="w-full lg:w-7/12">
              <button 
                type="button" 
                onClick={() => handleOpenModal(project)} 
                aria-label={`Buka detail analisis ${project.title}`}
                className="w-full text-left cursor-pointer group focus:outline-none rounded-2xl overflow-hidden block border border-zinc-200 dark:border-zinc-800 shadow-md bg-zinc-950"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </button>
            </div>

            {/* Kolom Kanan / Bawah: Narasi Bisnis & Dampak */}
            <div className="w-full lg:w-5/12 flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mb-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Baris Ringkasan KPI Utama */}
              <div className="grid grid-cols-3 gap-2 p-2.5 sm:p-3 my-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/60 dark:border-zinc-800/80 text-center">
                {project.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="flex flex-col items-center justify-center text-center px-0.5">
                    <p className="text-[10px] text-zinc-600 dark:text-zinc-400 font-medium truncate w-full">{m.label}</p>
                    <p className="text-xs sm:text-sm font-mono font-bold text-zinc-900 dark:text-zinc-100 truncate w-full">{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Tools Badges */}
              <div className="flex flex-wrap gap-1.5 my-3">
                {project.coreTools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Tombol Aksi */}
              <div>
                <button
                  type="button"
                  onClick={() => handleOpenModal(project)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-sans font-medium hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-sm"
                >
                  <span>{language === 'en' ? 'Open Detailed Analysis' : 'Buka Detail Analisis'}</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail Dashboard */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          language={language}
        />
      )}
      </div>
    </section>
  );
}
