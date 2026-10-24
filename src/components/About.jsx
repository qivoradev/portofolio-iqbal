import React from 'react';

export default function About({ language = 'id' } = {}) {
  const isEn = language === 'en';

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Header Section */}
      <div className="mb-10 text-center sm:text-left">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
          // BACKGROUND &amp; PHILOSOPHY
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">
          {isEn ? 'Behind The Data' : 'Tentang Saya & Pola Pikir'}
        </h2>
      </div>

      {/* Narasi Cerita */}
      <div className="max-w-none text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-4 mb-10">
        <p>
          {isEn
            ? 'With a strong foundation in Information Technology, I view data not just as numbers on a sheet, but as the pulse of an organization. My technical background allows me to understand both the underlying database architecture and the real-world business objectives behind every metric.'
            : 'Berbekal latar belakang pendidikan di bidang Teknologi Informasi, saya memandang data bukan sekadar tumpukan angka di lembar kerja, melainkan denyut nadi operasional bisnis. Pemahaman sistem dan logika pemrograman memungkinkan saya menguasai alur data secara menyeluruh—mulai dari ekstraksi mentah hingga penyajian dashboard interaktif.'}
        </p>
        <p>
          {isEn
            ? 'My analytical principle is simple: understand the business problem first, validate the data thoroughly, and deliver dashboards that executives can actually use to take immediate action.'
            : 'Prinsip kerja yang saya pegang: pahami konteks masalah bisnisnya terlebih dahulu, pastikan validitas dan kebersihan data, lalu rancang visualisasi yang memudahkan pengambil keputusan mengeksekusi strategi secara tepat.'}
        </p>
      </div>

      {/* 3 Pilar Analisis (Pilar Bernilai Bisnis) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Pilar 1 */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
          <div className="text-amber-500 font-mono text-sm font-bold mb-2">01 // RIGOROUS PREP</div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-1.5">
            {isEn ? 'Data Cleansing & Integrity' : 'Data Cleansing & Integritas'}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {isEn
              ? 'Eliminating anomalies, resolving missing entries, and establishing robust table relationships before analysis begins.'
              : 'Menghilangkan anomali, mengatasi data hilang, dan menyusun relasi tabel yang kokoh sebelum proses analisis dimulai.'}
          </p>
        </div>

        {/* Pilar 2 */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
          <div className="text-emerald-500 font-mono text-sm font-bold mb-2">02 // STRATEGIC VALUE</div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-1.5">
            {isEn ? 'Root Cause Discovery' : 'Penemuan Akar Masalah'}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {isEn
              ? 'Investigating patterns behind sales variances, negative margins, and critical operational risk points.'
              : 'Menyelidiki pola di balik varians penjualan, margin minus, maupun titik risiko operasional yang krusial bagi bisnis.'}
          </p>
        </div>

        {/* Pilar 3 */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
          <div className="text-indigo-500 font-mono text-sm font-bold mb-2">03 // ACTIONABLE UX</div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-1.5">
            {isEn ? 'Executive Dashboard Design' : 'Desain Dashboard Eksekutif'}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {isEn
              ? 'Delivering intuitive Excel interfaces with dynamic slicers and executive-friendly KPI metric summaries.'
              : 'Menyajikan antarmuka Excel yang intuitif lengkap dengan slicer dinamis dan ringkasan metrik KPI yang ramah eksekutif.'}
          </p>
        </div>
      </div>
    </div>
  );
}
