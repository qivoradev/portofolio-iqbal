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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#1A1A18] rounded-[8px] overflow-hidden"
        style={{ border: '0.5px solid #2E2E2C' }}
      >
        {/* Sticky Header */}
        <div
          className="sticky top-0 z-20 flex items-center justify-between px-5 py-3.5 bg-[#111110]"
          style={{ borderBottom: '0.5px solid #252523' }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#8A8A86]">
              {project.category || 'Business Case Study'}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup"
            className="w-7 h-7 rounded-[4px] flex items-center justify-center bg-[#242422] text-[#8A8A86] hover:text-[#E8E6DF] transition-colors cursor-pointer border-0"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 overscroll-contain">
          {/* Dashboard Image */}
          <div
            className="rounded-[6px] overflow-hidden bg-[#111110]"
            style={{ border: '0.5px solid #252523' }}
          >
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#E8E6DF] mb-2 tracking-tight">
              {project.title}
            </h3>
            <p
              className="text-[#8A8A86] leading-relaxed mb-3"
              style={{ fontSize: '15px', lineHeight: 1.7 }}
            >
              {project.description || project.shortDesc}
            </p>

            {/* Tags */}
            {(project.detailedTools || project.tags) && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {(project.detailedTools || project.tags).map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] text-[#3E3E3B] hover:text-[#8A8A86] transition-colors"
                    style={{ border: '0.5px solid #2E2E2C' }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* KPI Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div
              className={`grid ${
                project.metrics.length === 4 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3'
              } gap-3 p-3.5 rounded-[6px] bg-[#111110]`}
              style={{ border: '0.5px solid #252523' }}
            >
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] font-mono text-[#3E3E3B] uppercase mb-1">
                    {metric.label}
                  </span>
                  <span className="font-mono text-sm sm:text-base font-extrabold text-[#E8E6DF]">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Key Insights */}
          {project.insights && project.insights.length > 0 && (
            <div
              className="p-4 sm:p-5 rounded-[6px] bg-[#111110]"
              style={{ border: '0.5px solid #252523' }}
            >
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#22C55E] font-bold mb-3">
                {language === 'en' ? '// KEY BUSINESS INSIGHTS' : '// INSIGHT KUNCI ANALISIS'}
              </h4>
              <ul className="space-y-2 font-sans text-xs sm:text-sm text-[#8A8A86] leading-relaxed">
                {project.insights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#22C55E] mt-0.5 flex-shrink-0">✓</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer Action */}
          <div className="pt-2 flex items-center justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-[4px] bg-[#242422] text-[#E8E6DF] hover:text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
              style={{ border: '0.5px solid #2E2E2C' }}
            >
              {language === 'en' ? 'Close Window' : 'Tutup'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
