import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import SectionHeading from './SectionHeading';
import {
  SiMysql,
  SiGooglesheets,
  SiFigma,
  SiGithub,
} from 'react-icons/si';
import {
  PiMicrosoftExcelLogoFill,
  PiMicrosoftPowerpointLogoFill,
} from 'react-icons/pi';

/**
 * Icon resmi untuk 6 tools aktif:
 * - Microsoft Excel: PiMicrosoftExcelLogoFill (#107C41)
 * - MySQL: SiMysql (#4479A1)
 * - Google Sheets: SiGooglesheets (#0F9D58)
 * - Figma: SiFigma (#F24E1E)
 * - PowerPoint: PiMicrosoftPowerpointLogoFill (#D24726)
 * - GitHub: SiGithub (currentColor / var(--text))
 */
function ToolBrandIcon({ icon, name, size = 24 }) {
  const key = (icon || name || '').toLowerCase();

  if (key.includes('excel')) {
    return (
      <PiMicrosoftExcelLogoFill
        size={size}
        color="#107C41"
        aria-hidden="true"
        focusable="false"
      />
    );
  }

  if (key.includes('mysql') || key.includes('postgres') || key.includes('sql')) {
    return (
      <SiMysql
        size={size}
        color="#4479A1"
        aria-hidden="true"
        focusable="false"
      />
    );
  }

  if (key.includes('sheets')) {
    return (
      <SiGooglesheets
        size={size}
        color="#0F9D58"
        aria-hidden="true"
        focusable="false"
      />
    );
  }

  if (key.includes('figma')) {
    return (
      <SiFigma
        size={size}
        color="#F24E1E"
        aria-hidden="true"
        focusable="false"
      />
    );
  }

  if (key.includes('powerpoint')) {
    return (
      <PiMicrosoftPowerpointLogoFill
        size={size}
        color="#D24726"
        aria-hidden="true"
        focusable="false"
      />
    );
  }

  if (key.includes('github')) {
    return (
      <SiGithub
        size={size}
        style={{ color: 'var(--text)' }}
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

  const defaultDesc = language === 'en'
    ? 'Data-driven approach to uncovering patterns, validating data integrity, and delivering structured business insights.'
    : 'Pendekatan berbasis data untuk mengekstrak pola, memvalidasi integritas data, dan menyajikan insight bisnis yang terstruktur.';

  return (
    <section id="tools" className="skills-section py-12 md:py-16">
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          title={t.skills?.title || (language === 'en' ? 'Skills & Tools' : 'Keahlian & Tools')}
        />

        {/* Bento Grid 2 Kolom (1 Kolom di Mobile, 2 Kolom di Desktop) */}
        <div className="skills-bento-grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Kartu Kiri: Core Competencies */}
          <div className="skills-bento-card skills-bento-card--competencies">
            <div className="skills-bento-header">
              <h3 className="skills-bento-title">
                {t.skills?.competenciesTitle || (language === 'en' ? 'Core Competencies' : 'Kompetensi Utama')}
              </h3>
              <p className="skills-bento-desc">
                {t.skills?.competenciesDesc || defaultDesc}
              </p>
            </div>

            <div className="skills-badges-wrap flex-wrap justify-start gap-2" role="list">
              {coreCompetencies.map((comp, idx) => {
                const compName = typeof comp.name === 'object'
                  ? (comp.name[language] || comp.name.id || comp.name.en)
                  : comp.name;
                return (
                  <div key={idx} className="competency-badge-pill" role="listitem">
                    <span>{compName}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Kartu Kanan: Tools & Technologies (6 Kartu Presisi 2 Kolom x 3 Baris) */}
          <div className="skills-bento-card skills-bento-card--tools">
            <div className="skills-bento-header">
              <h3 className="skills-bento-title">
                {t.skills?.toolsTitle || (language === 'en' ? 'Tools & Technologies' : 'Tools & Teknologi')}
              </h3>
            </div>

            <div className="tools-mini-grid" role="list">
              {tools.map((tool, idx) => {
                const toolName = typeof tool.name === 'object'
                  ? (tool.name[language] || tool.name.id || tool.name.en)
                  : tool.name;
                return (
                  <div
                    key={tool.icon || toolName || idx}
                    className="tool-mini-card"
                    role="listitem"
                  >
                    <span className="tool-mini-icon-box" aria-hidden="true">
                      <ToolBrandIcon icon={tool.icon} name={toolName} size={22} />
                    </span>
                    <span className="tool-mini-name">{toolName}</span>
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
