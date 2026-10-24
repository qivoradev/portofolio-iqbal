import React, { useState } from 'react';
import { MaximizeIcon } from './Icons';
import ProjectModal from './ProjectModal';

export default function Projects({ language = 'id' } = {}) {
  const isEn = language === 'en';
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const projectsData = [
    {
      id: 'superstore-sales',
      title: 'Superstore Sales & Profitability Analysis',
      category: isEn ? 'Excel Analytics & Reporting' : 'Analisis & Pelaporan Excel',
      badge: 'Excel',
      image: '/projects/superstore-dashboard.png',
      description: isEn
        ? 'Executive Microsoft Excel dashboard analyzing total sales ($2.29M), profit margin (12.5%), and profit leakages across product categories and regional states.'
        : 'Dashboard eksekutif Microsoft Excel untuk menganalisis total penjualan ($2.29M), profit margin (12.5%), serta kebocoran profit pada kategori produk dan wilayah bagian tertentu.',
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
    },
    {
      id: 'nyc-collisions',
      title: 'NYC Motor Vehicle Collisions & Safety Analysis',
      category: isEn ? 'Excel Modeling & Safety Analysis' : 'Pemodelan Excel & Analisis Keselamatan',
      badge: 'Excel',
      image: '/projects/nyc-collision-dashboard.png',
      description: isEn
        ? 'Interactive NYC traffic safety evaluation dashboard (2021–2023) analyzing 238,000+ collision records, injury rates, and primary driver distraction factors.'
        : 'Dashboard interaktif evaluasi keselamatan lalu lintas Kota New York (2021–2023) untuk menganalisis 238.000+ insiden tabrakan, tingkat cedera, dan faktor utama kelalaian pengemudi.',
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
    {
      id: 'ecommerce-retention',
      title: 'E-Commerce Customer Retention & Cohort Analytics',
      category: isEn ? 'SQL Modeling & Cohort Analytics' : 'Pemodelan SQL & Analisis Kohor',
      badge: 'SQL',
      image: '/projects/superstore-dashboard.png',
      description: isEn
        ? 'Advanced SQL and Excel behavioral cohort modeling tracking customer lifetime value (LTV), repeat purchase velocity, and churn reduction across 48,000+ accounts.'
        : 'Pemodelan kohor perilaku dan query SQL tingkat lanjut untuk melacak Customer Lifetime Value (LTV), retensi pelanggan, dan mitigasi churn pada 48.000+ akun pengguna.',
      highlight: isEn
        ? 'Advanced SQL and Excel behavioral cohort modeling tracking customer lifetime value (LTV), repeat purchase velocity, and churn reduction across 48,000+ accounts.'
        : 'Pemodelan kohor perilaku dan query SQL tingkat lanjut untuk melacak Customer Lifetime Value (LTV), retensi pelanggan, dan mitigasi churn pada 48.000+ akun pengguna.',
      stack: [
        'SQL Cohorts',
        'Customer Retention',
        'LTV Modeling',
        'Window Functions',
        'Churn Mitigation',
      ],
      metrics: [
        { label: isEn ? '30-Day Retention' : 'Retensi 30 Hari', value: '42.8%' },
        { label: isEn ? 'LTV Growth' : 'Kenaikan LTV', value: '+28.4%' },
        { label: isEn ? 'Analyzed Accounts' : 'Akun Dianalisis', value: '48,250' },
      ],
      insights: isEn
        ? [
            'Identified key drop-off point between first and second transaction cycles.',
            'Engineered SQL window functions to segment customer cohorts by signup month.',
            'Optimized targeted re-engagement timing, lifting 60-day repeat purchase rate by 14%.',
          ]
        : [
            'Mengidentifikasi titik kritis drop-off transaksi pertama ke transaksi kedua.',
            'Merancang query SQL window functions untuk segmentasi kohor pelanggan berdasarkan bulan registrasi.',
            'Mengoptimalkan waktu promosi tertarget, menaikkan repeat purchase 60 hari sebesar 14%.',
          ],
    },
    {
      id: 'financial-budget-variance',
      title: 'Corporate Budget vs. Actual Variance & KPI Forecasting',
      category: isEn ? 'Financial Modeling & Forecasting' : 'Pemodelan Finansial & Forecasting',
      badge: 'Excel',
      image: '/projects/nyc-collision-dashboard.png',
      description: isEn
        ? 'Comprehensive OPEX/CAPEX variance modeling and scenario-based forecasting across 12 business divisions with dynamic variance threshold alerts.'
        : 'Pemodelan variansi OPEX/CAPEX komprehensif dan peramalan berbasis skenario di 12 divisi bisnis dengan visualisasi peringatan selisih anggaran otomatis.',
      highlight: isEn
        ? 'Comprehensive OPEX/CAPEX variance modeling and scenario-based forecasting across 12 business divisions with dynamic variance threshold alerts.'
        : 'Pemodelan variansi OPEX/CAPEX komprehensif dan peramalan berbasis skenario di 12 divisi bisnis dengan visualisasi peringatan selisih anggaran otomatis.',
      stack: [
        'Budget Variance',
        'OPEX Forecasting',
        'Scenario Modeling',
        'Sensitivity Model',
        'Executive Alerts',
      ],
      metrics: [
        { label: isEn ? 'Budget Accuracy' : 'Akurasi Anggaran', value: '96.4%' },
        { label: isEn ? 'Monitored OPEX' : 'OPEX Dipantau', value: '$8.4M' },
        { label: isEn ? 'Variance Detected' : 'Variansi Terdeteksi', value: '-3.2%' },
      ],
      insights: isEn
        ? [
            'Built automated dynamic variance threshold alerts for divisional budget overruns.',
            'Created interactive scenario toggles for Best Case, Base Case, and Conservative forecast models.',
            'Reduced monthly financial consolidation and reporting cycle by 3 days.',
          ]
        : [
            'Membangun sistem peringatan otomatis untuk deviasi anggaran per divisi.',
            'Mengembangkan kontrol skenario interaktif (Best Case, Base Case, dan Konservatif).',
            'Mempercepat siklus konsolidasi dan pelaporan keuangan bulanan hingga 3 hari kerja.',
          ],
    },
  ];

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 2);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      {/* 1. Header Section Bersih */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2 uppercase">
          {isEn ? 'FEATURED PROJECTS' : 'PROYEK & STUDI KASUS'}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-2xl leading-relaxed">
          {isEn
            ? 'Business data analytics, KPI modeling, and executive Excel dashboards demonstrating end-to-end data transformation.'
            : 'Studi kasus analisis data bisnis, pemodelan KPI, dan dashboard eksekutif Excel untuk menerjemahkan data mentah menjadi keputusan strategis.'}
        </p>
      </div>

      {/* 2. Grid Proyek Utama (2 Bento Cards Berdampingan) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white border-zinc-200/90 shadow-sm dark:bg-zinc-900/40 dark:border-zinc-800/80 rounded-2xl border overflow-hidden flex flex-col justify-between group transition-all"
          >
            <div>
              {/* Visual Preview Screenshot / Dashboard Mockup */}
              <div
                onClick={() => setActiveModalProject(project)}
                className="relative aspect-video rounded-xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800/60 m-4 mb-3 cursor-pointer group/img outline-none focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-700 active:outline-none bg-zinc-100 dark:bg-zinc-950"
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

              {/* Konten Card */}
              <div className="px-5 pb-2">
                {/* Kategori & Badge EXCEL / SQL */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 font-medium">
                    {project.category}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border font-medium ${
                    project.badge === 'SQL'
                      ? 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30'
                  }`}>
                    {project.badge}
                  </span>
                </div>

                {/* Judul Proyek */}
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors mb-2 leading-snug">
                  {project.title}
                </h3>

                {/* Highlight Ringkas */}
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {project.highlight}
                </p>

                {/* Kotak Metrik KPI */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-zinc-50 border border-zinc-200/70 dark:bg-zinc-950/50 dark:border-zinc-800/80 my-4 text-center">
                    {project.metrics.slice(0, 3).map((metric, idx) => (
                      <div key={idx} className="flex flex-col text-center px-1">
                        <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-mono truncate">
                          {metric.label}
                        </span>
                        <span className="text-sm sm:text-base font-mono font-bold text-zinc-900 dark:text-zinc-100 truncate">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tag Metodologi */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 text-[11px] font-mono px-2.5 py-1 rounded-md border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tombol Aksi "Lihat Detail Analisis" */}
            <div className="p-5 pt-0">
              <button
                type="button"
                onClick={() => setActiveModalProject(project)}
                className="w-full py-2.5 rounded-xl border border-zinc-200 bg-zinc-100/80 text-zinc-800 hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.99] group/btn outline-none focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-700 active:outline-none"
              >
                <span>{language === 'en' ? 'View Analysis Details' : 'Lihat Detail Analisis'}</span>
                <span className="text-zinc-400 dark:text-zinc-500 group-hover/btn:text-zinc-900 dark:group-hover/btn:text-zinc-200 transition-colors">↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Tombol Toggle Tampilkan Lebih Banyak */}
      <div className="flex justify-end mt-8">
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300 transition-all active:scale-95 shadow-sm cursor-pointer"
        >
          <span>
            {showAll
              ? (language === 'en' ? 'Show Less ↑' : 'Tutup ↑')
              : (language === 'en' ? 'Show More Projects ↓' : 'Tampilkan Lebih Banyak ↓')}
          </span>
        </button>
      </div>

      {/* Modal Detail / Preview Dashboard */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          language={language}
        />
      )}
    </div>
  );
}
