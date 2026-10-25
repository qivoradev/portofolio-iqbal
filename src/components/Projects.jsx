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
  const handleOpenModal = propOpenModal || ((project) => setInternalModalProject(project));

  return (
    <section id="projects" className="pt-16 pb-16 sm:pt-24 sm:pb-24 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold block mb-1">
              Case Studies & Dashboards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {language === 'en' ? 'Featured Analytics Projects' : 'Studi Kasus & Dashboard'}
            </h2>
          </div>
          <span className="text-xs text-zinc-400 font-mono hidden sm:inline-block">2 Verified Works</span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="group p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-900/80 hover:bg-zinc-50 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                {/* Thumbnail Preview */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-zinc-900/80 backdrop-blur-sm text-white text-[10px] font-mono">
                    Interactive Excel
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action Button */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                <div className="flex flex-wrap gap-1.5">
                  {(project.tags || []).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                  Inspect Details ↗
                </span>
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
