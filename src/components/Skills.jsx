import React, { useEffect, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import SectionHeading from './SectionHeading';
import {
  SiGooglesheets,
  SiLooker,
  SiLaravel,
  SiPostgresql,
  SiPython,
  SiFigma,
} from 'react-icons/si';
import {
  FaDatabase,
  FaFileExcel,
  FaFilePowerpoint,
} from 'react-icons/fa6';

/**
 * Mapping ikon tool ke komponen SVG resmi.
 * Seluruh ikon menggunakan pewarnaan seragam satu warna (var(--accent))
 * yang secara otomatis mengikuti tema terang dan gelap.
 */
const ICON_MAP = {
  figma:           SiFigma,
  excel:           FaFileExcel,
  'google-sheets': SiGooglesheets,
  googlesheets:    SiGooglesheets,
  looker:          SiLooker,
  'looker-studio': SiLooker,
  laravel:         SiLaravel,
  postgresql:      SiPostgresql,
  powerpoint:      FaFilePowerpoint,
  python:          SiPython,
  sql:             FaDatabase,
};

function ToolIcon({ tool }) {
  const Component = ICON_MAP[tool.icon] || FaDatabase;
  return (
    <Component
      size={24}
      color="var(--accent)"
      style={{ color: 'var(--accent)' }}
      aria-hidden="true"
      focusable="false"
    />
  );
}

function ToolCard({ tool }) {
  return (
    <div
      className="tool-card"
      tabIndex={0}
      role="listitem"
      aria-label={tool.name}
    >
      <div className="tool-card-icon-box" aria-hidden="true">
        <ToolIcon tool={tool} />
      </div>
      <span className="tool-card-name">{tool.name}</span>
    </div>
  );
}

export default function Skills() {
  const { t, portfolioData, language } = usePortfolio();
  const { tools, coreCompetencies } = portfolioData;

  // Hanya item tools dengan enabled === true yang tampil
  const activeTools = (tools || []).filter((tool) => tool.enabled === true);

  // Hanya item kompetensi dengan enabled === true yang tampil
  const activeCompetencies = (coreCompetencies || []).filter((comp) => comp.enabled === true);

  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.querySelectorAll('.skills-animate').forEach((child) => {
        child.classList.add('skills-animate--visible');
      });
      el.querySelectorAll('.skills-animate-col').forEach((child) => {
        child.classList.add('skills-animate--visible');
      });
      el.querySelectorAll('.skills-comp-item').forEach((item) => {
        item.classList.add('skills-comp-item--visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          // Header
          const header = el.querySelector('.skills-header');
          if (header) {
            header.classList.add('skills-animate--visible');
          }

          // Kedua kolom: fade + naik 16px, stagger 80ms
          const cols = el.querySelectorAll('.skills-animate-col');
          cols.forEach((col, i) => {
            col.style.transitionDelay = `${(i + 1) * 80}ms`;
            col.classList.add('skills-animate--visible');
          });

          // Baris kompetensi muncul berurutan 60ms
          const compItems = el.querySelectorAll('.skills-comp-item');
          compItems.forEach((item, i) => {
            item.style.transitionDelay = `${160 + i * 60}ms`;
            item.classList.add('skills-comp-item--visible');
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
        {/* Judul & Subjudul: SectionHeading Bersama */}
        <SectionHeading title={t.skills.title} subtitle={t.skills.subtitle} />

        {/* Grid Dua Kolom (0.9fr 1.1fr, gap 64px, dipisah garis 1px) */}
        <div className="skills-grid">
          {/* Kolom Kiri: Core Competencies */}
          <div className="skills-col-competencies skills-animate-col">
            <h3 className="skills-col-heading">
              {t.skills.competenciesTitle || (language === 'en' ? 'Core Competencies' : 'Kompetensi Utama')}
            </h3>
            <div className="skills-comp-list" role="list">
              {activeCompetencies.map((comp, idx) => {
                const compName = typeof comp.name === 'object' ? (comp.name[language] || comp.name.id) : comp.name;
                return (
                  <div key={idx} className="skills-comp-item" role="listitem">
                    <span className="skills-comp-name">{compName}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Kolom Kanan: Tools & Tech (Wrap Statis) */}
          <div className="skills-col-tools skills-animate-col">
            <h3 className="skills-col-heading">
              {t.skills.toolsTitle || 'Tools & Tech'}
            </h3>
            <div className="skills-tools-grid" role="list">
              {activeTools.map((tool, idx) => (
                <ToolCard key={`tool-${tool.icon || idx}`} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
