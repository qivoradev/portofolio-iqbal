import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose, language = 'en' }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* STICKY HEADER */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-3.5 bg-white/95 dark:bg-zinc-900/95 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {project.category || 'Business Case Study'}
            </span>
          </div>

          {/* TOMBOL CLOSE (X) YANG JELAS & MUDAH DI-TAP */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup Detail"
            className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors cursor-pointer border-0"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* SCROLLABLE BODY (KONTEN UTAMA) */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 overscroll-contain">
          {/* A. Gambar Dashboard Proyek */}
          <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950">
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
          </div>

          {/* B. Judul & Deskripsi Masalah */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.description || project.highlight}
            </p>
          </div>

          {/* C. Ringkasan Metrik KPI (3 Kolom Sejajar Rapi) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className={`grid ${project.metrics.length === 4 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3'} gap-2 sm:gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800`}>
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium mb-1 line-clamp-1">
                    {metric.label}
                  </span>
                  <span className="font-mono text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* D. Box Insight Kunci Analisis */}
          {project.insights && project.insights.length > 0 && (
            <div className="p-4 sm:p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-zinc-800">
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-3">
                {language === 'en' ? '// KEY BUSINESS INSIGHTS' : '// INSIGHT KUNCI ANALISIS'}
              </h4>
              <ul className="space-y-2.5">
                {project.insights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* E. Footer Modal (Tombol Selesai) */}
          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-medium hover:opacity-90 active:scale-95 transition-all cursor-pointer border-0"
            >
              {language === 'en' ? 'Close Window' : 'Tutup'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
