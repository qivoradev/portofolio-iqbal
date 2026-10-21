import React, { useEffect, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import SectionHeading from './SectionHeading';

/**
 * Section Tentang — Redesigned Layout with Polish
 *
 * 1) Jarak & Judul:
 *    - Padding section clamp(72px, 9vw, 120px) atas & bawah.
 *    - Judul "Tentang Saya" / "About Me" rata kiri, tanpa subjudul.
 * 2) Kolom Kiri:
 *    - Grid desktop 1.5fr 0.9fr, gap 80px, align-items: start. Teks tidak dibungkus panel.
 *    - Kalimat pembuka: clamp(18px, 1.8vw, 22px), line-height 1.5, bobot 600.
 *    - Garis aksen vertikal di kiri kalimat pembuka memanjang dari atas ke bawah mengikuti progres scroll section.
 *    - Teks isi: 17px, line-height 1.8, warna --text-2, max 64ch, jarak antar paragraf 1.25em, jarak dari pembuka 28px.
 *    - Paragraf kedua dipecah menjadi dua paragraf pendek.
 * 3) Kolom Kanan (Kartu Samping):
 *    - Latar var(--surface-2), border 1px var(--border), radius 20px, padding 32px.
 *    - Sticky: top calc(var(--navbar-height) + 32px) di desktop.
 *    - Baris profil ringkas: Pendidikan, Tahun Lulus, Lokasi, Status.
 * 4) Gerak & Accessibility:
 *    - prefers-reduced-motion: semua statis.
 * 5) Responsif:
 *    - <= 900px: 1 kolom, panel di bawah teks (tidak sticky).
 */
export default function About() {
  const { t, portfolioData, language } = usePortfolio();
  const { about, aboutFacts } = portfolioData;

  const paragraphs = about[language] || about.id || [];
  const facts = aboutFacts[language] || aboutFacts.id || [];

  const para1 = paragraphs[0] || '';

  // Pisahkan kalimat pertama paragraf 1 sebagai kalimat pembuka tanpa mengubah teks
  const firstPeriodIdx = para1.indexOf('.');
  const leadSentence = firstPeriodIdx !== -1 ? para1.slice(0, firstPeriodIdx + 1).trim() : para1;
  const restPara1 = firstPeriodIdx !== -1 ? para1.slice(firstPeriodIdx + 1).trim() : '';

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
        {/* Judul: SectionHeading Rata Kiri, Tanpa Subjudul */}
        <SectionHeading title={t.about.title} />

        {/* 2. Grid Dua Kolom (1.5fr 0.9fr, gap 80px) */}
        <div className="about-grid">
          {/* Kolom Kiri: Teks (TIDAK dibungkus panel) */}
          <div className="about-col-text">
            {/* Kalimat pembuka dengan garis aksen vertikal scroll-driven */}
            <p className="about-lead about-animate">
              <span className="about-lead-line" ref={leadLineRef} aria-hidden="true" />
              {leadSentence}
            </p>

            {/* Sisa paragraf 1 dan paragraf-paragraf pendek berikutnya */}
            <div className="about-body about-animate">
              {restPara1 && <p className="about-para">{restPara1}</p>}
              {paragraphs.slice(1).map((para, idx) => (
                <p key={idx} className="about-para">{para}</p>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Panel Ringkasan Profil (Sticky di desktop) */}
          <div className="about-col-sheet">
            <div className="about-panel about-animate">
              {facts.map((fact, idx) => (
                <div key={idx} className="about-sheet-row">
                  <span className="about-sheet-label">{fact.label}</span>
                  <span className="about-sheet-value">{fact.value || '[Isi]'}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
