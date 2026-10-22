import React, { useEffect, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import SectionHeading from './SectionHeading';
import { GraduationCap, MapPin, BadgeCheck } from 'lucide-react';

const FACT_ICONS = {
  GraduationCap,
  education: GraduationCap,
  MapPin,
  location: MapPin,
  BadgeCheck,
  Award: BadgeCheck,
  certifications: BadgeCheck,
};

/**
 * Section Tentang — Bento 2x2 Layout with Refined Bento Mini-Cards
 */
export default function About() {
  const { t, portfolioData, language } = usePortfolio();
  const { about, aboutFacts } = portfolioData;

  const quoteHighlight = (about.highlight && (about.highlight[language] || about.highlight.en || about.highlight.id))
    || "Information Technology graduate specialized in data storytelling, interactive dashboards, and business analytics.";

  const paragraphs = about[language] || about.en || about.id || [];
  const facts = aboutFacts[language] || aboutFacts.en || aboutFacts.id || [];

  const sectionRef = useRef(null);
  const leadLineRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const lineEl = leadLineRef.current;
    if (!el || !lineEl) return;

    // Set line visible by default
    lineEl.style.transform = 'scaleY(1)';

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = windowH * 0.85;
      const end = 104;

      let progress = 0;
      if (rect.top <= end) {
        progress = 1;
      } else if (rect.top >= start) {
        progress = 0.2;
      } else {
        progress = (start - rect.top) / (start - end);
      }

      lineEl.style.transform = `scaleY(${Math.min(1, Math.max(0.2, progress)).toFixed(4)})`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="tentang" className="about-section py-12 md:py-16" ref={sectionRef}>
      <div className="container">
        {/* Judul: SectionHeading Rata Kiri */}
        <SectionHeading title={t.about.title} />

        {/* Grid Dua Kolom (Teks Kiri & Bento 2x2 Kanan) */}
        <div className="about-grid">
          {/* Kolom Kiri: Teks */}
          <div className="about-col-text">
            {/* Quote Highlight dengan garis aksen vertikal */}
            <p className="about-lead">
              <span className="about-lead-line" ref={leadLineRef} aria-hidden="true" />
              {quoteHighlight}
            </p>

            {/* Paragraf-paragraf isi */}
            <div className="about-body">
              {paragraphs.map((para, idx) => (
                <p key={idx} className="about-para">{para}</p>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Bento Grid 2x2 Mini-Cards */}
          <div className="about-col-sheet">
            <div className="about-bento-grid grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
              {facts.map((fact, idx) => {
                const isStatus = fact.id === 'status' || fact.isOpenToWork;
                const IconComponent = FACT_ICONS[fact.icon] || FACT_ICONS[fact.id] || BadgeCheck;

                return (
                  <div
                    key={fact.id || idx}
                    className="about-bento-card bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 rounded-xl p-4"
                    role="listitem"
                  >
                    {/* Baris 1: Kotak Ikon di kiri, Label kategori di kanan atas */}
                    <div className="about-bento-card-top flex items-start justify-between mb-3">
                      <div
                        className="about-bento-icon-box w-9 h-9 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-orange-400"
                        aria-hidden="true"
                      >
                        {isStatus ? (
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                          </span>
                        ) : (
                          <IconComponent size={18} />
                        )}
                      </div>

                      <span className="about-bento-label text-xs uppercase tracking-wider text-zinc-500 font-medium">
                        {fact.label}
                      </span>
                    </div>

                    {/* Baris 2 & 3: Nilai Utama & Sub-keterangan */}
                    <div className="about-bento-card-body">
                      <div className="about-bento-value text-zinc-100 font-semibold text-base mt-2">
                        {fact.value}
                      </div>
                      {fact.subtext && (
                        <div className="about-bento-subtext text-zinc-400 text-xs mt-0.5">
                          {fact.subtext}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
