import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  SiFigma,
  SiGooglesheets,
  SiLooker,
  SiLaravel,
  SiPostgresql,
} from 'react-icons/si';

// SVG lokal untuk ikon yang tidak tersedia di react-icons v5
import excelSlot from '../assets/tools/excel.svg';
import powerpointSlot from '../assets/tools/powerpoint.svg';

/**
 * Peta ikon tool:
 *   type "si"  → komponen react-icons/si, render <Component size={N} color={brandColor} />
 *   type "svg" → path file SVG lokal, render <img src={path} width={N} height={N} alt="" />
 *
 * Figma (SiFigma): logo resmi simple-icons berwarna hitam satu warna.
 * Agar tetap terlihat di tema gelap, kita berikan warna putih/netral (#FFFFFF)
 * dan tambahkan komentar: logo Figma satu warna dari simple-icons.
 *
 * Excel & PowerPoint: slot SVG lokal berlatar brand color (terlihat di kedua tema).
 * Ganti file excel.svg / powerpoint.svg dengan logo resmi Microsoft kapan saja.
 */
const ICON_MAP = {
  figma:           { type: 'si',  Component: SiFigma,        color: '#FFFFFF' },
  'google-sheets': { type: 'si',  Component: SiGooglesheets, color: null },  // brandColor dari data
  looker:          { type: 'si',  Component: SiLooker,        color: null },
  laravel:         { type: 'si',  Component: SiLaravel,       color: null },
  postgresql:      { type: 'si',  Component: SiPostgresql,    color: null },
  excel:           { type: 'svg', src: excelSlot },
  powerpoint:      { type: 'svg', src: powerpointSlot },
};

const ICON_SIZE = 56;

function ToolIcon({ tool }) {
  const entry = ICON_MAP[tool.icon];
  if (!entry) return null;

  if (entry.type === 'svg') {
    return (
      <img
        src={entry.src}
        width={ICON_SIZE}
        height={ICON_SIZE}
        alt=""
        aria-hidden="true"
        className="tool-card-icon-img"
      />
    );
  }

  // type === 'si': react-icons komponen
  const iconColor = entry.color !== null ? entry.color : tool.brandColor;
  const { Component } = entry;
  return (
    <Component
      size={ICON_SIZE}
      color={iconColor}
      aria-hidden="true"
      focusable="false"
    />
  );
}

function ToolCard({ tool, style, 'aria-hidden': ariaHidden }) {
  return (
    <div
      className="tool-card"
      style={style}
      title={tool.name}
      aria-hidden={ariaHidden}
    >
      <div className="tool-card-icon">
        <ToolIcon tool={tool} />
      </div>
      <span className="tool-card-name">{tool.name}</span>
    </div>
  );
}

export default function Skills() {
  const { t, portfolioData } = usePortfolio();
  const { tools, skillGroups } = portfolioData;

  return (
    <section id="tools" className="section">
      <div className="container">

        {/* Section Header — judul saja, tanpa tag label dan tanpa subjudul */}
        <div className="section-header">
          <h2 className="section-title">{t.skills.title}</h2>
        </div>

        {/* Marquee Satu Baris — loop mulus dengan duplikasi aria-hidden */}
        <div
          className="marquee-wrapper"
          aria-label="Daftar perangkat yang digunakan"
          role="region"
        >
          <div className="marquee-row">
            <div className="marquee-track marquee-track-left">
              {/* Daftar Asli — dibaca screen reader */}
              {tools.map((tool, idx) => (
                <ToolCard
                  key={`orig-${idx}`}
                  tool={tool}
                  style={{ '--brand-color': tool.brandColor }}
                />
              ))}
              {/* Duplikasi untuk loop mulus — aria-hidden agar tidak dibaca dua kali */}
              {tools.map((tool, idx) => (
                <ToolCard
                  key={`dup-${idx}`}
                  tool={tool}
                  style={{ '--brand-color': tool.brandColor }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Kelompok Kemampuan Analitik */}
        <div className="skill-groups-container">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="skill-group-block">
              <h3 className="skill-group-heading">{group.title}</h3>
              <ul className="skill-group-list">
                {group.items.map((item, iIdx) => (
                  <li key={iIdx} className="skill-group-list-item">
                    — {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
