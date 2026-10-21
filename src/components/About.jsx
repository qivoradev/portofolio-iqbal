import React, { useEffect, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import SectionHeading from './SectionHeading';
import { FaDatabase } from 'react-icons/fa6';
import { SiPython } from 'react-icons/si';
import excelSlot from '../assets/tools/excel.svg';

/**
 * Section Tentang — Redesigned Layout with Polish
 *
 * 1) Jarak & Judul:
 *    - Padding section clamp(72px, 9vw, 120px) atas & bawah.
 *    - Judul "Tentang Saya" / "About Me": clamp(32px, 3.6vw, 48px), bobot 800.
 *    - Garis aksen 48px x 4px (--accent) di sebelahnya, jarak bawah 48px.
 * 2) Kolom Kiri:
 *    - Grid desktop 1.5fr 0.9fr, gap 80px, align-items: start. Teks tidak dibungkus panel.
 *    - Kalimat pembuka: clamp(22px, 2.2vw, 30px), line-height 1.4, bobot 600.
 *    - Garis aksen vertikal di kiri kalimat pembuka memanjang dari atas ke bawah mengikuti progres scroll section (transform: scaleY, transform-origin: top).
 *    - Teks isi: 17px, line-height 1.8, warna --text-2, max 64ch, jarak antar paragraf 1.25em, jarak dari pembuka 32px.
 * 3) Kolom Kanan (Panel Ringkasan):
 *    - Dibungkus panel: latar var(--surface-2), border 1px var(--border), radius 20px, padding 32px.
 *    - Sticky: top calc(var(--navbar-height) + 32px) di desktop.
 *    - 3 baris dipisah garis 1px (--border):
 *      1. Fokus dari aboutFacts.
 *      2. Sertifikasi (Web Developer (BNSP) & Artificial Intelligence (Certiport)).
 *      3. Tools (SQL dengan FaDatabase var(--accent), Python SiPython, Excel svg; hover/focus naik 3px 150ms).
 * 4) Gerak & Accessibility:
 *    - prefers-reduced-motion: semua statis.
 * 5) Responsif:
 *    - <= 900px: 1 kolom, panel di bawah teks (tidak sticky), kalimat pembuka 22px.
 */
export default function About() {
  const { t, portfolioData, language } = usePortfolio();
  const { about, aboutFacts } = portfolioData;

  const paragraphs = about[language] || about.id;
  const facts = aboutFacts[language] || aboutFacts.id;

  const para1 = paragraphs[0] || '';
  const para2 = paragraphs[1] || '';

  // Pisahkan kalimat pertama paragraf 1 sebagai kalimat pembuka tanpa mengubah teks
  const firstPeriodIdx = para1.indexOf('.');
  const leadSentence = firstPeriodIdx !== -1 ? para1.slice(0, firstPeriodIdx + 1).trim() : para1;
  const restPara1 = firstPeriodIdx !== -1 ? para1.slice(firstPeriodIdx + 1).trim() : '';

  // Label dan value untuk panel ringkas
  const focusLabel = facts[0]?.label || (language === 'en' ? 'Focus' : 'Fokus');
  const focusValue = facts[0]?.value || (language === 'en' ? 'Data processing, cleaning, and analysis' : 'Pengolahan, pembersihan, dan analisis data');

  const certLabel = facts[1]?.label || (language === 'en' ? 'Certifications' : 'Sertifikasi');

  const toolsLabel = facts[2]?.label || 'Tools';

  const sectionRef = useRef(null);
  const leadLineRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const lineEl = leadLineRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.querySelectorAll('.about-animate').forEach((child) => {
        child.classList.add('about-animate--visible');
      });
      if (lineEl) {
        lineEl.style.transform = 'scaleY(1)';
      }
      return;
    }

    // Entrance animation: fade + naik 16px, stagger 80ms, sekali saja
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
      { threshold: 0.1 }
    );
    observer.observe(el);

    // Scroll progress: garis aksen vertikal di kiri kalimat pembuka memanjang dari atas ke bawah
    let ticking = false;
    const updateScrollProgress = () => {
      if (!lineEl || !el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Saat di paling atas halaman (Hero), garis belum memanjang (0)
      const scrollY = window.scrollY || window.pageYOffset || 0;
      if (scrollY < 20) {
        lineEl.style.transform = 'scaleY(0)';
        ticking = false;
        return;
      }

      // Progres scroll section: memanjang saat section bergerak ke area baca aktif
      const start = windowH * 0.85;
      const end = 104; // calc(var(--navbar-height) + 32px)

      let progress = 0;
      if (rect.top <= end) {
        progress = 1;
      } else if (rect.top >= start) {
        progress = 0;
      } else {
        progress = (start - rect.top) / (start - end);
      }

      lineEl.style.transform = `scaleY(${Math.min(1, Math.max(0, progress)).toFixed(4)})`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    updateScrollProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [language]);

  return (
    <section id="tentang" className="about-section" ref={sectionRef}>
      <div className="container">
        {/* Judul & Subjudul: SectionHeading Bersama */}
        <SectionHeading title={t.about.title} subtitle={t.about.subtitle} />

        {/* 2. Grid Dua Kolom (1.5fr 0.9fr, gap 80px) */}
        <div className="about-grid">
          {/* Kolom Kiri: Teks (TIDAK dibungkus panel) */}
          <div className="about-col-text">
            {/* Kalimat pembuka dengan garis aksen vertikal scroll-driven */}
            <p className="about-lead about-animate">
              <span className="about-lead-line" ref={leadLineRef} aria-hidden="true" />
              {leadSentence}
            </p>

            {/* Sisa paragraf 1 dan paragraf 2 */}
            <div className="about-body about-animate">
              {restPara1 && <p className="about-para">{restPara1}</p>}
              {para2 && <p className="about-para">{para2}</p>}
            </div>
          </div>

          {/* Kolom Kanan: Panel Ringkasan (Sticky di desktop) */}
          <div className="about-col-sheet">
            <div className="about-panel about-animate">
              {/* Baris 1: Fokus */}
              <div className="about-sheet-row">
                <span className="about-sheet-label">{focusLabel}</span>
                <span className="about-sheet-value">{focusValue}</span>
              </div>

              {/* Baris 2: Sertifikasi (dua baris terpisah) */}
              <div className="about-sheet-row">
                <span className="about-sheet-label">{certLabel}</span>
                <div className="about-sheet-certs">
                  <span>Web Developer (BNSP)</span>
                  <span>Artificial Intelligence (Certiport)</span>
                </div>
              </div>

              {/* Baris 3: Tools (SQL, Python, Excel dengan logo hover/focus naik 3px) */}
              <div className="about-sheet-row">
                <span className="about-sheet-label">{toolsLabel}</span>
                <div className="about-tools-list">
                  <span className="about-tool-badge" tabIndex={0}>
                    <FaDatabase size={20} color="var(--accent)" style={{ color: 'var(--accent)' }} aria-hidden="true" />
                    <span>SQL</span>
                  </span>
                  <span className="about-tool-badge" tabIndex={0}>
                    <SiPython size={20} color="#3776AB" style={{ color: '#3776AB' }} aria-hidden="true" />
                    <span>Python</span>
                  </span>
                  <span className="about-tool-badge" tabIndex={0}>
                    <img src={excelSlot} width={20} height={20} alt="" aria-hidden="true" />
                    <span>Excel</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
