import React from 'react';

export default function Contact({ language = 'id' } = {}) {
  const isEn = language === 'en';

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-xl backdrop-blur-sm text-center relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-amber-500/10 dark:bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />

        {/* Badge Ketersediaan */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>{isEn ? 'Open for Opportunities' : 'Siap Berdiskusi'}</span>
        </div>

        {/* Judul & Deskripsi */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mb-2">
          {isEn ? "Let's Collaborate" : 'Mari Berkolaborasi'}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto mb-8 leading-relaxed">
          {isEn
            ? 'Looking for a data analyst to model datasets, build Excel dashboards, or uncover business insights? Feel free to reach out.'
            : 'Tertarik mendiskusikan pengolahan data, perancangan dashboard Excel, atau peluang kerja sama analitik? Hubungi saya melalui kanal di bawah.'}
        </p>

        {/* Direct Action Channels (Tombol Ikon Rapi Berbingkai) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <a
            href="mailto:iqbaldwifathonah@gmail.com"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 hover:border-zinc-400 dark:hover:border-zinc-600 text-xs font-mono text-zinc-800 dark:text-zinc-200 transition-all active:scale-95 shadow-sm"
          >
            <span className="text-emerald-500">✉</span>
            <span>{isEn ? 'Direct Email' : 'Email Langsung'}</span>
          </a>

          <a
            href="https://wa.me/6282322231710?text=Halo%20Iqbal,%20saya%20melihat%20portofolio%20Data%20Analyst%20Anda"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 hover:border-zinc-400 dark:hover:border-zinc-600 text-xs font-mono text-zinc-800 dark:text-zinc-200 transition-all active:scale-95 shadow-sm"
          >
            <span className="text-emerald-500">💬</span>
            <span>WhatsApp</span>
          </a>

          <a
            href="https://linkedin.com/in/iqbaldwifathonah"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 hover:border-zinc-400 dark:hover:border-zinc-600 text-zinc-800 dark:text-zinc-200 transition-all active:scale-95 shadow-sm flex items-center justify-center"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4 text-zinc-700 dark:text-zinc-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.77-1.72 1.72s.77 1.73 1.72 1.73 1.73-.78 1.73-1.73-.78-1.72-1.73-1.72z" />
            </svg>
          </a>

          <a
            href="https://github.com/iqbaldwifathonah"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 hover:border-zinc-400 dark:hover:border-zinc-600 text-zinc-800 dark:text-zinc-200 transition-all active:scale-95 shadow-sm flex items-center justify-center"
            title="GitHub"
            aria-label="GitHub"
          >
            <svg className="w-4 h-4 text-zinc-700 dark:text-zinc-300" viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
        </div>

        {/* Info Domisili */}
        <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
          📍 Yogyakarta / Jakarta, Indonesia • GMT+7
        </p>
      </div>
    </div>
  );
}
