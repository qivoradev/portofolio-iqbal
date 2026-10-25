import React from 'react';

export default function Hero({ language, profilePic = '/profile.png' }) {
  const tickerItems = [
    "SQL RELATIONAL DATA MODELING",
    "MICROSOFT EXCEL BI AUTOMATION",
    "EXECUTIVE KPI DASHBOARDS",
    "ROOT-CAUSE DIAGNOSTICS",
    "GOOGLE LOOKER STUDIO"
  ];

  return (
    <section id="home" className="relative pt-32 sm:pt-44 bg-[#111111] text-white overflow-hidden font-sans pb-0">
      
      {/* Container dengan batas lebar 1300px agar rapi di layar ultra lebar */}
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Layout Berbasis FLEX (Bukan Grid) agar lebar tidak berubah-ubah */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          
          {/* SISI KIRI: WHITE PASSPORT CARD (Dikunci matang di 380px) */}
          <div className="w-full max-w-[400px] lg:w-[380px] shrink-0 flex flex-col justify-between rounded-[40px] bg-white p-6 shadow-2xl relative">
            
            {/* Foto Container dengan Inner Gradasi Hijau/Orange Sawad */}
            <div className="relative w-full aspect-[4/5] rounded-[32px] bg-gradient-to-br from-[#A3E635] to-[#4d7c0f] overflow-hidden flex items-end justify-center shadow-inner">
              <img
                src={profilePic || '/profile.png'}
                alt="Iqbal Dwi Fathonah"
                className="w-full h-full object-cover object-bottom scale-110 origin-bottom mix-blend-normal"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/profile.png';
                }}
              />
              
              {/* Floating Badge ala Sawad */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                 <div className="px-4 py-1.5 rounded-full bg-white text-zinc-950 font-bold text-[10px] tracking-widest uppercase shadow-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
                    ID • GMT+7
                 </div>
              </div>
            </div>

            {/* Identitas Teks Hitam di Dalam Kartu */}
            <div className="pt-8 pb-3 text-left">
              <h2 className="text-[36px] font-black tracking-tight text-zinc-950 leading-[1.05] mb-3">
                Iqbal Dwi <br/> Fathonah
              </h2>
              <p className="text-[14px] font-semibold text-zinc-500 leading-relaxed">
                A Data Analyst who bridges raw relational datasets with strategic business decisions.
              </p>
            </div>
          </div>

          {/* SISI KANAN: GIANT TYPOGRAPHY (Mengisi sisa layar) */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pt-0 lg:pt-8 w-full">
            
            {/* Tipografi Raksasa yang Ditumpuk Rapat */}
            <div className="flex flex-col space-y-0 leading-[0.85] mb-10 w-full">
              <h1 className="text-[70px] sm:text-[110px] lg:text-[140px] xl:text-[160px] font-black tracking-tighter text-white uppercase m-0 p-0">
                DATA
              </h1>
              <span className="text-[70px] sm:text-[110px] lg:text-[140px] xl:text-[160px] font-black tracking-tighter text-[#2a2a2a] uppercase m-0 p-0">
                ANALYST
              </span>
            </div>

            {/* Paragraf Deskripsi */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-sans max-w-2xl mb-12">
              {language === 'en'
                ? 'Information Technology Graduate (2026). Passionate about turning unstructured relational datasets into clean SQL models, automated Microsoft Excel dashboards, and measurable growth insights.'
                : 'Lulusan Teknologi Informasi (2026). Berfokus menerjemahkan dataset mentah menjadi model query SQL terstruktur, otomatisasi dashboard Microsoft Excel, serta formulasi insight bisnis terukur.'}
            </p>

            {/* Angka Statistik ala Sawad */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12 sm:gap-20 mb-14">
              <div className="flex flex-col text-left">
                <span className="text-6xl sm:text-[80px] font-black text-white leading-none tracking-tighter mb-2">+2</span>
                <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-mono">FEATURED<br/>DASHBOARDS</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-6xl sm:text-[80px] font-black text-white leading-none tracking-tighter mb-2">100%</span>
                <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-mono">SQL DATA<br/>CLEANSED</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-6xl sm:text-[80px] font-black text-white leading-none tracking-tighter mb-2">2026</span>
                <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-mono">IT DEGREE<br/>GRADUATE</span>
              </div>
            </div>

            {/* Tombol CTA */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl bg-[#A3E635] hover:bg-[#84cc16] text-zinc-950 font-black text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(163,230,53,0.2)]"
              >
                {language === 'en' ? 'Explore Works' : 'Lihat Proyek'}
              </a>
              <a
                href="https://linkedin.com/in/iqbaldwifathonah"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-white hover:bg-zinc-200 text-zinc-950 font-black text-sm tracking-wide transition-all"
              >
                LinkedIn ↗
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Infinite Marquee Ticker (Pita di Bawah) */}
      <div className="mt-24 py-5 border-t border-white/5 bg-[#0a0a0a] overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex gap-12 font-mono text-sm uppercase tracking-widest text-zinc-600">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-12">
              <span className="text-zinc-300 font-bold">{item}</span>
              <span className="text-lime-500 text-lg">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}