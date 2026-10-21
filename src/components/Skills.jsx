import React, { useEffect, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import SectionHeading from './SectionHeading';
import {
  SiPython,
  SiGooglesheets,
  SiPostgresql,
} from 'react-icons/si';
import { PiMicrosoftExcelLogoFill as SiMicrosoftexcel } from 'react-icons/pi';
import { Database } from 'lucide-react';

/**
 * Komponen Ikon Tool berukuran seragam dengan logo resmi:
 * - Excel: SiMicrosoftexcel, hijau (#217346)
 * - Google Sheets: SiGooglesheets, hijau (#0F9D58)
 * - Python: SiPython, warna aslinya (#3776AB)
 * - PostgreSQL: SiPostgresql, biru (#336791)
 * - SQL: Database (lucide-react), warna aksen (var(--accent))
 */
const ICON_SIZE = 28;

function ToolIcon({ icon }) {
  if (icon === 'sql') {
    return (
      <Database
        size={ICON_SIZE}
        color="var(--accent)"
        strokeWidth={2}
        aria-hidden="true"
        focusable="false"
      />
    );
  }
  if (icon === 'postgresql') {
    return (
      <SiPostgresql
        size={ICON_SIZE}
        color="#336791"
        aria-hidden="true"
        focusable="false"
      />
    );
  }
  if (icon === 'python') {
    return (
      <SiPython
        size={ICON_SIZE}
        color="#3776AB"
        aria-hidden="true"
        focusable="false"
      />
    );
  }
  if (icon === 'excel') {
    return (
      <SiMicrosoftexcel
        size={ICON_SIZE}
        color="#217346"
        aria-hidden="true"
        focusable="false"
      />
    );
  }
  if (icon === 'google-sheets' || icon === 'googlesheets') {
    return (
      <SiGooglesheets
        size={ICON_SIZE}
        color="#0F9D58"
        aria-hidden="true"
        focusable="false"
      />
    );
  }
  return null;
}

export default function Skills() {
  const { t, portfolioData, language } = usePortfolio();
  const tools = (portfolioData.tools || []).filter((tool) => tool.enabled !== false);
  const coreCompetencies = (portfolioData.coreCompetencies || []).filter((comp) => comp.enabled !== false);

  // Daftar kompetensi: satu baris teks biasa dipisah titik tengah, bukan ubin
  const competencyText = coreCompetencies
    .map((comp) => {
      const name = typeof comp.name === 'object'
        ? (comp.name[language] || comp.name.id || comp.name.en)
        : comp.name;
      return name;
    })
    .filter(Boolean)
    .join(' · ');

  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tiles = el.querySelectorAll('.tool-tile');

    if (prefersReduced) {
      tiles.forEach((tile) => tile.classList.add('tool-tile--visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          tiles.forEach((tile, i) => {
            tile.style.transitionDelay = `${i * 60}ms`;
            tile.classList.add('tool-tile--visible');
          });
          observer.disconnect();
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [language]);

  return (
    <section id="tools" className="skills-section" ref={sectionRef}>
      <div className="container">
        {/* Judul section: rata kiri, tanpa subjudul dan tanpa label kapital */}
        <SectionHeading
          title={t.skills?.title || (language === 'en' ? 'Skills & Tools' : 'Keahlian & Tools')}
        />

        {/* Daftar kompetensi: satu baris teks biasa dipisah titik tengah, bukan ubin */}
        {competencyText && (
          <p className="skills-competencies-line">{competencyText}</p>
        )}

        {/* Grid ubin vertikal tools: 5 kolom desktop, 3 kolom tablet, 2 kolom HP */}
        <div className="skills-tools-grid" role="list">
          {tools.map((tool, idx) => (
            <div
              key={tool.icon || idx}
              className="tool-tile"
              role="listitem"
              tabIndex={0}
            >
              <div className="tool-tile-icon-box" aria-hidden="true">
                <ToolIcon icon={tool.icon} />
              </div>
              <span className="tool-tile-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
