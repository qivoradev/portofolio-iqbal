import React from 'react';
import { MailIcon } from './Icons';

export default function Contact({ language = 'en' } = {}) {
  const isEn = language === 'en';

  return (
    <section className="w-full max-w-4xl mx-auto my-auto py-2">
      {/* Jendela Konsol Luar */}
      <div className="w-full max-w-4xl mx-auto rounded-3xl border border-zinc-200 dark:border-zinc-800/90 bg-white/95 dark:bg-zinc-950/80 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col transition-colors duration-300 relative">
        {/* Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* 1. Bar Header Konsol */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900/60 select-none text-zinc-600 dark:text-zinc-400 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-[#eab308]" />
            <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
            <span className="ml-2 font-semibold flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300">
              contact-interface.sh
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            <span>SOCKET_OPEN</span>
          </div>
        </div>

        {/* 2. Body Grid Terpusat */}
        <div className="p-6 sm:p-10 flex flex-col items-center text-center max-w-2xl mx-auto w-full">
          {/* Icon Pembungkus */}
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center mx-auto mb-3">
            <MailIcon size={24} />
          </div>

          {/* Judul Utama */}
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-2 tracking-tight">
            {isEn ? "Let's Collaborate on Data Solutions" : 'Mari Berkolaborasi'}
          </h2>

          {/* Sub-deskripsi */}
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto mb-2 leading-relaxed">
            {isEn
              ? 'Have an analytics opportunity, business intelligence project, or strategic inquiry? Connect directly via channels below.'
              : 'Punya tawaran analisis data, proyek spreadsheet, atau peluang kerja? Hubungi saya secara langsung melalui kanal berikut.'}
          </p>

          {/* Sub-label Terminal */}
          <div className="flex flex-col items-center justify-center gap-4 mt-6">
            <span className="font-mono text-[11px] tracking-widest text-zinc-500 uppercase">
              {language === 'en' ? '// Direct Channels' : '// Saluran Langsung'}
            </span>

            {/* Row of Interactive Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              
              {/* 1. Email */}
              <a
                href="mailto:iqbaldwifathonah@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/80 hover:bg-red-500/10 border border-zinc-800 hover:border-red-500/40 text-zinc-300 hover:text-red-400 active:scale-95 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 text-[#EA4335] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="text-xs font-mono font-medium">Email</span>
              </a>

              {/* 2. LinkedIn */}
              <a
                href="https://linkedin.com/in/iqbaldwifathonah"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/80 hover:bg-sky-500/10 border border-zinc-800 hover:border-sky-500/40 text-zinc-300 hover:text-sky-400 active:scale-95 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 text-[#0A66C2] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.77-1.72 1.72s.77 1.73 1.72 1.73 1.73-.78 1.73-1.73-.78-1.72-1.73-1.72z" />
                </svg>
                <span className="text-xs font-mono font-medium">LinkedIn</span>
              </a>

              {/* 3. WhatsApp */}
              <a
                href="https://wa.me/6282322231710?text=Halo%20Iqbal,%20saya%20melihat%20portofolio%20Data%20Analyst%20Anda"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/80 hover:bg-emerald-500/10 border border-zinc-800 hover:border-emerald-500/40 text-zinc-300 hover:text-emerald-400 active:scale-95 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 0 1-5.82 2.42c-1.49 0-2.95-.4-4.22-1.16l-.3-.18-3.13.82.83-3.05-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24z" />
                </svg>
                <span className="text-xs font-mono font-medium">WhatsApp</span>
              </a>

              {/* 4. GitHub */}
              <a
                href="https://github.com/iqbaldwifathonah"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white active:scale-95 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 text-zinc-300 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span className="text-xs font-mono font-medium">GitHub</span>
              </a>

            </div>

            {/* Info Lokasi Singkat di Bawah */}
            <p className="font-mono text-[11px] text-zinc-500 mt-2">
              📍 Yogyakarta / Jakarta, ID &bull; UTC+7
            </p>
          </div>
        </div>

        {/* 3. Bar Footer Konsol */}
        <div className="px-5 py-2.5 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950/90 flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
          <span>CONNECTION_READY // PING: 18ms</span>
          <span>ENCRYPTED_TLS // PORT: 443</span>
        </div>
      </div>
    </section>
  );
}
