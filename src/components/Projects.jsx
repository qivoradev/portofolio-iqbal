import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

export default function Projects({ language = 'id', projects: propProjects, openModal: propOpenModal } = {}) {
  const isEn = language === 'en';
  const [internalModalProject, setInternalModalProject] = useState(null);

  const defaultProjects = [
    {
      id: 'superstore-sales',
      title: 'Superstore Sales & Profitability Analysis',
      category: isEn ? 'Excel Analytics & Reporting' : 'Analisis & Pelaporan Excel',
      badge: 'MICROSOFT EXCEL',
      image: '/projects/superstore-dashboard.png',
      description: isEn
        ? 'Executive Microsoft Excel dashboard analyzing total sales ($2.29M), profit margin (12.5%), and profit leakages across product categories and regional states.'
        : 'Dashboard eksekutif Microsoft Excel untuk menganalisis total penjualan ($2.29M), profit margin (12.5%), serta kebocoran profit pada kategori produk dan wilayah bagian tertentu.',
      tags: ['Microsoft Excel', 'Pivot Tables', 'Executive KPIs'],
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
      tags: ['Microsoft Excel', 'Geospatial', 'Safety Metrics'],
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

  const projects = propProjects || defaultProjects;
  const openModal = propOpenModal || ((project) => setInternalModalProject(project));

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-zinc-200 dark:border-zinc-800/80 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 uppercase block mb-2">
              [ 01 ] PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white uppercase">
              {language === 'en' ? 'SELECTED WORKS' : 'PROYEK PILIHAN'}
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400 uppercase">
            2 CASE STUDIES DOCUMENTED
          </span>
        </div>

        {/* Full-width Editorial Project Showcase Cards */}
        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group cursor-pointer block"
            >
              {/* Image Frame Wide Aspect Ratio */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md font-mono text-[11px] text-white">
                  0{idx + 1} // CASE STUDY
                </div>
              </div>

              {/* Meta Detail Line */}
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pt-2">
                <div className="max-w-2xl">
                  <h3 className="text-xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors uppercase tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0 font-mono text-xs">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold ml-2 group-hover:translate-x-1 transition-transform inline-block">
                    EXPLORE ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail Dashboard */}
        {internalModalProject && (
          <ProjectModal
            project={internalModalProject}
            onClose={() => setInternalModalProject(null)}
            language={language}
          />
        )}

      </div>
    </section>
  );
}
