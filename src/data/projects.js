export const projects = [
  {
    id: 'superstore-sales',
    title: 'Superstore Sales & Profitability Analysis',
    category: 'Analisis & Pelaporan Excel',
    badge: 'Excel',
    image: '/projects/superstore-dashboard.png',
    shortDesc: 'Dashboard eksekutif Microsoft Excel untuk menganalisis total penjualan ($2.29M), profit margin (12.5%), serta kebocoran profit pada kategori produk dan wilayah bagian tertentu.',
    tags: ['Microsoft Excel', 'Pivot Tables', 'Dynamic Slicers', 'Data Cleaning', 'Executive KPI Cards'],
    metrics: [
      { label: 'Total Penjualan', value: '$2,295,274' },
      { label: 'Total Profit', value: '$285,988' },
      { label: 'Profit Margin', value: '12.5%' }
    ],
    insights: [
      'Memetakan tren penjualan bulanan dan pola musiman (Monthly Sales Seasonality) periode 2014–2017.',
      'Mengidentifikasi kategori produk merugi (Loss-Making Products) dan memetakan 5 negara bagian dengan margin negatif (seperti Texas, Ohio, dan Pennsylvania).',
      'Menganalisis elastisitas dan dampak pemberian tingkat diskon terhadap penurunan profitabilitas bisnis.',
      'Membangun kontrol navigasi interaktif berbasis slicer dinamis untuk pemfilteran tahun, wilayah (region), dan segmen pasar.'
    ]
  },
  {
    id: 'nyc-collisions',
    title: 'NYC Motor Vehicle Collisions & Safety Analysis',
    category: 'Pemodelan Excel & Analisis Keselamatan',
    badge: 'Excel',
    image: '/projects/nyc-collision-dashboard.png',
    shortDesc: 'Dashboard interaktif evaluasi keselamatan lalu lintas Kota New York (2021–2023) untuk menganalisis 238.000+ insiden tabrakan, tingkat cedera, dan faktor utama kelalaian pengemudi.',
    tags: ['Microsoft Excel', 'Pivot Tables', 'Dynamic Slicers', 'Data Cleaning', 'Executive KPI Cards'],
    metrics: [
      { label: 'Total Collisions', value: '238,421' },
      { label: 'Total Injured', value: '116,227' },
      { label: 'Total Fatalities', value: '268' },
      { label: 'Injury Rate', value: '48.7%' }
    ],
    insights: [
      'Memetakan konsentrasi kecelakaan wilayah: Brooklyn (76.416 kasus / 32%) dan Queens menyumbang hampir 60% total insiden kota.',
      'Mengidentifikasi puncak musim dan tren waktu rawan: tabrakan memuncak di bulan Maret serta pada jam sibuk sore hari (16:00 – 18:00).',
      'Menganalisis faktor kelalaian: Driver Inattention/Distraction menjadi pemicu utama dengan lebih dari 58.300 insiden.',
      'Menyajikan matriks indikator cedera (Injury Rate 48.7%) sebagai dasar perumusan rekomendasi titik patroli presisi.'
    ]
  }
];

export default projects;
