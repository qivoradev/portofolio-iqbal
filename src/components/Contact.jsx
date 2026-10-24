import React from 'react';

export default function Contact({ language = 'en' } = {}) {
  const isEn = language === 'en';

  return (
    <section className="w-full max-w-5xl mx-auto py-6 sm:py-12 flex flex-col items-center justify-center">
      {/* Kartu Kontak Terpusat (Clean Modern Bento Card) */}
      <div className="max-w-2xl w-full mx-auto p-8 sm:p-12 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm flex flex-col items-center text-center relative overflow-hidden shadow-2xl">
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* Judul Utama */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
          {isEn ? "Let's Collaborate" : 'Mari Berkolaborasi'}
        </h2>

        {/* Deskripsi Ajakan Ramah & Profesional */}
        <p className="text-zinc-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
          {isEn
            ? 'Have an analytics opportunity, business intelligence project, or strategic inquiry? Connect directly via channels below.'
            : 'Punya tawaran analisis data, proyek spreadsheet, atau peluang kerja? Hubungi saya secara langsung melalui kanal berikut.'}
        </p>

        {/* Deretan Tombol Ikon Melingkar */}
        <div className="flex items-center justify-center gap-4">
          {/* 1. Email */}
          <a
            href="mailto:iqbaldwifathonah@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
            title="Email"
            className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-700 transition-all active:scale-95 flex items-center justify-center group shadow-sm"
          >
            <svg
              className="w-5 h-5 text-zinc-400 group-hover:text-[#EA4335] group-hover:scale-110 transition-all"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>

          {/* 2. WhatsApp */}
          <a
            href="https://wa.me/6282322231710?text=Halo%20Iqbal,%20saya%20melihat%20portofolio%20Data%20Analyst%20Anda"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-700 transition-all active:scale-95 flex items-center justify-center group shadow-sm"
          >
            <svg
              className="w-5 h-5 text-zinc-400 group-hover:text-[#25D366] group-hover:scale-110 transition-all"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 0 1-5.82 2.42c-1.49 0-2.95-.4-4.22-1.16l-.3-.18-3.13.82.83-3.05-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24z" />
            </svg>
          </a>

          {/* 3. GitHub */}
          <a
            href="https://github.com/iqbaldwifathonah"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-700 transition-all active:scale-95 flex items-center justify-center group shadow-sm"
          >
            <svg
              className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>

          {/* 4. LinkedIn */}
          <a
            href="https://linkedin.com/in/iqbaldwifathonah"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-700 transition-all active:scale-95 flex items-center justify-center group shadow-sm"
          >
            <svg
              className="w-5 h-5 text-zinc-400 group-hover:text-[#0A66C2] group-hover:scale-110 transition-all"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.77-1.72 1.72s.77 1.73 1.72 1.73 1.73-.78 1.73-1.73-.78-1.72-1.73-1.72z" />
            </svg>
          </a>
        </div>

        {/* Info Lokasi & Zona Waktu */}
        <p className="text-xs font-mono text-zinc-500 mt-6">
          📍 Yogyakarta / Jakarta, ID &bull; UTC+7
        </p>
      </div>
    </section>
  );
}
