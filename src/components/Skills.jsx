import React, { useEffect, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  SiGooglesheets,
  SiLooker,
  SiLaravel,
  SiPostgresql,
  SiPython,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa6';

// SVG lokal untuk ikon Excel dan PowerPoint
import excelSlot from '../assets/tools/excel.svg';
import powerpointSlot from '../assets/tools/powerpoint.svg';

/**
 * Logo resmi Figma 5 warna (SVG)
 */
function FigmaIcon({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}

const ICON_MAP = {
  figma:           { type: 'custom', Component: FigmaIcon },
  excel:           { type: 'svg',    src: excelSlot },
  'google-sheets': { type: 'si',     Component: SiGooglesheets, color: '#0F9D58' },
  looker:          { type: 'si',     Component: SiLooker,        color: '#4285F4' },
  laravel:         { type: 'si',     Component: SiLaravel,       color: '#FF2D20' },
  postgresql:      { type: 'si',     Component: SiPostgresql,    color: '#4169E1' },
  powerpoint:      { type: 'svg',    src: powerpointSlot },
  python:          { type: 'si',     Component: SiPython,        color: '#3776AB' },
  sql:             { type: 'fa6',    Component: FaDatabase,      color: 'var(--accent)' },
};

function ToolIcon({ tool }) {
  const entry = ICON_MAP[tool.icon];
  if (!entry) return null;

  if (entry.type === 'custom') {
    const { Component } = entry;
    return <Component size={24} />;
  }

  if (entry.type === 'svg') {
    return (
      <img
        src={entry.src}
        alt=""
        aria-hidden="true"
        className="tool-card-icon-img"
      />
    );
  }

  const iconColor = entry.color !== null ? entry.color : tool.brandColor;
  const { Component } = entry;
  return (
    <Component
      size={24}
      color={iconColor}
      style={{ color: iconColor }}
      aria-hidden="true"
      focusable="false"
    />
  );
}

function ToolCard({ tool }) {
  const brand = tool.brandColor === 'multicolor' ? '#F24E1E' : tool.brandColor;

  return (
    <div
      className="tool-card"
      style={{ '--tool-brand': brand }}
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
        {/* Judul: "Skills & Tools" + Garis Aksen 48px x 4px */}
        <div className="skills-header skills-animate">
          <h2 className="skills-title">{t.skills.title}</h2>
          <span className="skills-accent-line" aria-hidden="true" />
        </div>

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
