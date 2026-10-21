import React, { useEffect, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

/**
 * Section Tentang — Layout Baru
 *
 * Struktur:
 *   – Judul "Tentang Saya" di atas, satu baris, tanpa sticky
 *   – Grid dua kolom (1.4fr 0.8fr, gap 64px):
 *       Kiri : kedua paragraf about
 *       Kanan: blok fakta vertikal dengan border-left
 *
 * Animasi: fade + translateY(16px), stagger 80ms, satu kali.
 * Hormati prefers-reduced-motion.
 */
export default function About() {
  const { t, portfolioData, language } = usePortfolio();
  const { about, aboutFacts } = portfolioData;

  const paragraphs = about[language] || about.id;
  const facts      = aboutFacts[language] || aboutFacts.id;

  // Ref ke seluruh section body (di bawah judul) untuk IO
  const bodyRef = useRef(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.querySelectorAll('.about-animate').forEach((child) => {
        child.style.opacity = '1';
        child.style.transform = 'none';
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const items = el.querySelectorAll('.about-animate');
          items.forEach((item, i) => {
            item.style.transitionDelay = `${i * 80}ms`;
            item.classList.add('about-animate--visible');
          });
          observer.disconnect();
        });
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [language]);

  return (
    <section id="tentang" className="section">
      <div className="container">

        {/* Judul — satu baris di atas, rata kiri */}
        <h2 className="about-heading about-animate">{t.about.title}</h2>

        {/* Grid dua kolom */}
        <div className="about-grid" ref={bodyRef}>

          {/* ── Kolom Kiri: Paragraf ── */}
          <div className="about-col-text">
            {paragraphs.map((para, i) => (
              <p
                key={`${language}-p-${i}`}
                className={`about-animate ${i === 0 ? 'about-para-first' : 'about-para-second'}`}
              >
                {para}
              </p>
            ))}
          </div>

          {/* ── Kolom Kanan: Fakta Vertikal ── */}
          <div className="about-col-facts about-animate">
            <div className="about-facts-list">
              {facts.map((fact, i) => (
                <div key={i} className="about-fact-item">
                  <span className="about-fact-label">{fact.label}</span>
                  <span className="about-fact-value">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
